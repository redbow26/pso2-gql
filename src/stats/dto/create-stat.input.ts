import { InputType, Field, Int } from '@nestjs/graphql';
import { CreatePotencyInput } from '../../potencies/dto/create-potency.input';
import { CreateResistanceInput } from '../../resistances/dto/create-resistance.input';

@InputType()
export class CreateStatInput {
  @Field(() => Int, { description: 'hp stats' })
  hp: number;

  @Field(() => Int, { description: 'pp stats' })
  pp: number;

  @Field(() => CreatePotencyInput, { description: 'potency' })
  potency: CreatePotencyInput;

  @Field(() => CreateResistanceInput, { description: 'resistance' })
  resistance: CreateResistanceInput;
}
