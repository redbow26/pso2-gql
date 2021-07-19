import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Potency {
  @Field(() => Int, { description: 'ranged potency' })
  ranged: number;

  @Field(() => Int, { description: 'technique potency' })
  technique: number;

  @Field(() => Int, { description: 'melee potency' })
  melee: number;
}
