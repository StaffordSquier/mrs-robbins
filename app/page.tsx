'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface VoiceSlot {
  id: string;
  variable: string;
  value: number;
}

export default function MrsRobbinsConversation() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [slots, setSlots] = useState<VoiceSlot[]>([
    { id: '1', variable: 'formality', value: 5 },
    { id: '2', variable: 'complexity', value: 5 },
    { id: '3', variable: 'emotionality', value: 5 },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addSlot = () => {
    if (slots.length < 5) {
      setSlots([...slots, { id: Date.now().toString(), variable: 'formality', value: 5 }]);
    }
  };

  const removeSlot = (id: string) => {
    if (slots.length > 1) {
      setSlots(slots.filter(slot => slot.id !== id));
    }
  };

  const updateSlot = (id: string, field: 'variable' | 'value', value: string | number) => {
    setSlots(slots.map(slot => 
      slot.id === id ? { ...slot, [field]: value } : slot
    ));
  };

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const voiceConfig = slots.reduce((acc, slot) => {
        acc[slot.variable] = slot.value;
        return acc;
      }, {} as Record<string, number>);

      const response = await fetch('/api/conversation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          voiceConfig,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F5F3]">
      {/* Main Conversation Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b border-[#8A8A8A] p-4">
          <h1 className="text-2xl font-semibold text-[#2B2B2B]">Mrs. Robbins</h1>
          <p className="text-sm text-[#6A6A6A]">Your cognitive acceleration partner</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 && (
            <div className="text-center mt-20">
              <p className="text-[#6A6A6A] text-lg mb-2">Welcome to Mrs. Robbins</p>
              <p className="text-[#8A8A8A]">Start a conversation to begin organizing your thoughts.</p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-2xl rounded-lg p-4 ${
                  message.role === 'user'
                    ? 'bg-[#0D9488] text-white'
                    : 'bg-white text-[#2B2B2B] border border-[#8A8A8A]'
                }`}
              >
                <p className="whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-white/70' : 'text-[#8A8A8A]'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-[#8A8A8A] rounded-lg p-4 max-w-2xl">
                <p className="text-[#6A6A6A]">Mrs. Robbins is thinking...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-[#8A8A8A] p-4">
          <div className="max-w-4xl mx-auto flex gap-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share your thoughts..."
              className="flex-1 p-3 border border-[#8A8A8A] rounded-lg resize-none focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488] text-[#2B2B2B]"
              rows={3}
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading}
              className="px-6 bg-[#0D9488] text-white font-medium rounded-lg hover:bg-[#0B7C73] disabled:bg-[#8A8A8A] disabled:cursor-not-allowed transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Voice Mixer Sidebar */}
      <div className="w-80 bg-white border-l border-[#8A8A8A] p-6 overflow-y-auto">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-[#2B2B2B] mb-2">Voice Settings</h2>
          <p className="text-sm text-[#6A6A6A]">Configure how Mrs. Robbins helps shape your writing</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[#2B2B2B]">{slots.length}/5 Variables</span>
            {slots.length < 5 && (
              <button
                onClick={addSlot}
                className="text-sm text-[#0D9488] hover:text-[#0B7C73] font-medium"
              >
                + Add
              </button>
            )}
          </div>

          {slots.map((slot, index) => (
            <div key={slot.id} className="p-4 bg-[#F5F5F3] rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-[#2B2B2B]">Variable {index + 1}</span>
                {slots.length > 1 && (
                  <button
                    onClick={() => removeSlot(slot.id)}
                    className="text-sm text-[#DC2626] hover:text-[#B91C1C]"
                  >
                    Remove
                  </button>
                )}
              </div>

              <select
                value={slot.variable}
                onChange={(e) => updateSlot(slot.id, 'variable', e.target.value)}
                className="w-full p-2 border border-[#8A8A8A] rounded-md mb-3 text-[#2B2B2B] font-medium bg-white focus:ring-2 focus:ring-[#0D9488] focus:border-[#0D9488]"
              >
                <option value="formality">Formality</option>
                <option value="complexity">Complexity</option>
                <option value="emotionality">Emotionality</option>
                <option value="directness">Directness</option>
                <option value="energy">Energy</option>
              </select>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#4A4A4A]">Value</span>
                  <span className="text-xs font-medium text-[#2B2B2B]">{slot.value}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={slot.value}
                  onChange={(e) => updateSlot(slot.id, 'value', parseInt(e.target.value))}
                  className="w-full h-2 bg-[#8A8A8A] rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}