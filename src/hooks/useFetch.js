import { useQuery } from '@tanstack/react-query';

export function useFetch(cacheId, queryFunction) {
	const { data, status } = useQuery({ queryKey: cacheId, queryFn: queryFunction });
	return {
		data,
		status,
	};
}
