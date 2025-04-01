import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserRegisterDto } from '../auth/user-register.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(user: UserRegisterDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: number): Promise<User>;
}
