import imgClock from "../../assets/images/img_clock.svg";

function WhatWeDoSingle({ title, description, isCenter }) {
  return (
    <div
      className={`${
        isCenter
          ? "bg-[#fcf9f9] rounded-2xl shadow-2xl hover:bg-white"
          : "hover:shadow-xl bg-[#fff4f4]"
      } md:w-52 p-6 mb-4 mx-auto cursor-pointer shadow`}
    >
      <img
        src={imgClock}
        className="p-3 mx-auto md:ml-0 rounded-lg bg-[#f56767] animate__animated  animate__shakeY"
        alt=""
      />
      <h3 className="mt-9 text-center md:text-left mb-[13px] text-[#FF3300] text-[25px] font-bold">
        {title}
      </h3>
      <p className="text-center md:text-left leading-loose">{description}</p>
    </div>
  );
}

export default WhatWeDoSingle;
