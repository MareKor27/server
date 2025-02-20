import { CreateAppointmentDto } from './createAppointment.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAppointmentDto extends PartialType(CreateAppointmentDto) {}
