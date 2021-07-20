import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateWearableInput } from '../../wearables/dto/create-wearable.input';

@InputType()
export class CreateArmorInput {
  @Field(() => CreateWearableInput, { description: 'wearable' })
  wearable: CreateWearableInput;

  @Field(() => Int, { description: 'resistance minimal' })
  resistanceMin: number;

  @Field(() => Int, { description: 'resistance maximal' })
  resistanceMax: number;
}
