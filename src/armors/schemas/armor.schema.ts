import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Wearable } from '../../wearables/schemas/wearable.schema';
import { Document } from 'mongoose';

@Schema()
export class Armor extends Document {
  @Prop({ type: Wearable })
  wearable: Wearable;

  @Prop()
  resistanceMin: number;

  @Prop()
  resistanceMax: number;
}

export const ArmorSchema = SchemaFactory.createForClass(Armor);
