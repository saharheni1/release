import { DomainApi, DomainExample } from "./domainExampleTypes";

function toDomainExample(domainExampleAPI : DomainApi) : DomainExample {
  return {
    id: domainExampleAPI.uuid,
    fieldExample: domainExampleAPI.field_example
  }
}

export const domainExampleAdapter = {
  toDomainExample
}