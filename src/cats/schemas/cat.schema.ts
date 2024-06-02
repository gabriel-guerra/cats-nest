import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cat{

    @Prop()
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;
}

export const CatShema = SchemaFactory.createForClass(Cat);