import { Prop } from '@nestjs/mongoose';

export class Potency {
  @Prop()
  ranged: number;

  @Prop()
  technique: number;

  @Prop()
  melee: number;
}
