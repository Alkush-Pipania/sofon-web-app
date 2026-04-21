import Image from "next/image";
import SofonText from "@/components/SofonText";

export default function SofonLogoMark({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <div className="relative flex justify-center items-center w-[clamp(300px,44vw,630px)]">
      <Image
        src="/sofon.png"
        alt="Sofon"
        width={633}
        height={646}
        className="w-full h-auto object-contain select-none"
        priority
        draggable={false}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <SofonText showSubtitle={showSubtitle} />
      </div>
    </div>
  );
}
