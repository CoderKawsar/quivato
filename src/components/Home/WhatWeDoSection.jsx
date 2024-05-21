import WhatWeDoSingle from "./WhatWeDoSingle";

function WhatWeDoSection() {
  const whatWeDos = [
    {
      serial: 1,
      title: "UIUX Design",
      description:
        "We can make your website or application design better with this service",
      isCenter: false,
    },
    {
      serial: 2,
      title: "Website Dev",
      description:
        "Make your business more leverage by having an optimal website and we are ready to help.",
      isCenter: true,
    },
    {
      serial: 3,
      title: "Hosting and production",
      description:
        "We can also help you in the affairs of hosting and publishing.",
      isCenter: false,
    },
  ];
  return (
    <div className="mt-28 mx-[112px]">
      <h2 className="text-[40px] text-[#FF3300] font-bold mb-10 text-center">
        What we do
      </h2>
      <div className="bg-[#FFECEC] flex justify-between rounded-[90px] px-44 py-28">
        {whatWeDos.map((whatWeDo) => (
          <WhatWeDoSingle
            key={whatWeDo.serial}
            title={whatWeDo.title}
            description={whatWeDo.description}
            isCenter={whatWeDo.isCenter}
          />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDoSection;
