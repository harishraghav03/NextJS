import Image from "next/image";
// import cricket from "@/public/images/vibe.jpg";

export default function Home() {
  return (
    <main className="relative h-screen">
      <Image
        src="https://i.pinimg.com/736x/b4/af/26/b4af2623575779ca254479fda215ddd2.jpg"
        alt="cricket"
        fill
        // style={{ objectFit: "cover" }} or use contain
        className="object-cover"
        // sizes="100vw" // In all devices, it gonna take 100% of the view port
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
      {/* Under the hood, it compresses the image */}
    </main>
  );
}
