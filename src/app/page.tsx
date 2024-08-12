import Background from "@/components/Background";
import PixelArtMaker from "@/components/PixelArtMaker";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Background />
      <div className="flex flex-col items-center gap-2 justify-center">
        <h1 className="font-bold text-4xl text-primary">Pixel Art Designer</h1>
        <p className="flex text-muted-foreground text-sm">
          You can change the grid size, color size and make something amazing.
        </p>
      </div>
      <Card className="flex w-[40rem] h-[40rem] items-center justify-center">
        <PixelArtMaker />
      </Card>
    </main>
  );
}
