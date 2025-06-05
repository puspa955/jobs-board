import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tealwjmvbbdmfzbqkjot.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlYWx3am12YmJkbWZ6YnFram90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwNDU2MTcsImV4cCI6MjA2NDYyMTYxN30.L2rYHQeqdkaFoEDpHBZLAQTfJ1CrTWYYkwoWP03QSPY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);