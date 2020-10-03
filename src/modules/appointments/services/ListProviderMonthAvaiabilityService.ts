import { injectable, inject } from 'tsyringe';

import IAppointmentsRepository from '../repositories/IAppontmentsRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
}

type IResponse = Array<{
  day: number;
  avaiable: boolean;
}>;

@injectable()
class ListProviderMonthAvaiabilityService {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
  ) {}

  public async execute({
    provider_id,
    year,
    month,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentsRepository.findAllInMonthFromProvider(
      {
        provider_id,
        year,
        month,
      },
    );

    console.log(appointments);

    return [{ day: 7, avaiable: false }];
  }
}

export default ListProviderMonthAvaiabilityService;
