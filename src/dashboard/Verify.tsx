const Verify = () => {
  return (
    <div className="flex flex-col px-8 py-4 mt-5">
      <div className="w-full h-40">
        <img src="/Id.jpg" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full flex flex-col gap-1 mt-5">
        <h1 className="text-lg font-bold font-mons uppercase">
          upload proof of your identity
        </h1>
        <p className="text-xs font-mons font-semibold">
          Please submit an image of the front and back of your valid id card
        </p>
      </div>
    </div>
  );
};

export default Verify;
