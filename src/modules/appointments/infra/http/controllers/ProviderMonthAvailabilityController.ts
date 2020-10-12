import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProvidersMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

export default class ProvidersMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { provider_id } = request.params;
    const { month, year } = request.query;

    const listProvidersMonthAvailability = container.resolve(
      ListProvidersMonthAvailabilityService,
    );

    const availability = await listProvidersMonthAvailability.execute({
      provider_id,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}
