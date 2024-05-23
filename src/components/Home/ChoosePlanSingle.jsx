import { Link } from "react-router-dom";

function ChoosePlanSingle({ plan }) {
  const { name, price, features } = plan;
  return (
    <div className="bg-[#1F283B] py-8 px-12 rounded-lg mb-4">
      <h4 className="text-[22px] text-white text-center">{name}</h4>
      <p className="text-[44px] font-medium mt-4 mb-6 text-white text-center">
        {price}$ <span className="text-base">/ month</span>
      </p>
      <div className="flex flex-col items-center md:items-start gap-2.5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <p className="h-1 w-1 bg-[#FF3300] rounded-full"></p>
            <p className="text-[#ddd] ml-2">{feature}</p>
          </div>
        ))}
      </div>
      <Link
        to="price"
        className="mt-10 block text-white border border-[#e33058] text-center py-3.5 hover:bg-[#e33058] rounded animate__animated animate__heartBeat"
      >
        More detail
      </Link>
    </div>
  );
}

export default ChoosePlanSingle;
