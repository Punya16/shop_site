// src/supabase.service.ts

import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient('https://ruxxrjnmmyvpoyuipqdb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1eHhyam5tbXl2cG95dWlwcWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQwMjIwNDIsImV4cCI6MjAxOTU5ODA0Mn0.ifn2LWdUMhWXLah5_jVfC5iIY1AJa1yN85B4a-zyJk0');
  }

  getSupabase() {
    return this.supabase;
  }
}
