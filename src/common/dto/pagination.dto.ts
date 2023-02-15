import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    

    @IsNumber()
    @IsPositive()
    @Min(1)
    @IsOptional()
    limit?: number;

    @IsNumber()
    @IsPositive()
    @IsOptional()
    offset?: number;
}