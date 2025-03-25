import { useState } from "react"
import SpotlightCard from "./components/SpotlightCard"
import { useFetchApi } from "./hook/api/useFetchApi"
import Footer from "./components/Footer"

function App() {
  const [isSelected, setIsSelected] = useState<number>()
  const [dataSelected, setDataSelected] = useState<any>()

  const { data: dataLocation, isLoading } = useFetchApi()

  return (
    <div className="bg-[#212121] min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-white text-center text-[37px] font-bold">
        Choose Your Skip Size
      </h1>
      <p className="text-white/50 text-[24px] mb-10">
        Select the skip size that best suits your needs
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-5xl mb-[160px]">
        {dataLocation?.map((data: any, idx: number) => (
          <SpotlightCard
            key={data?.id ?? idx}
            isSelected={isSelected === data?.id}
            onClick={() => {
              setIsSelected(data?.id)
              setDataSelected(data)
            }}
            image="/container.jpg"
            isDisable={!data?.allows_heavy_waste}
            data={data}
          />
        ))}
      </div>

      {isSelected && <Footer data={dataSelected} />}
    </div>
  )
}

export default App
