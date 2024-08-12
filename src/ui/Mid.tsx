import { FaPersonDotsFromLine } from "react-icons/fa6";
import { GoTrophy } from "react-icons/go";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";

const Mid = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-100 justify-around px-4 py-2  rounded-lg md:h-44 items-center md:w-60">
        <div className="text-5xl">
          <GoTrophy />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold">High Quality</h1>
          <p>Crafted from top materials</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 justify-around px-4 py-2  rounded-lg md:h-44 items-center md:w-60">
        <div className="text-5xl">
          <IoShieldCheckmarkOutline />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold">Warrenty Protection</h1>
          <p>Over 2 years</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 justify-around px-4 py-2  rounded-lg md:h-44 items-center md:w-60">
        <div className="text-5xl">
          <LiaShippingFastSolid />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold">Free Shipping</h1>
          <p>Order over NPR. 18000</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 justify-around px-4 py-2  rounded-lg md:h-44 items-center md:w-60">
        <div className="text-5xl">
          <FaPersonDotsFromLine />
        </div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-xl font-semibold">24/7 Support</h1>
          <p>Dedicated Support</p>
        </div>
      </div>
    </>
  );
};

export default Mid;
