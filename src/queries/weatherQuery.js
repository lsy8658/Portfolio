import { useQuery, useMutation } from "@tanstack/react-query";
import { weatherForecastApi } from "../api/weatherApi";

export const ForecastQuery = () => {
  return useQuery({
    queryKey: ["forecast"],
    queryFn: weatherForecastApi,
  });
};

// const mutaion = useMutation({});
//   const {
//     isLoading,
//     data,
//     isError,
//     error,
//     isFetching,
//   } = useQuery([key], fetchFnc, options);
