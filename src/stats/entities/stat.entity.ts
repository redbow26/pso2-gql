import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Potency } from '../../potencies/entities/potency.entity';
import { Resistance } from '../../resistances/entities/resistance.entity';

@ObjectType()
export class Stat {
  @Field(() => Int, { description: 'hp stats', defaultValue: 0 })
  hp?: number;

  @Field(() => Int, { description: 'pp stats', defaultValue: 0 })
  pp?: number;

  @Field(() => Potency, { description: 'potency', defaultValue: {} })
  potency?: Potency;

  @Field(() => Resistance, { description: 'resistance', defaultValue: {} })
  resistance?: Resistance;
}
