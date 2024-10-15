
import { UserService } from '../../services/userService';
import { UserApiRepository } from '../../infrastructure/api/userApi';
import { User } from '../../domain/entities/User';

const userService = new UserService(new UserApiRepository());

export default async function UserDetails() {
  const user: User | null = await userService.getUserById(1); 

  if (!user) {
    return <div>Usuário não encontrado</div>;
  }

  return (
    <div className='flex-1 items-center container mx-auto text-center'>
      <h1>Detalhes do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
      {user.website && <p>Website: {user.website}</p>}
    </div>
  );
}
