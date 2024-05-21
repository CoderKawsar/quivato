import imgClock from "../../assets/images/img_clock.svg";

function WhatWeDoSingle({ title, description, isCenter }) {
  return (
    <div
      className={`${
        isCenter
          ? "bg-white rounded-2xl shadow-lg"
          : "hover:shadow-xl bg-[#fff4f4]"
      } w-52 p-6 cursor-pointer`}
    >
      <img src={imgClock} className="p-3 rounded-lg bg-[#f56767]" alt="" />
      <h3 className="mt-9 mb-[13px] text-[#FF3300] text-[25px] font-bold">
        {title}
      </h3>
      <p className="leading-loose">{description}</p>
    </div>
  );
}

export default WhatWeDoSingle;
