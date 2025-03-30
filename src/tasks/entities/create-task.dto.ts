import { IsString, IsNumber } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsNumber()
    kategorija: number;
}
