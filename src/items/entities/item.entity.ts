import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Loot } from '../../loots/entities/loot.entity';

@ObjectType()
export class Item {
  @Field({ description: 'name of this item' })
  name: string;

  @Field(() => Int, { description: 'Rarity of this item' })
  rarity: number;

  @Field(() => [Loot], { description: 'Loot table for this object' })
  lootTable: Loot[];
}
