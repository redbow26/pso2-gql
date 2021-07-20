import { Prop } from '@nestjs/mongoose';
import { Resistance } from '../../resistances/schemas/resistance.schema';
import { Potency } from '../../potencies/schemas/potency.schema';

export class Stat {
  @Prop({ default: 0 })
  hp: number;

  @Prop({ default: 0 })
  pp: number;

  @Prop({ type: Potency, default: {} })
  potency: Potency;

  @Prop({ type: Resistance, default: {} })
  resistance: Resistance;
}
