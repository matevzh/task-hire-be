import {
    IsOptional,
    IsString,
    IsNumber,
} from 'class-validator';

export class UpdateTaskDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber({maxDecimalPlaces: 2})
    cena?: number;

    @IsOptional()
    @IsNumber()
    kategorijaId?: number;
}