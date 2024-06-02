import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { CatsService } from "./cats.service";
import { Cat } from "./schemas/cat.schema";


@Controller('cats')
export class CatsController{
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        try{
            return this.catsService.create(createCatDto)
        }catch(e){
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    
    @Get()
    async findAll(): Promise<Cat[]>{
        try{
            return this.catsService.findAll();
        }catch(e){
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Cat>{
        try{
            return this.catsService.findById(id)
        }catch(e){
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // @Get(':id')
    // findOne(@Param('id') id: string): string{
    //     console.log(params.id)
    //     return `This action returns a #${id} cat`
    // }

    @Post(':id')
    @HttpCode(200)
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto){
        try{
            return this.catsService.update(id, updateCatDto);
        }catch(e){
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        try{
            return this.catsService.delete(id);
        }catch(e){
            throw new HttpException({}, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

}