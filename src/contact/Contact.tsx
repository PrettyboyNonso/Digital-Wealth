import { Winners } from "@/App";

const ContactPage = ({
  userData,
}: {
  userData: { name: string; money: number };
}) => {
  return (
    <div className="relative min-h-96 border-t flex flex-col lg:flex-row border-solid px-8 md:px-12 py-4 justify-between">
      {userData.name !== "" && userData.money !== 0 && (
        <Winners userData={userData} />
      )}
      <div className="flex-shrink-0 flex-grow-0 basis-[60%] py-8">
        <h1 className="text-lg md:text-2xl uppercase font-mons font-bold">
          <span className="bg-yellow-500 px-3 py-1">contact</span> us
        </h1>
        <p className="text-xs font-mons capitalize font-medium mt-4 md:mt-2">
          email, call or complete the form to learn how digital wealth can
          liberate you!
        </p>
        <p className="text-xs font-mons capitalize font-medium mt-6 text-teal-600 underline">
          info@digitalwealth.com
        </p>
        <div className="w-full flex flex-col md:flex-row  justify-between mt-6 items-stretch lg:items-stretch md:items-stretch">
          <div className="flex-shrink-0 flex-grow-0 md:basis-[28%] basis-[100%]  md:border-t md:border-b md:border-solid py-4">
            <h2 className="font-bold font-mons text-sm capitalize">
              customer support
            </h2>
            <p className="capitalize font-mons text-[11px] font-medium mt-3 ">
              Need assistance? Our dedicated customer support team is here to
              help you with any inquiries, concerns, or issues. We are committed
              to ensuring a seamless trading experience and are available to
              provide expert assistance whenever you need it.
            </p>
          </div>

          <div className="flex-shrink-0 flex-grow-0 md:basis-[28%] basis-[100%]  md:border-t md:border-b md:border-solid py-4">
            <h2 className="font-bold font-mons text-sm capitalize">
              Feedback and Suggestions
            </h2>
            <p className="capitalize font-mons text-[11px] font-medium mt-3 ">
              We value your input! Your feedback and suggestions are crucial to
              us as we continuously strive to improve our services. Feel free to
              share your thoughts on how we can serve you better. Your voice
              drives our growth and innovation.
            </p>
          </div>

          <div className="flex-shrink-0 flex-grow-0 md:basis-[28%] basis-[100%]  md:border-t md:border-b md:border-solid py-4">
            <h2 className="font-bold font-mons text-sm capitalize">
              Media Queries
            </h2>
            <p className="capitalize font-mons text-[11px] font-medium mt-3 ">
              For media inquiries, interviews, or partnership opportunities, our
              communications team is ready to engage. We welcome collaboration
              and are happy to discuss our services, market insights, and future
              projects.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 flex-grow-0 basis-[35%] lg:border-solid lg:border-2 rounded-lg px-4 py-6">
        <h1 className="capitalize text-xl font-bold font-mons">get in touch</h1>
        <p className="text-[11px] font-mons font-medium capitalize mt-1">
          you can reach us anytime
        </p>
        <form action="" className="w-full flex flex-col gap-6 mt-6">
          <input
            type="email"
            placeholder="Enter Email"
            className=" w-full lg:w-full border border-solid h-12 text-xs px-2 font-mons outline-teal-500 rounded-md md:w-[80%]"
          />
          <textarea
            name=""
            id=""
            placeholder="How can we help you?"
            className="resize-none border border-solid min-h-44 text-xs px-2 w-full lg:w-full font-mons outline-teal-500 py-4 rounded-md md:w-[80%]"
          ></textarea>

          <button className="bg-teal-600 py-2 capitalize font-mons text-xs font-bold text-white rounded-sm w-full md:w-[80%] lg:w-[100%]">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
