import { Module } from '@nestjs/common';
import { AuthorsModule } from './modules/authors/authors.module';
import { PostsModule } from './modules/posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    AuthorsModule,
    PostsModule,
  ],
})
export class AppModule {}
