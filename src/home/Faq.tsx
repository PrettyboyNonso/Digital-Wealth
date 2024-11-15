import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-col w-fit px-12">
        <h1 className="text-xl font-bold capitalize font-mons ">
          frequently <span className="text-orange-700">asked</span> questions
        </h1>
        <div className="w-9 h-1 bg-green-950 self-end rounded-sm"></div>
      </div>
      <div className="w-full px-12 mt-5">
        <Accordion type="single" collapsible className="min-w-72">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What types of accounts do you offer, and which one is right for
              me?
            </AccordionTrigger>
            <AccordionContent>
              We offer several types of accounts, including basic accounts for
              beginners, advanced accounts for experienced traders, and demo
              accounts for practicing strategies without risk. The right account
              for you depends on your experience level and trading goals. If
              you’re just starting out, we recommend a basic account to
              familiarize yourself with our platform. For more experienced
              traders, our advanced account offers a wider range of tools and
              features to enhance your trading experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {" "}
              How secure is my investment on your platform?
            </AccordionTrigger>
            <AccordionContent>
              Security is our top priority. We use advanced encryption
              technologies and secure servers to ensure your personal
              information and investments are protected. Additionally, we have
              multi-layered security measures, including two-factor
              authentication and constant monitoring to guard against any
              unauthorized access or fraud. You can trade with confidence,
              knowing that your assets are safeguarded.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What fees and commissions will I incur while trading?
            </AccordionTrigger>
            <AccordionContent>
              Our fee structure is designed to be transparent and competitive.
              We charge a small commission on each trade, with no hidden fees.
              You can view all applicable fees in the account section of our
              platform. Additionally, there may be fees for specific services,
              such as withdrawals or account maintenance. We strive to keep our
              costs low and provide clear, upfront information about any
              charges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer any educational resources for traders?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we provide a comprehensive range of educational resources to
              help traders at all levels. Our offerings include webinars,
              trading guides, tutorials, and market analysis to improve your
              knowledge and skills. Our goal is to empower our clients with the
              information they need to make informed trading decisions. Whether
              you are a beginner or an experienced trader, our resources are
              tailored to enhance your trading journey.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
