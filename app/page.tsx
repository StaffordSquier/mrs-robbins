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
    <div style={{ display: 'flex', height: 'calc(100vh - 73px)', backgroundColor: '#F5F5F3', padding: '16px', gap: '16px' }}>
      {/* Main Conversation Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ backgroundColor: 'white', borderBottom: '1px solid #8A8A8A', padding: '16px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: '600', color: '#2B2B2B', margin: 0 }}>Mrs. Robbins</h1>
          <p style={{ fontSize: '14px', color: '#6A6A6A', margin: '4px 0 0 0' }}>Your cognitive acceleration partner</p>
        </div>

        {/* Messages */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', backgroundColor: '#F5F5F3' }}>
          {messages.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <p style={{ color: '#6A6A6A', fontSize: '18px', marginBottom: '8px' }}>Welcome to Mrs. Robbins</p>
              <p style={{ color: '#8A8A8A' }}>Start a conversation to begin organizing your thoughts.</p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                marginBottom: '16px'
              }}
            >
              <div
                style={{
                  maxWidth: '800px',
                  borderRadius: '8px',
                  padding: '16px',
                  backgroundColor: message.role === 'user' ? '#2C7A7B' : 'white',
                  color: message.role === 'user' ? 'white' : '#2B2B2B',
                  border: message.role === 'user' ? 'none' : '1px solid #8A8A8A'
                }}
              >
                <p style={{ whiteSpace: 'pre-wrap', margin: 0 }}>{message.content}</p>
                <p style={{
                  fontSize: '12px',
                  marginTop: '8px',
                  color: message.role === 'user' ? 'rgba(255,255,255,0.7)' : '#8A8A8A',
                  margin: '8px 0 0 0'
                }}>
                  {message.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}

          {isLoading && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #8A8A8A',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '800px'
              }}>
                <p style={{ color: '#6A6A6A', margin: 0 }}>Mrs. Robbins is thinking...</p>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div style={{ backgroundColor: 'white', borderTop: '1px solid #8A8A8A', padding: '16px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '12px' }}>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Share your thoughts..."
              style={{
                flex: 1,
                padding: '12px',
                border: '1px solid #8A8A8A',
                borderRadius: '8px',
                resize: 'none',
                color: '#2B2B2B',
                fontFamily: 'inherit',
                fontSize: '14px'
              }}
              rows={3}
            />
            <button
              onClick={sendMessage}
              disabled={!inputText.trim() || isLoading}
              style={{
                padding: '0 24px',
                backgroundColor: (!inputText.trim() || isLoading) ? '#8A8A8A' : '#2C7A7B',
                color: 'white',
                fontWeight: '500',
                border: 'none',
                borderRadius: '8px',
                cursor: (!inputText.trim() || isLoading) ? 'not-allowed' : 'pointer',
                fontSize: '16px'
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Voice Mixer Sidebar */}
      <div style={{
        width: '320px',
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', color: '#2B2B2B', marginBottom: '8px' }}>Voice Settings</h2>
          <p style={{ fontSize: '14px', color: '#6A6A6A', margin: 0 }}>Configure how Mrs. Robbins helps shape your writing</p>
        </div>

        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontSize: '14px', fontWeight: '500', color: '#2B2B2B' }}>{slots.length}/5 Variables</span>
            {slots.length < 5 && (
              <button
                onClick={addSlot}
                style={{
                  fontSize: '14px',
                  color: '#2C7A7B',
                  fontWeight: '500',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                + Add
              </button>
            )}
          </div>

          {slots.map((slot, index) => (
            <div key={slot.id} style={{ padding: '16px', backgroundColor: '#F5F5F3', borderRadius: '8px', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#2B2B2B' }}>Variable {index + 1}</span>
                {slots.length > 1 && (
                  <button
                    onClick={() => removeSlot(slot.id)}
                    style={{
                      fontSize: '14px',
                      color: '#DC2626',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>

              <select
                value={slot.variable}
                onChange={(e) => updateSlot(slot.id, 'variable', e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px',
                  border: '1px solid #8A8A8A',
                  borderRadius: '6px',
                  marginBottom: '12px',
                  color: '#2B2B2B',
                  fontWeight: '500',
                  backgroundColor: 'white',
                  fontSize: '14px'
                }}
              >
                <option value="formality">Formality</option>
                <option value="complexity">Complexity</option>
                <option value="emotionality">Emotionality</option>
                <option value="directness">Directness</option>
                <option value="energy">Energy</option>
              </select>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '12px', color: '#4A4A4A' }}>Value</span>
                  <span style={{ fontSize: '12px', fontWeight: '500', color: '#2B2B2B' }}>{slot.value}/10</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={slot.value}
                  onChange={(e) => updateSlot(slot.id, 'value', parseInt(e.target.value))}
                  style={{
                    width: '100%',
                    height: '8px',
                    cursor: 'pointer',
                    accentColor: '#2C7A7B'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}