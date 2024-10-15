import { User } from '../../domain/entities/User';
import { UserRepository } from '../..//domain/repositories/UserRepository';

export class UserApiRepository implements UserRepository {
  async getUserById(id: number): Promise<User | null> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
      return null;  
    }
    return response.json();
  }

  async getAllUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  }
}
