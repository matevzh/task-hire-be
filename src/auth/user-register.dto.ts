import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, IsUrl} from "class-validator";

export class UserRegisterDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsString()
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
    @IsString()
    @IsNotEmpty()
    firstName: string;
    @IsString()
    @IsNotEmpty()
    lastName: string;
    @IsOptional()
    @IsUrl()
    avatar?: string;
}