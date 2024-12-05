const License = () => {
  const license = [
    {
      image: "/license/alabama.jpg",
      location: "united states, alabama",
      name: "state banking department",
      type: " consumer credit license",
      refno: "mc 22385",
      domain: "https://www.banking.alabama.gov",
    },
    {
      image: "/license/AlabamaSec.png",
      location: "united states, alabama",
      name: "alabama security commission",
      type: " money transmitter license",
      refno: "# 769",
      domain: "https://www.asc.alabama.gov",
    },
    {
      image: "/license/AZ.jpg",
      location: "united states, arizona",
      name: "department of insurance and financial institution",
      type: " consumer lender license",
      refno: "cl-1017838",
      domain: "https://www.difi.az.gov",
    },
    {
      image: "/license/Arkansas.jpg",
      location: "united states, arkansas",
      name: "arkansas security department",
      type: " money transmitter license",
      refno: "125678",
      domain: "https://www.securities.arkansas.gov",
    },
    {
      image: "/license/DcGov.png",
      location: "united states, district of columbia",
      name: "department of insurance, security and banking",
      type: "money lender license",
      refno: "ml 1898544",
      domain: "https://www.disb.dc.gov",
    },
    {
      image: "/license/staebankcommisioner.jpg",
      location: "united states, delaware",
      name: "office of the state bank commisioner",
      type: " lender license",
      refno: "035538",
      domain: "https://www.banking.delaware.gov",
    },
    {
      image: "/license/Logo_White_XL.png",
      location: "united states",
      name: "u.s financial crimes enforcement network",
      type: " money service business registration",
      refno: "31000201469839",
      domain: "https://www.fincen.gov",
    },
    {
      image: "/license/Dfpi.png",
      location: "united states, california",
      name: "department of financial protection and innovation",
      type: "financing law license",
      refno: "60dbq-119812",
      domain: "https://www.dfpi.ca.gov",
    },
  ];
  const LicenseSlider = ({
    image,
    location,
    name,
    type,
    refno,
    domain,
  }: {
    image: string;
    location: string;
    name: string;
    type: string;
    refno: string;
    domain: string;
  }) => {
    return (
      <div className="flex-shrink-0 flex-grow-0 lg:basis-[28%] basis-[100%] md:basis-[50%] min-h-36 border border-solid rounded-sm shadow-md snap-start px-4 py-4">
        <div className="w-20 h-20">
          <img src={image} alt="" className="w-full h-full object-contain" />
        </div>
        <h2 className="mt-3 font-mons text-xs font-medium text-gray-400 capitalize">
          {location}
        </h2>
        <h1 className="mt-1 font-bold font-mons uppercase text-sm ">{name}</h1>
        <h2 className="mt-2 font-mons text-xs font-medium text-gray-400 capitalize">
          {type}
        </h2>

        <div className="mt-2 flex flex-col gap-1">
          <h2 className="mt-2 font-mons text-xs font-bold text-gray-400 capitalize">
            reference number :
          </h2>
          <h2 className=" font-mons text-sm font-bold text-gray-500 uppercase">
            {refno}
          </h2>
        </div>

        <div className="mt-2 flex flex-col gap-1">
          <h2 className="mt-2 font-mons text-xs font-bold text-gray-400 capitalize">
            company
          </h2>
          <h2 className=" font-mons text-sm font-bold text-gray-500">
            Elite Trade Zone Financial LLC
          </h2>
        </div>

        <div className="mt-2">
          <h2 className=" font-mons text-xs font-medium text-gray-400">
            {domain}
          </h2>
        </div>
      </div>
    );
  };
  return (
    <div className="min-h-64">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-lg font-mons capitalize font-semibold">
          <span className="text-orange-700">our</span> license
        </h2>
        <p className="font-mons text-xs font-medium capitalize text-center">
          over the years, we have been priviledged to partner with these
          organizations
        </p>
      </div>

      <div className="flex gap-3 flex-nowrap overflow-x-auto snap-x snap-mandatory mt-12 hide-scrollbar">
        {license.map((value, index) => (
          <LicenseSlider
            key={index}
            image={value.image}
            location={value.location}
            name={value.name}
            type={value.type}
            domain={value.domain}
            refno={value.refno}
          />
        ))}
      </div>
    </div>
  );
};

export default License;
