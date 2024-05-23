import ChoosePlanSingle from "./ChoosePlanSingle";

function ChoosePlanSection() {
  const plans = [
    {
      serial: 1,
      name: "Starter",
      price: "10",
      features: [
        "1 Website",
        "10 GB Disk Space",
        "Free Email Address",
        "Basic Web Builder",
        "No SSL Certificate",
        "Limited Support",
      ],
    },
    {
      serial: 2,
      name: "Advanced",
      price: "20",
      features: [
        "1 Website",
        "10 GB Disk Space",
        "Free Email Address",
        "Basic Web Builder",
        "No SSL Certificate",
        "Limited Support",
      ],
    },
    {
      serial: 3,
      name: "Premium",
      price: "40",
      features: [
        "1 Website",
        "10 GB Disk Space",
        "Free Email Address",
        "Basic Web Builder",
        "No SSL Certificate",
        "Limited Support",
      ],
    },
  ];
  return (
    <div className="mt-16 md:mt-28 md:mx-10 lg:mx-[85px] xl:mx-[120px]">
      <h2 className="text-2xl md:text-[32px] text-white font-bold mb-10 text-center">
        Choose your plan
      </h2>
      <div className="md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <ChoosePlanSingle key={plan.serial} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default ChoosePlanSection;
