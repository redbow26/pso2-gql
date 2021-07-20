import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Resistance {
  @Field(() => Int, { description: 'damage resistance', defaultValue: 0 })
  damage?: number;

  @Field(() => Int, { description: 'burn resistance', defaultValue: 0 })
  burn?: number;

  @Field(() => Int, { description: 'freeze resistance', defaultValue: 0 })
  freeze?: number;

  @Field(() => Int, { description: 'shock resistance', defaultValue: 0 })
  shock?: number;

  @Field(() => Int, { description: 'blind resistance', defaultValue: 0 })
  blind?: number;

  @Field(() => Int, { description: 'panic resistance', defaultValue: 0 })
  panic?: number;

  @Field(() => Int, { description: 'poison resistance', defaultValue: 0 })
  poison?: number;

  @Field(() => Int, { description: 'pain resistance', defaultValue: 0 })
  pain?: number;
}
