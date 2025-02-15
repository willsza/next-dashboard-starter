import { useQuery } from "@tanstack/react-query";

import { getClients } from "@/src/actions/client";

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });
}
