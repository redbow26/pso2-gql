import { Prop } from '@nestjs/mongoose';
import { Item } from '../../items/schemas/item.schema';
import { Stat } from '../../stats/schemas/stat.schema';

export class Wearable {
  @Prop({ type: Item, required: true })
  item: Item;

  @Prop({ type: Stat, required: true })
  stat: Stat;

  @Prop({ required: false })
  condition?: string;
}
