import { useQuery } from "@tanstack/react-query";
export const useQueryHook = (key, fetchFnc, options = {}) => {
  const query = useQuery(key, fetchFnc, options);
  if (query) {
    return query;
  } else {
    console.log("useQuery 호출 실패");
  }
};
