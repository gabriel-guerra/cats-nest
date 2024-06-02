//import { Cat } from "./interfaces/cat.interface";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Cat } from "./schemas/cat.schema";
import { Model } from "mongoose";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Injectable()
export class CatsService{
    constructor(@InjectModel(Cat.name) private catModel: Model<Cat>){}
    //private readonly cats: Cat[] = [];

    async create(createCatDto: CreateCatDto): Promise<Cat>{
        const createdCat = new this.catModel(createCatDto)
        throw new Error();
        return await createdCat.save();
    }

    async findAll(): Promise<Cat[]>{
        return await this.catModel.find().exec();
    }

    async findById(id: string): Promise<Cat>{
        try{
            return await this.catModel.findById(id).exec();
        }catch(e){
            return null;
        }
    }

    async update(id: string, updateCatDto: UpdateCatDto): Promise<Cat>{
        try{
            return await this.catModel.findByIdAndUpdate(id, updateCatDto, {new: true});
        }catch(e){
            return null;
        }
    }

    async delete(id: string){
        try{
            return await this.catModel.findByIdAndDelete(id);
        }catch(e){
            return null;
        }
    }

}