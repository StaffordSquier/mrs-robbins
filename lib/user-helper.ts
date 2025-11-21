import { createServiceClient } from './supabase';
import { v4 as uuidv4 } from 'uuid';

const DEMO_USER_EMAIL = 'stafford@staffordsquier.com';

/**
 * Gets or creates the demo user for the application.
 * This function checks if a user with the demo email exists, and if not, creates one.
 *
 * @returns The user ID of the demo user
 * @throws Error if database operations fail
 */
export async function getOrCreateDemoUser(): Promise<string> {
  const supabase = createServiceClient();

  // First, try to find existing user by email
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: existingUser, error: findError } = await (supabase as any)
    .from('users')
    .select('id')
    .eq('email', DEMO_USER_EMAIL)
    .single();

  if (findError && findError.code !== 'PGRST116') {
    // PGRST116 is "not found" error, which is expected if user doesn't exist
    throw new Error(`Failed to check for existing user: ${findError.message}`);
  }

  // If user exists, return their ID
  if (existingUser) {
    return (existingUser as { id: string }).id;
  }

  // User doesn't exist, create one
  const userId = uuidv4();

  const userData = {
    id: userId,
    email: DEMO_USER_EMAIL,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data: newUser, error: createError } = await (supabase as any)
    .from('users')
    .insert(userData)
    .select()
    .single();

  if (createError) {
    throw new Error(`Failed to create user: ${createError.message}`);
  }

  return (newUser as { id: string }).id;
}
