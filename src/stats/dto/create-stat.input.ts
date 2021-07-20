import { InputType, Field, Int } from '@nestjs/graphql';
import { CreatePotencyInput } from '../../potencies/dto/create-potency.input';
import { CreateResistanceInput } from '../../resistances/dto/create-resistance.input';

@InputType()
export class CreateStatInput {
  @Field(() => Int, { description: 'hp stats', nullable: true })
  hp?: number;

  @Field(() => Int, { description: 'pp stats', nullable: true })
  pp?: number;

  @Field(() => CreatePotencyInput, {
    description: 'potency',
    nullable: true,
  })
  potency?: CreatePotencyInput;

  @Field(() => CreateResistanceInput, {
    description: 'resistance',
    nullable: true,
  })
  resistance?: CreateResistanceInput;
}
