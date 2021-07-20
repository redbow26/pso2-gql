import { Prop } from '@nestjs/mongoose';

export class Loot {
  @Prop({ required: true })
  description: string;
}
