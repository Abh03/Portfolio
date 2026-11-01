import { recognitions } from "@/lib/portfolio-content";

export function RecognitionsSection() {
  return (
    <section
      className="relative z-30 overflow-hidden px-6 py-20"
      style={{
        backgroundImage:
          "radial-gradient(circle at 75% 8%, rgba(232, 185, 120, 0.13), transparent 46%), linear-gradient(rgba(8, 15, 27, 0.86), rgba(8, 15, 27, 0.86)), url('/window-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(132, 223, 212, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(132, 223, 212, 0.055) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2
          className="mb-12 text-center text-5xl font-bold"
          style={{ fontFamily: "'Thiket'", color: "#E8B978" }}
        >
          Recognitions
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title}
              className="overflow-hidden rounded-lg border border-[rgba(153,192,202,0.24)] bg-[#111D2B] transition-all duration-300 hover:scale-[1.02] hover:border-[#E8B978] hover:shadow-[0_18px_50px_rgba(232,185,120,0.12)]"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#EDF4F5]">
                  {recognition.title}
                </h3>
                <p className="text-[#ACBAC8]">{recognition.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
