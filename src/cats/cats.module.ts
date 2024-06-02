import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";
import { Cat, CatShema } from "./schemas/cat.schema";
import { logger } from "./logger.middleware";

@Module({
    imports: [MongooseModule.forFeature([{name: Cat.name, schema: CatShema}])],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})

export class CatsModule{
    configure(consumer: MiddlewareConsumer){
        consumer.apply(logger).forRoutes({path: 'cats*', method: RequestMethod.POST})
    }
}