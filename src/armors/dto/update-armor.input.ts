import { CreateArmorInput } from './create-armor.input';
import { InputType, Field, PartialType, OmitType } from '@nestjs/graphql';
import { UpdateWearableInput } from '../../wearables/dto/update-wearable.input';

@InputType()
export class UpdateArmorInput extends PartialType(
  OmitType(CreateArmorInput, ['wearable'] as const),
) {
  @Field()
  id: string;

  @Field(() => UpdateWearableInput, { description: 'wearable' })
  wearable: UpdateWearableInput;
}
