import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from 'src/infra/infraTypes';

import {domainExampleService} from '..';

export function useDomainExampleValue(id: string) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.DomainExample, id],
    queryFn: () => domainExampleService.getDomainExampleValue(id),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}
