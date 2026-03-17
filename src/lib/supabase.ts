import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key'

if (!supabaseUrl || supabaseUrl === 'https://placeholder.supabase.co') {
  console.warn('⚠️  Supabase URL not configured. Please set NEXT_PUBLIC_SUPABASE_URL in your .env.local file.')
}

if (!supabaseAnonKey || supabaseAnonKey === 'placeholder-key') {
  console.warn('⚠️  Supabase anon key not configured. Please set NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}
