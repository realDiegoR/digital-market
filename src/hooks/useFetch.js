import { useQuery } from '@tanstack/react-query';

export function useFetch(cacheId, queryFunction) {
	const { data, status } = useQuery({
		queryKey: cacheId,
		queryFn: queryFunction,
		staleTime: 15_000,
	});
	return {
		data,
		status,
	};
}
