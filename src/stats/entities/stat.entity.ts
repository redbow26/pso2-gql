import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Potency } from '../../potencies/entities/potency.entity';
import { Resistance } from '../../resistances/entities/resistance.entity';

@ObjectType()
export class Stat {
  @Field(() => Int, { description: 'hp stats' })
  hp: number;

  @Field(() => Int, { description: 'pp stats' })
  pp: number;

  @Field(() => Potency, { description: 'potency' })
  potency: Potency;

  @Field(() => Resistance, { description: 'resistance' })
  resistance: Resistance;
}
