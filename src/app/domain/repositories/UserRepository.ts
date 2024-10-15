import { User } from '../entities/User';

export interface UserRepository {
  getUserById(id: number): Promise<User | null>; 
  getAllUsers(): Promise<User[]>;                
}
