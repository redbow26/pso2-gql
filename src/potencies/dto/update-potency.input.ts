import { CreatePotencyInput } from './create-potency.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePotencyInput extends PartialType(CreatePotencyInput) {}
