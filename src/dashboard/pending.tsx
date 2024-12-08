import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Plans = () => {
  return (
    <div className="lg:px-8 px-4 lg:py-8 flex items-start justify-between lg:mt-16 flex-col lg:flex-row mt-3 gap-4">
      <div className="flex-shrink-0 flex-grow-0 w-[100%]  lg:basis-[50%]">
        <p className="font-mono font-semibold  capitalize text-green-500 lg:text-base text-xs">
          welcome to digital wealth, Apoloski!
        </p>
        <h1 className="mt-4 font-mons capitalize font-bold lg:text-2xl text-lg">
          select your plan
        </h1>

        <div className="mt-5 w-full">
          <Accordion type="single" collapsible className="min-w-72">
            <AccordionItem value="plan-1">
              <AccordionTrigger>Basic Plan - Who is it for?</AccordionTrigger>
              <AccordionContent>
                Our **Basic Plan** is designed for individuals who are just
                starting their journey. It's perfect for those who need
                essential features at an affordable price. With this plan,
                you'll get access to core functionalities that will help you get
                started without feeling overwhelmed. Ideal for beginners or
                those looking for a simple and cost-effective solution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="plan-2">
              <AccordionTrigger>
                Standard Plan - What does it include?
              </AccordionTrigger>
              <AccordionContent>
                The **Standard Plan** is our most popular choice, offering a
                balance of affordability and advanced features. It includes
                everything in the Basic Plan plus additional tools to enhance
                your experience, such as advanced analytics and priority
                support. This plan is suited for growing users who need more
                flexibility and control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="plan-3">
              <AccordionTrigger>
                Premium Plan - Why choose this?
              </AccordionTrigger>
              <AccordionContent>
                The **Premium Plan** is tailored for power users who need access
                to all features and premium support. It includes advanced
                customization options, dedicated account management, and
                priority response times. This plan is ideal for professionals
                and businesses seeking a comprehensive, high-performance
                solution to meet their complex needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="plan-4">
              <AccordionTrigger>
                Do you offer a free trial or demo?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a **free trial** for all our plans, allowing you
                to experience the features before committing. Additionally, a
                demo is available for businesses that want a guided overview of
                our platform's capabilities. This way, you can explore different
                plans and choose the one that aligns with your requirements
                without any risk.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className="flex-shrink-0 flex-grow-0 basis-[100%] lg:basis-[50%] flex justify-center flex-col items-center gap-2">
        <div className="w-[100%] lg:w-[70%]  border-2 border-green-500 min-h-32 rounded-md flex justify-between py-4 px-4 shadow-md">
          <div className="flex-shrink-0 flex-grow-0 basis-[70%] flex gap-2 items-start ">
            <input type="radio" className="mt-1" />
            <div>
              <h2 className="capitalize font-mono font-bold lg:text-base text-sm">
                basic plan
              </h2>
              <p className="font-mono font-semibold text-gray-600 text-xs mt-1">
                Essential features for beginners to get started easily.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 basis-[30%] flex justify-end">
            <h2 className="font-mon0 font-bold">$100/yr</h2>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[70%] border-2 border-green-500 min-h-32 rounded-md flex justify-between py-4 px-4 shadow-md">
          <div className="flex-shrink-0 flex-grow-0 basis-[70%] flex gap-2 items-start ">
            <input type="radio" className="mt-1" />
            <div>
              <h2 className="capitalize font-mono font-bold lg:text-base text-sm">
                standard plan
              </h2>
              <p className="font-mono font-semibold text-gray-600 text-xs mt-1">
                Advanced tools for growing users who need more flexibility.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 basis-[30%] flex justify-end">
            <h2 className="font-mon0 font-bold">$200/yr</h2>
          </div>
        </div>
        <div className="w-[100%] lg:w-[70%] border-2 border-green-500 min-h-32 rounded-md flex justify-between py-4 px-4 shadow-md">
          <div className="flex-shrink-0 flex-grow-0 basis-[70%] flex gap-2 items-start ">
            <input type="radio" className="mt-1" />
            <div>
              <h2 className="capitalize font-mono font-bold lg:text-base text-sm">
                premium plan
              </h2>
              <p className="font-mono font-semibold text-gray-600 text-xs mt-1">
                All-inclusive features with top-tier support for professionals.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 flex-grow-0 basis-[30%] flex justify-end">
            <h2 className="font-mon0 font-bold">$300/yr</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
