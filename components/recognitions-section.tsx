import { recognitions } from "@/lib/portfolio-content";

export function RecognitionsSection() {
  return (
    <section
      className="relative z-30 overflow-hidden px-6 py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/window-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2
          className="mb-12 text-center text-5xl font-bold"
          style={{ fontFamily: "'Thiket'", color: "#00FFFF" }}
        >
          Recognitions
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {recognitions.map((recognition) => (
            <div
              key={recognition.title}
              className="overflow-hidden rounded-lg bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)]"
              style={{ border: "1px solid rgba(182,182,182,0.5)" }}
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={recognition.image}
                  alt={recognition.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#E5E7EB]">
                  {recognition.title}
                </h3>
                <p className="text-[#9CA3AF]">{recognition.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
