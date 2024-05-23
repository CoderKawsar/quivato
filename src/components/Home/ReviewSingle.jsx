function ReviewSingle({ singleReview }) {
  const { review, reviewer_name, reviewer_designation, reviewer_image } =
    singleReview;
  return (
    <div className="p-8 bg-white rounded-lg shadow-xl mb-4 animate__animated animate__rotateInDownLeft">
      <p className="text-lg">{review}</p>
      <div className="flex items-center mt-5">
        <img className="h-10 w-10 rounded-xl" src={reviewer_image} alt="" />
        <div className="ml-5">
          <h5 className="font-semibold text-xl">{reviewer_name}</h5>
          <p className="text-[15px]">{reviewer_designation}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewSingle;
