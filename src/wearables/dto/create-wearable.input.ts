import { InputType, Field } from '@nestjs/graphql';
import { CreateItemInput } from '../../items/dto/create-item.input';
import { CreateStatInput } from '../../stats/dto/create-stat.input';

@InputType()
export class CreateWearableInput {
  @Field(() => CreateItemInput, { description: 'item' })
  item: CreateItemInput;

  @Field(() => CreateStatInput, { description: 'stat' })
  stat: CreateStatInput;

  @Field({ description: 'wear condition' })
  condition: string;
}
