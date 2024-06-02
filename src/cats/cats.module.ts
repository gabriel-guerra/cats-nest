import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { Cat, CatShema } from "./schemas/cat.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Cat.name, schema: CatShema}])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})

export class CatsModule{}