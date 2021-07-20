import { Prop } from '@nestjs/mongoose';

export class Potency {
  @Prop({ default: 0 })
  ranged: number;

  @Prop({ default: 0 })
  technique: number;

  @Prop({ default: 0 })
  melee: number;
}
