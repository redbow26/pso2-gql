import { CreateLootInput } from './create-loot.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLootInput extends PartialType(CreateLootInput) {}
