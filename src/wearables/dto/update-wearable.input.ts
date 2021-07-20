import { CreateWearableInput } from './create-wearable.input';
import { Field, InputType, OmitType, PartialType } from '@nestjs/graphql';
import { UpdateItemInput } from '../../items/dto/update-item.input';
import { UpdateStatInput } from '../../stats/dto/update-stat.input';

@InputType()
export class UpdateWearableInput extends PartialType(
  OmitType(CreateWearableInput, ['item', 'stat'] as const),
) {
  @Field(() => UpdateItemInput, { description: 'item', nullable: true })
  item?: UpdateItemInput;

  @Field(() => UpdateStatInput, { description: 'stat', nullable: true })
  stat?: UpdateStatInput;
}
