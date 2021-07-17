import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Loot {
  @Field({ description: 'Loot description' })
  description: string;
}
