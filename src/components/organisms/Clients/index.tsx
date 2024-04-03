import Image from "next/image";
import react, { FC } from "react";

interface ClientProps {}

const cliets: string[] = [
  "/images/jobox.png",
  "/images/dsign.png",
  "/images/wave.png",
  "/images/twins.png",
  "/images/bubles.png",
];

const Client: FC<ClientProps> = ({}) => {
  return (
    <div className="mt-4">
      <div className="text-lg text-muted-foreground">
        Companies we helped grow
      </div>
      <div className="flex mt-8 flex-row justify-between">
        {cliets.map((item, i: number) => (
          <Image src={item} key={i} alt={item} width={139} height={35} />
        ))}
      </div>
    </div>
  );
};

export default Client;
