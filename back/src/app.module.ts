import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { moduleList } from './modules-expose';

@Module({
  imports: [ConfigModule.forRoot(), ...moduleList],
})
export class AppModule {}
