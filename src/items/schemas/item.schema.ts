import { Prop } from '@nestjs/mongoose';
import { Loot } from '../../loots/schemas/loot.schema';

export class Item {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rarity: number;

  @Prop({ type: [Loot], default: [] })
  lootTable: Loot[];
}
