import { useQuery } from "@tanstack/react-query";
export const useWeatherQuery = (key, fn) => {
  return useQuery({ queryKey: key, queryFn: fn });
};
