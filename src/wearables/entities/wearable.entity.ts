import { ObjectType, Field } from '@nestjs/graphql';
import { Stat } from '../../stats/entities/stat.entity';
import { Item } from '../../items/entities/item.entity';

@ObjectType()
export class Wearable {
  @Field(() => Item, { description: 'item' })
  item: Item;

  @Field(() => Stat, { description: 'stat', defaultValue: {} })
  stat?: Stat;

  @Field({ description: 'wear condition', nullable: true })
  condition?: string;
}
