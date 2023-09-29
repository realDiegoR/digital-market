import { useQuery } from '@tanstack/react-query';

/**
 * Abstraction of the implementation of fetching data
 * @param {{cacheId: string, queryFunction: function, triggerValue?: unknown, select?: function, staleTime?: number}} Object
 * @returns {{data: unknown, status: "error" | "success" | "loading", fetchStatus: 'fetching' | 'paused' | 'idle'}}
 */
export function useFetch({
	cacheId,
	queryFunction,
	triggerValue = true,
	select,
	staleTime = 15_000,
}) {
	const { data, status, fetchStatus, error } = useQuery({
		queryKey: cacheId.split('-'),
		queryFn: queryFunction,
		staleTime,
		enabled: !!triggerValue,
		select,
	});
	console.warn(error);
	return {
		data,
		status,
		fetchStatus,
	};
}
