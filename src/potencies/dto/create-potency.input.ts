import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePotencyInput {
  @Field(() => Int, { description: 'ranged potency' })
  ranged: number;

  @Field(() => Int, { description: 'technique potency' })
  technique: number;

  @Field(() => Int, { description: 'melee potency' })
  melee: number;
}
