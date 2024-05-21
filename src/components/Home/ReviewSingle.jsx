import personDummyImg from "../../assets/images/img_rectangle_52.png";

function ReviewSingle() {
  return (
    <div className="p-8 bg-white rounded-lg shadow-xl">
      <p className="text-lg">
        I am very satisfied with the work on the Nexus team. Good service,
        satisfying work results, and can also increase my business turnover.
        Thank you so much to the Quivato team.
      </p>
      <div className="flex items-center mt-5">
        <img className="h-10 w-10 rounded-xl" src={personDummyImg} alt="" />
        <div className="ml-6">
          <h5 className="font-semibold">John Richard</h5>
          <p>Businessman</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewSingle;
