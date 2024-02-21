import { DomainExample, domainExampleAdapter } from ".";
import { domainExampleApi } from "./domainExampleApi";


async function getDomainExampleValue(id: string): Promise<DomainExample> {
  const domainExampleAPI = await domainExampleApi.getDomainExampleValue(id);
  return domainExampleAdapter.toDomainExample(domainExampleAPI);
}

export const domainExampleService = {
  getDomainExampleValue
}