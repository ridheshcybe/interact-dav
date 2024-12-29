import Image from "next/image";

export function Feature2() {
  return (
    <div
      className="h-[120vh] w-[100vw]"
      style={{
        backgroundImage: "url(/f2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image src="/f2-1.png" width={250} height={250} alt="fun" />
      <h1>Community Engagement</h1>
      <p>Connect, Collaborate, Contribute</p>
    </div>
  );
}
