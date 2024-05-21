import imgClock from "../../assets/images/img_clock.svg";

function WhatWeDoSingle({ title, description, isCenter }) {
  return (
    <div
      className={`${
        isCenter
          ? "bg-[#fcf9f9] rounded-2xl shadow-2xl hover:bg-white"
          : "hover:shadow-xl bg-[#fff4f4]"
      } w-52 p-6 cursor-pointer shadow`}
    >
      <img
        src={imgClock}
        className="p-3 rounded-lg bg-[#f56767] animate__animated  animate__shakeY"
        alt=""
      />
      <h3 className="mt-9 mb-[13px] text-[#FF3300] text-[25px] font-bold">
        {title}
      </h3>
      <p className="leading-loose">{description}</p>
    </div>
  );
}

export default WhatWeDoSingle;
