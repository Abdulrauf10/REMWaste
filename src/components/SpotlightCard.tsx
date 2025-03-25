import React from "react"
import { FaCircleCheck } from "react-icons/fa6"
import { FaPoundSign } from "react-icons/fa"
import { IoWarningOutline } from "react-icons/io5"

interface SpotlightCardProps {
  isSelected?: boolean
  isDisable: boolean
  image?: string
  data: any
  onClick?: () => void
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  isSelected,
  isDisable,
  data,
  image,
  onClick
}) => {
  return (
    <div
      onClick={!isDisable ? onClick : undefined}
      className={`block h-[300px] overflow-hidden p-2 backdrop-blur-md border shadow-lg ${
        isSelected
          ? "border-white/95 bg-white/30"
          : "border-white/20 bg-white/10"
      } rounded-xl ${
        isDisable
          ? "cursor-not-allowed pointer-events-auto opacity-50"
          : "cursor-pointer hover:bg-white/20 transition"
      }`}
    >
      <div className="block relative w-full h-[200px] rounded-xl overflow-hidden bg-transparent">
        <img
          src={image}
          className="absolute inset-0 w-full h-full object-cover p-0 rounded-md"
          alt="remwaste"
        />

        <div className="absolute inset-0 z-10 w-full bg-gradient-to-t from-black/95 via-transparent to-transparent" />

        <div
          className={`absolute bottom-2 flex gap-[1px] items-center left-4 z-20 p-2 rounded-lg text-[24px] font-bold text-white ${
            isSelected ? "bg-[#0037C1]" : "bg-transparent"
          } `}
        >
          <FaPoundSign className="text-white text-[22px]" />
          <h2>
            {data.price_before_vat}{" "}
            <span className="font-thin text-[12px]">per week</span>
          </h2>
        </div>

        <div className="absolute top-3 left-3 z-30">
          {!data?.allowed_on_road && (
            <div className="flex gap-[6px] items-center bg-black p-[5px] w-fit mb-2 rounded-md">
              <IoWarningOutline className="text-[#d8a72c] text-[15px]" />

              <p className="text-[#d8a72c] text-[12px]">
                Private Property Only
              </p>
            </div>
          )}

          {isDisable && (
            <div className="flex gap-[2px] bg-black p-[5px] w-fit rounded-md">
              <IoWarningOutline className="text-red-700 text-[15px] " />

              <p className="text-red-700 text-[12px] text-right">
                Not Suitable for Heavy Waste
              </p>
            </div>
          )}
        </div>

        <FaCircleCheck
          className={`absolute top-3 right-3 z-30  bg-white rounded-full ${
            isSelected ? "text-[#0037C1]" : "text-[#212121]"
          } text-[30px]`}
        />
      </div>

      <div className=" mt-[10px] mb-3">
        <p className="text-white font-bold text-[24px] ">
          {data?.size + " Yard Skip"}
        </p>

        <p className="text-white font-light text-[14px] ">
          {data?.hire_period_days + " day hire period"}
        </p>
      </div>
    </div>
  )
}

export default SpotlightCard
