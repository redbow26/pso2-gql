import { InputType, Field, Int } from '@nestjs/graphql';
import { CreateLootInput } from '../../loots/dto/create-loot.input';
@InputType()
export class CreateItemInput {
  @Field({ description: 'Item name' })
  name: string;

  @Field(() => Int, { description: 'Item rarity' })
  rarity: number;

  @Field(() => [CreateLootInput], {
    description: 'Item loot table',
    nullable: true,
  })
  lootTable: CreateLootInput[];
}
