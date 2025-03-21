import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ReservationModule } from './reservations/reservation.module';
import { AppointmentModule } from './appointments/appointment.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ReservationModule,
    AppointmentModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'zaq1@WSX',
      database: 'michal2',
      synchronize: true,
      autoLoadModels: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
