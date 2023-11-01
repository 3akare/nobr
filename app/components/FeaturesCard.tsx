import Image from "next/image";
import logo from "../../public/menu.svg";

function FeaturesCard({
  cardImg,
  cardHeading,
  cardText,
}: {
  cardImg: string;
  cardHeading: string;
  cardText: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-fit flex-col justify-between rounded-md p-6">
        <Image
          src={logo}
          alt={cardHeading}
          className="w-12 h-12"
          width={48}
          height={48}
        />
        <div className="space-y-2">
          <h3 className="font-bold">{cardHeading}</h3>
          <p className="text-sm text-muted-foreground">{cardText}</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesCard;
