import { Prop } from '@nestjs/mongoose';

export class Resistance {
  @Prop()
  damage: number;

  @Prop()
  burn: number;

  @Prop()
  freeze: number;

  @Prop()
  shock: number;

  @Prop()
  blind: number;

  @Prop()
  panic: number;

  @Prop()
  poison: number;

  @Prop()
  pain: number;
}
