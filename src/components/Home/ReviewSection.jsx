import ReviewSingle from "./ReviewSingle";
import quoteImg from "../../assets/images/img_contrast.svg";
import person1Img from "../../assets/images/img_rectangle_52.png";
import person2Img from "../../assets/images/img_rectangle_52_1.png";
import person3Img from "../../assets/images/img_rectangle_52_49x49.png";

function ReviewSection() {
  const reviews = [
    {
      _id: 1,
      review:
        "I am very satisfied with the work on the Nexus team. Good service, satisfying work results, and can also increase my business turnover. Thank you so much to the Quivato team.",
      reviewer_name: "John Richard",
      reviewer_designation: "Businessman",
      reviewer_image: person1Img,
    },
    {
      _id: 2,
      review:
        "Since branding with the Oracle team, I feel my business has a very fast and good development. Everything also always goes through a process of discussion that is really valid.",
      reviewer_name: "Andrew Smith",
      reviewer_designation: "Founder Ulala",
      reviewer_image: person2Img,
    },
    {
      _id: 3,
      review:
        "I can say, this team is indeed extraordinarily perfect. I will do a lot of teamwork with this team next time. I do not hesitate to cooperate because the results are very satisfying.",
      reviewer_name: "Steve John",
      reviewer_designation: "CEO rumahku",
      reviewer_image: person3Img,
    },
  ];
  return (
    <div className="mt-28 py-28 relative bg-gradient-to-r from-white via-[#F5FCCE] to-[#FCFEF2]">
      <div className="bg-[#e05d5d] rounded-full border-8 border-white absolute top-[-25px] ms-[-35px] left-1/2">
        <div className="flex justify-center items-center w-14 h-14 rounded-full">
          <img
            src={quoteImg}
            className="animate__animated animate__shakeX"
            alt="Quote"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16">
        {reviews.map((review) => (
          <ReviewSingle key={review._id} singleReview={review} />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
