import { Module } from '@nestjs/common';
import { ArmorsService } from './armors.service';
import { ArmorsResolver } from './armors.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Armor, ArmorSchema } from './schemas/armor.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Armor.name, schema: ArmorSchema }]),
  ],
  providers: [ArmorsResolver, ArmorsService],
})
export class ArmorsModule {}
