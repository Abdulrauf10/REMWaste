// src/hooks/useFetchApi.ts
import { useQuery } from "@tanstack/react-query"

export function useFetchApi() {
  const baseApi = import.meta.env.VITE_API_URL
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(baseApi)
      if (!res.ok) throw new Error("Network response was not ok")
      return res.json()
    }
  })
}
