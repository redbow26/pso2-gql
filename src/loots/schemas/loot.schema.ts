import { Prop } from '@nestjs/mongoose';

export class Loot {
  @Prop()
  description: string;
}
