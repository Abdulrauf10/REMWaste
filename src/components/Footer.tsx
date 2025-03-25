import React from "react"
import { FaArrowRight } from "react-icons/fa6"
import { FaPoundSign } from "react-icons/fa"

interface FooterProps {
  data: any
}
const Footer: React.FC<FooterProps> = ({ data }) => {
  return (
    <div className="w-full fixed bottom-0 p-5 bg-white/30 backdrop-blur-md flex justify-between z-[999]">
      <div className="bg-white p-3 text-black flex justify-evenly gap-3 font-medium rounded-md">
        <p>{data?.size} Yards</p>
        <p className="flex items-center">
          <FaPoundSign />
          {data?.price_before_vat}
        </p>
        <p>7 day hire</p>
      </div>
      <div className="flex gap-4 items-center">
        <button className="p-3 text-black rounded-md hover:bg-[#212121] hover:text-white bg-white font-semibold">
          Back
        </button>
        <button className="p-3 text-white flex items-center gap-[5px] font-semibold rounded-md hover:bg-[#1b3880] bg-[#0037C1]">
          Contionue{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
      </div>
    </div>
  )
}

export default Footer
