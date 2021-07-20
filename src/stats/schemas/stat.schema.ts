import { Prop } from '@nestjs/mongoose';
import { Resistance } from '../../resistances/schemas/resistance.schema';
import { Potency } from '../../potencies/schemas/potency.schema';

export class Stat {
  @Prop()
  hp: number;

  @Prop()
  pp: number;

  @Prop({ type: Potency })
  potency: Potency;

  @Prop({ type: Resistance })
  resistance: Resistance;
}
