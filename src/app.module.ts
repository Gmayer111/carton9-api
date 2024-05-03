import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users.module';
import { User } from './users/models/user.model';
import { ComicsModule } from './comics/comics.module';
import { CollectionsModule } from './collections/collections.module';
import { ComicsCategoriesModule } from './comics-categories/comics-categories.module';
import { ComicsAuthorsModule } from './comics-authors/comics-authors.module';
import { AuthorsModule } from './authors/authors.module';
import { PublishersModule } from './publishers/publishers.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User],
    }),
    UserModule,
    ComicsModule,
    CollectionsModule,
    CategoriesModule,
    AuthorsModule,
    PublishersModule,
    ComicsAuthorsModule,
    ComicsCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
