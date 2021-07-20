import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreatePotencyInput {
  @Field(() => Int, { description: 'ranged potency', nullable: true })
  ranged?: number;

  @Field(() => Int, { description: 'technique potency', nullable: true })
  technique?: number;

  @Field(() => Int, { description: 'melee potency', nullable: true })
  melee?: number;
}
