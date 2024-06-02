import { IsNumber, IsString } from "class-validator";

export class UpdateCatDto{
    @IsString()
    name: string;

    @IsNumber()
    age: number;

    @IsString()
    breed: string;
}