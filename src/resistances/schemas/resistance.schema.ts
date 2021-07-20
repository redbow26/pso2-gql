import { Prop } from '@nestjs/mongoose';

export class Resistance {
  @Prop({ default: 0 })
  damage: number;

  @Prop({ default: 0 })
  burn: number;

  @Prop({ default: 0 })
  freeze: number;

  @Prop({ default: 0 })
  shock: number;

  @Prop({ default: 0 })
  blind: number;

  @Prop({ default: 0 })
  panic: number;

  @Prop({ default: 0 })
  poison: number;

  @Prop({ default: 0 })
  pain: number;
}
