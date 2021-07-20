import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Resistance {
  @Field(() => Int, { description: 'damage resistance' })
  damage: number;

  @Field(() => Int, { description: 'burn resistance' })
  burn: number;

  @Field(() => Int, { description: 'freeze resistance' })
  freeze: number;

  @Field(() => Int, { description: 'shock resistance' })
  shock: number;

  @Field(() => Int, { description: 'blind resistance' })
  blind: number;

  @Field(() => Int, { description: 'panic resistance' })
  panic: number;

  @Field(() => Int, { description: 'poison resistance' })
  poison: number;

  @Field(() => Int, { description: 'pain resistance' })
  pain: number;
}
