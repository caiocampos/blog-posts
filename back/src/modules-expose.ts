import { DynamicModule, ForwardReference, Type } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthorsModule } from './modules/authors/authors.module';
import { PostsModule } from './modules/posts/posts.module';
import { connectionName } from './mongoose-connection';

export const moduleList: (
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference<any>
)[] = [
  MongooseModule.forRoot(process.env.MONGO_URI_BLOG ?? process.env.MONGO_URI, {
    connectionName,
  }),
  AuthorsModule,
  PostsModule,
];
