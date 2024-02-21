import { DomainApi, DomainExample } from "."


function toDomainExample(domainExampleAPI : DomainApi) : DomainExample {
  return {
    id: domainExampleAPI.uuid,
    fieldExample: domainExampleAPI.field_example
  }
}

export const domainExampleAdapter = {
  toDomainExample
}