import {
  DefaultOptions,
  QueryClient,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    useErrorBoundary: false,
    retry: false,
    staleTime: 5 * (60 * 1000),
    cacheTime: 10 * (60 * 1000),
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type ExtractFnReturnType<FnType extends (...args: any) => any> = Awaited<
  ReturnType<FnType>
>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

// Mutations are used to modify data on the server

// export type MutationConfig<MutationFnType extends (...args: any) => any> =
//   UseMutationOptions<
//     ExtractFnReturnType<MutationFnType>,
//     AxiosError,
//     Parameters<MutationFnType>[0]
//   >;
