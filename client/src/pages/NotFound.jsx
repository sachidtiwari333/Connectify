import React from "react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050807] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/5 blur-3xl" />

      {/* Stars */}
      <div className="stars">
        <span className="star left-[8%] top-[15%]" />
        <span className="star left-[18%] top-[30%]" />
        <span className="star left-[30%] top-[10%]" />
        <span className="star left-[44%] top-[23%]" />
        <span className="star left-[55%] top-[12%]" />
        <span className="star left-[68%] top-[30%]" />
        <span className="star left-[82%] top-[14%]" />
        <span className="star left-[91%] top-[40%]" />
        <span className="star left-[72%] top-[65%]" />
        <span className="star left-[12%] top-[72%]" />
        <span className="star left-[35%] top-[80%]" />
        <span className="star left-[56%] top-[72%]" />
      </div>

      {/* Shooting stars */}
      <div className="shooting-star left-[25%] top-[18%]" />
      <div className="shooting-star left-[78%] top-[24%] animation-delay-2000" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT */}
          <div className="relative z-20">
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.35em] text-green-400">
              Error 404
            </p>

            <h1 className="select-none text-[clamp(9rem,20vw,17rem)] font-black leading-[0.75] tracking-[-0.08em] text-transparent bg-clip-text bg-gradient-to-b from-gray-100 via-gray-400 to-gray-700 drop-shadow-[0_0_35px_rgba(74,222,128,0.12)]">
              404
            </h1>

            <h2 className="mt-10 text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl">
              Oops! Page not found
            </h2>

            <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
              The page you're looking for seems to have drifted off into
              space. Let's get you back somewhere familiar.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/"
                className="group inline-flex items-center gap-3 rounded-xl bg-green-500 px-6 py-3.5 font-semibold text-black shadow-[0_0_30px_rgba(34,197,94,0.2)] transition-all duration-300 hover:bg-green-400 hover:shadow-[0_0_40px_rgba(34,197,94,0.35)]"
              >
                <span className="text-xl transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back to Home
              </a>

              <button
                onClick={() => window.history.back()}
                className="rounded-xl border border-gray-700 bg-gray-900/60 px-6 py-3.5 font-semibold text-gray-300 backdrop-blur transition-all hover:border-green-500/50 hover:text-green-400"
              >
                Go Back
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex min-h-[500px] items-center justify-center">
            
            {/* Planet */}
            <div className="absolute right-5 top-10 h-28 w-28 rounded-full bg-gradient-to-br from-gray-400 via-gray-700 to-black shadow-[0_0_50px_rgba(156,163,175,0.15)] sm:right-20">
              <div className="absolute inset-3 rounded-full border border-gray-500/30" />
              <div className="absolute left-5 top-8 h-2 w-10 rounded-full bg-gray-500/20" />
              <div className="absolute bottom-8 right-4 h-3 w-5 rounded-full bg-gray-500/20" />

              <div className="planet-ring" />
            </div>

            {/* Question mark */}
            <div className="absolute right-[25%] top-[5%] animate-bounce text-7xl font-black text-green-400/80">
              ?
            </div>

            {/* Thought bubble */}
            <div className="absolute left-[8%] top-[7%] hidden rounded-3xl border border-green-500/20 bg-gray-900/80 px-7 py-5 text-center shadow-2xl backdrop-blur-md sm:block">
              <p className="font-semibold text-gray-200">
                Where is
                <br />
                this page?
              </p>

              <span className="absolute -bottom-4 right-6 h-5 w-5 rounded-full border border-green-500/20 bg-gray-900" />
              <span className="absolute -bottom-8 right-2 h-3 w-3 rounded-full border border-green-500/20 bg-gray-900" />
            </div>

            {/* Moon surface */}
            <div className="absolute bottom-[-140px] left-1/2 h-[320px] w-[700px] -translate-x-1/2 rounded-[50%] bg-gradient-to-b from-gray-700 to-gray-950 shadow-[0_-20px_100px_rgba(34,197,94,0.05)]" />

            {/* Moon craters */}
            <div className="absolute bottom-[30px] left-[25%] h-10 w-20 rounded-[50%] border-4 border-gray-800 bg-gray-900/80" />
            <div className="absolute bottom-[100px] right-[22%] h-14 w-28 rounded-[50%] border-4 border-gray-800 bg-gray-900/80" />
            <div className="absolute bottom-[10px] right-[40%] h-7 w-12 rounded-[50%] border-2 border-gray-800 bg-gray-900/80" />

            {/* Astronaut */}
            <div className="astronaut absolute bottom-[105px] left-1/2 z-10 -translate-x-1/2">
              
              {/* Helmet */}
              <div className="relative mx-auto h-36 w-36 rounded-[45%] border-[10px] border-gray-300 bg-gray-100 shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
                {/* Visor */}
                <div className="absolute inset-4 rounded-[42%] bg-gradient-to-br from-green-950 via-gray-900 to-black shadow-inner">
                  <div className="absolute left-5 top-4 h-8 w-4 rotate-45 rounded-full bg-green-300/40 blur-sm" />
                  <div className="absolute bottom-5 right-7 h-3 w-8 rounded-full bg-green-400/10" />
                </div>

                {/* Helmet ears */}
                <div className="absolute -left-6 top-12 h-14 w-7 rounded-full bg-gray-400" />
                <div className="absolute -right-6 top-12 h-14 w-7 rounded-full bg-gray-400" />
              </div>

              {/* Body */}
              <div className="relative mx-auto -mt-1 h-40 w-32 rounded-[35px] border-8 border-gray-300 bg-gray-100 shadow-xl">
                {/* Chest panel */}
                <div className="absolute left-1/2 top-7 w-20 -translate-x-1/2 rounded-xl border-2 border-gray-500 bg-gray-800 p-3">
                  <div className="mb-2 h-2 w-12 rounded-full bg-green-400" />
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="h-3 w-3 rounded-full bg-gray-500" />
                    <span className="h-3 w-3 rounded-full bg-gray-500" />
                  </div>
                </div>

                {/* Left arm */}
                <div className="absolute -left-10 top-7 h-28 w-12 -rotate-[18deg] rounded-full border-8 border-gray-300 bg-gray-100" />

                {/* Right arm */}
                <div className="absolute -right-10 top-10 h-28 w-12 rotate-[25deg] rounded-full border-8 border-gray-300 bg-gray-100" />
              </div>

              {/* Legs */}
              <div className="mx-auto flex justify-center gap-3">
                <div className="h-24 w-14 rotate-[8deg] rounded-b-3xl border-8 border-gray-300 bg-gray-100" />
                <div className="h-24 w-14 -rotate-[8deg] rounded-b-3xl border-8 border-gray-300 bg-gray-100" />
              </div>
            </div>

            {/* Lost sign */}
            <div className="absolute bottom-[115px] right-[4%] rotate-6">
              <div className="rounded-md border-2 border-green-900 bg-green-500 px-5 py-3 font-mono text-sm font-black text-black shadow-lg">
                LOST
                <br />
                IN SPACE
              </div>

              <div className="mx-auto h-16 w-2 bg-green-900" />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <style>{`
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 9999px;
          background: #86efac;
          box-shadow: 0 0 8px rgba(74, 222, 128, 0.8);
          animation: twinkle 3s ease-in-out infinite;
        }

        .star:nth-child(2n) {
          animation-delay: 1s;
        }

        .star:nth-child(3n) {
          width: 2px;
          height: 2px;
          animation-delay: 1.8s;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        .shooting-star {
          position: absolute;
          width: 100px;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(74, 222, 128, 0),
            rgba(74, 222, 128, 0.8),
            white
          );
          transform: rotate(-35deg);
          animation: shooting 5s linear infinite;
          opacity: 0;
        }

        @keyframes shooting {
          0% {
            transform: translate(0, 0) rotate(-35deg);
            opacity: 0;
          }

          10% {
            opacity: 1;
          }

          25% {
            transform: translate(250px, 150px) rotate(-35deg);
            opacity: 0;
          }

          100% {
            opacity: 0;
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .astronaut {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, 0) rotate(-1deg);
          }

          50% {
            transform: translate(-50%, -15px) rotate(1deg);
          }
        }

        .planet-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 160px;
          height: 35px;
          transform: translate(-50%, -50%) rotate(-15deg);
          border: 6px solid rgba(74, 222, 128, 0.25);
          border-radius: 50%;
        }
      `}</style>
    </main>
  );
}