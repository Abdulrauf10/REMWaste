// src/hooks/useFetchApi.ts
import { useQuery } from "@tanstack/react-query"

export function useFetchApi() {
  return useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      if (!res.ok) throw new Error("Network response was not ok")
      return res.json()
    }
  })
}
