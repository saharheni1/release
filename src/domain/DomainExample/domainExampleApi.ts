import {api} from '@api';

import {DomainApi} from '.';

export const DOMAIN_EXAMPLE_PATH = 'domainExample';

async function getDomainExampleValue(id: string): Promise<DomainApi> {
  const response = await api.get<DomainApi>(`${DOMAIN_EXAMPLE_PATH}/${id}`);
  return response.data;
}

export const domainExampleApi = {
  getDomainExampleValue,
};
