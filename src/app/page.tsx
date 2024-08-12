import PixelArtMaker from "@/components/PixelArtMaker";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col mt-14">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold text-4xl text-primary">
            Pixel Art Designer
          </h1>
          <p className="flex text-muted-foreground text-sm">
            You can change the grid size, color size and make something amazing.
          </p>
        </div>
        <div className="flex mt-8">
          <Card className="flex w-[40rem] h-[41rem] items-center justify-center">
            <PixelArtMaker />
          </Card>
        </div>
      </div>
    </section>
  );
}
