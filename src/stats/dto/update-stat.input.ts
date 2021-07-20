import { CreateStatInput } from './create-stat.input';
import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UpdatePotencyInput } from '../../potencies/dto/update-potency.input';
import { UpdateResistanceInput } from '../../resistances/dto/update-resistance.input';

@InputType()
export class UpdateStatInput extends PartialType(
  OmitType(CreateStatInput, ['potency', 'resistance'] as const),
) {
  @Field(() => UpdatePotencyInput, { description: 'potency', nullable: true })
  potency?: UpdatePotencyInput;

  @Field(() => UpdateResistanceInput, {
    description: 'resistance',
    nullable: true,
  })
  resistance?: UpdateResistanceInput;
}
