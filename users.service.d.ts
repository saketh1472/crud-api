import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    create(createUserDto: CreateUserDto): Promise<any>;
    showById(id: number): Promise<User>;
    findById(id: number): Promise<any>;
    findByEmail(email: string): Promise<any>;
}
