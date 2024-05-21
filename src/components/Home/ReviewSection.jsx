import ReviewSingle from "./ReviewSingle";
import quoteImg from "../../assets/images/img_contrast.svg";

function ReviewSection() {
  return (
    <div className="mt-28 py-28 relative bg-gradient-to-r from-white via-[#F5FCCE] to-[#FCFEF2]">
      <div className="bg-[#e05d5d] rounded-full border-8 border-white absolute top-[-25px] left-1/2">
        <div className="flex justify-center items-center w-14 h-14 rounded-full">
          <img src={quoteImg} alt="Quote" />
        </div>
      </div>
      <div className="flex gap-x-16">
        <ReviewSingle />
        <ReviewSingle />
        <ReviewSingle />
      </div>
    </div>
  );
}

export default ReviewSection;
