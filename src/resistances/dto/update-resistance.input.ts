import { CreateResistanceInput } from './create-resistance.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResistanceInput extends PartialType(CreateResistanceInput) {}
