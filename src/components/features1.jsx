import Image from "next/image";

export function Feature1() {
  return (
    <div
      className="h-[120vh] w-[100vw]"
      style={{
        backgroundImage: "url(/f1.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/f1-1.png" width={150} height={150} alt="fun" />
      <h1>Innovative Activities</h1>
      <p>
        Explore new interests and skills with our club's diverse activities.
      </p>
    </div>
  );
}
