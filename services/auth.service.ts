import { Injectable } from '@nestjs/common';
import { SupabaseService } from './supabase.service'; // Your Supabase service for interacting with the database

@Injectable()
export class AuthService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async signUp(userData: any) {
    // Perform signup logic and interact with Supabase service to save user data
    return this.supabaseService.insertUserData(userData);
  }
}
