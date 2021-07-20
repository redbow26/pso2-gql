import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Potency {
  @Field(() => Int, { description: 'ranged potency', defaultValue: 0 })
  ranged?: number;

  @Field(() => Int, { description: 'technique potency', defaultValue: 0 })
  technique?: number;

  @Field(() => Int, { description: 'melee potency', defaultValue: 0 })
  melee?: number;
}
