import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
      playground: true,
      debug: true,
    }),
    HelloModule,
  ],
})
export class AppModule {}
