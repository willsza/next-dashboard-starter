import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import { getClients } from "@/src/actions/client";
import { useToast } from "@/src/hooks/use-toast";

export function useClients() {
  const { toast } = useToast();

  const query = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    retry: false,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (query.error) {
      toast({
        variant: "destructive",
        title: "Erro ao carregar clientes",
        description:
          query.error instanceof Error
            ? query.error.message
            : "Erro desconhecido",
      });
    }
  }, [query.error, toast]);

  return query;
}
