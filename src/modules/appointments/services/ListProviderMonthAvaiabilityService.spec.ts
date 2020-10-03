import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvaiabilityService from './ListProviderMonthAvaiabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvaiabilityService: ListProviderMonthAvaiabilityService;

describe('ListProvidersMonthAvaiabilty', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvaiabilityService = new ListProviderMonthAvaiabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month avaiability from providers', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 8, 2, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 2, 9, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 2, 10, 0, 0),
    });

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 9, 3, 9, 0, 0),
    });

    const avaiability = await listProviderMonthAvaiabilityService.execute({
      provider_id: 'user',
      year: 2020,
      month: 10,
    });

    expect(avaiability).toEqual(
      expect.arrayContaining([
        { day: 1, avaiable: true },
        { day: 2, avaiable: false },
        { day: 3, avaiable: false },
        { day: 4, avaiable: true },
      ]),
    );
  });
});
