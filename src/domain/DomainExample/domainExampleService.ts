import {domainExampleApi} from './domainExampleApi';

import {DomainExample, domainExampleAdapter} from '.';

async function getDomainExampleValue(id: string): Promise<DomainExample> {
  const domainExampleAPI = await domainExampleApi.getDomainExampleValue(id);
  return domainExampleAdapter.toDomainExample(domainExampleAPI);
}

export const domainExampleService = {
  getDomainExampleValue,
};
