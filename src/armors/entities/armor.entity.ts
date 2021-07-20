import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Wearable } from '../../wearables/entities/wearable.entity';

@ObjectType()
export class Armor {
  @Field({ description: 'id', nullable: true })
  _id?: string;

  @Field(() => Wearable, { description: 'wearable' })
  wearable: Wearable;

  @Field(() => Int, { description: 'resistance minimal' })
  resistanceMin: number;

  @Field(() => Int, { description: 'resistance maximal' })
  resistanceMax: number;
}
