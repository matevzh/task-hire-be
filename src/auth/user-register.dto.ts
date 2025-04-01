import { IsEmail, IsNotEmpty, IsOptional, IsString, IsStrongPassword, IsUrl} from "class-validator";

export class UserRegisterDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;
<<<<<<< HEAD
    @IsString()
    @IsNotEmpty()
=======
    @IsNotEmpty()
    @IsString()
>>>>>>> 696753dd277e2d350d4d760de274cb691df83110
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