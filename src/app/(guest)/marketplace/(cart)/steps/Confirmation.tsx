import Image from "next/image";

const Confirmation = () => {
  return (
    <div className="text-center">
      <Image
        width={350}
        height={350}
        src="/images/confirmation-svg-1.png"
        alt="illustration"
        className="absolute top-0 left-0 z-0 mix-blend-color-dodge"
      />
      <div className="w-[420px] h-[420px] relative mx-auto">
        <Image
          fill
          src="/images/confirmation-svg-2.png"
          alt="illustration"
          className="absolute inset-0 z-0"
        />
      </div>
      <p className="font-bold text-lg my-5">
        Hey Celestina, thank you for your purchase.{" "}
      </p>
      <p className="text-sm flex items-center justify-center gap-x-3">
        <span>You are amazing. Cheers to being ARTSY!</span>
        <Image
          alt="party popper"
          src="/images/confirmation-svg-3.png"
          width={50}
          height={30}
        />
      </p>
    </div>
  );
};

export default Confirmation;
