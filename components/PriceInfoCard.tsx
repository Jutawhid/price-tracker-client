import Image from "next/image";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className={`flex-1 min-w-[130px] flex flex-col gap-2 border-l-4 border-l-secondary border border-secondary rounded-[17px] bg-sky-50 px-5 py-4`}>
      <p className="text-base text-black-100">{title}</p>

      <div className="flex gap-1">
        <Image src={iconSrc} alt={title} width={24} height={24} />

        <p className="text-lg font-bold text-destructive">{value}</p>
      </div>
    </div>
  )
}

export default PriceInfoCard