import { Prop } from '@nestjs/mongoose';
import { Loot } from '../../loots/schemas/loot.schema';

export class Item {
  @Prop()
  name: string;

  @Prop()
  rarity: number;

  @Prop({ type: [Loot] })
  lootTable: Loot[];
}
