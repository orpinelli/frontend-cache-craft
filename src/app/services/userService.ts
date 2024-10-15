import { User } from '../domain/entities/User';
import { UserRepository } from '../domain/repositories/UserRepository';


export class UserService {
  private repository: UserRepository;

  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  async getUserById(id: number): Promise<User | null> {
    return this.repository.getUserById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.repository.getAllUsers();
  }
}
