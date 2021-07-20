import { Prop } from '@nestjs/mongoose';
import { Item } from '../../items/schemas/item.schema';
import { Stat } from '../../stats/schemas/stat.schema';

export class Wearable {
  @Prop({ type: Item })
  item: Item;

  @Prop({ type: Stat })
  stat: Stat;

  @Prop()
  condition: string;
}
