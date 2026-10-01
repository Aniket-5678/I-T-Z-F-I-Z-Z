
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ==============================
      // PAGE LOAD ANIMATION
      // ==============================

      const intro = gsap.timeline();

      intro
        .from(".hero-label", {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ".stat-item",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".visual-element",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // ==============================
      // ORBIT ROTATION
      // ==============================

      gsap.to(".orbit-ring", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".orbit-ring-reverse", {
        rotation: -360,
        duration: 24,
        repeat: -1,
        ease: "none",
      });

      // ==============================
      // SCROLL DRIVEN ANIMATION
      // ==============================

      const mm = gsap.matchMedia();

      // Desktop
      mm.add("(min-width: 768px)", () => {
        gsap.to("#hero-visual", {
          x: 320,
          y: 120,
          rotation: 180,
          scale: 1.35,
          ease: "none",

          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "+=1000",
            scrub: 1,
          },
        });
      });

      // Mobile
      mm.add("(max-width: 767px)", () => {
        gsap.to("#hero-visual", {
          x: 80,
          y: 100,
          rotation: 120,
          scale: 1.15,
          ease: "none",

          scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "+=800",
            scrub: 1,
          },
        });
      });
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* ==============================
          BACKGROUND GLOW
      ============================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute left-[15%] top-[20%] h-32 w-32 rounded-full bg-lime-300/5 blur-3xl" />

      <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-40 w-40 rounded-full bg-white/5 blur-3xl" />

      {/* ==============================
          MAIN CONTAINER
      ============================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-32 md:px-10 lg:px-16">

        {/* ==============================
            SMALL LABEL
        ============================== */}

        <p className="hero-label mb-6 text-center text-xs font-medium uppercase tracking-[0.5em] text-lime-300">
          Digital Experiences
        </p>

        {/* ==============================
            MAIN HEADING
        ============================== */}

        <h1 className="hero-title text-center text-4xl font-bold uppercase leading-[1.05] tracking-[0.12em] sm:text-5xl md:text-7xl lg:text-8xl">
          W E L C O M E
          <br />

          <span className="text-white/90">
            I T Z F I Z Z
          </span>
        </h1>

        {/* ==============================
            DESCRIPTION
        ============================== */}

        <p className="hero-description mx-auto mt-8 max-w-2xl text-center text-base leading-7 text-white/50 md:text-lg">
          We build modern digital experiences that combine thoughtful design,
          powerful technology and smooth performance.
        </p>

        {/* ==============================
            MAIN VISUAL
        ============================== */}

        <div className="relative mx-auto mt-12 flex h-[260px] w-full max-w-4xl items-center justify-center md:mt-16 md:h-[340px]">

          {/* Animated Visual Wrapper */}

          <div
            id="hero-visual"
            className="visual-element relative h-52 w-52 will-change-transform md:h-64 md:w-64"
          >

            {/* ==========================
                OUTER GLOW
            ========================== */}

            <div className="absolute inset-[-45px] rounded-full bg-lime-300/10 blur-3xl" />

            {/* ==========================
                OUTER RING
            ========================== */}

            <div className="orbit-ring absolute inset-[-15px] rounded-full border border-lime-300/20" />

            {/* ==========================
                DASHED RING
            ========================== */}

            <div className="orbit-ring-reverse absolute inset-[-30px] rounded-full border border-dashed border-white/10" />

            {/* ==========================
                SMALL ORBIT RING
            ========================== */}

            <div className="absolute inset-[10px] rounded-full border border-white/10" />

            {/* ==========================
                MAIN ORB
            ========================== */}

            <div className="absolute inset-6 overflow-hidden rounded-full border border-white/20 bg-gradient-to-br from-lime-300/20 via-white/5 to-transparent shadow-[0_0_100px_rgba(163,230,53,0.18)] backdrop-blur-xl">

              {/* Orb Glow */}

              <div className="absolute -left-12 -top-12 h-36 w-36 rounded-full bg-lime-300/30 blur-3xl" />

              {/* Orb Shadow */}

              <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full bg-white/5 blur-3xl" />

              {/* Inner Sphere */}

              <div className="absolute inset-10 rounded-full border border-white/10 bg-white/[0.03]" />

              {/* Inner Highlight */}

              <div className="absolute left-[25%] top-[20%] h-10 w-10 rounded-full bg-white/10 blur-xl" />

              {/* Center Dot */}

              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_30px_rgba(163,230,53,1)]" />

            </div>

            {/* ==========================
                ORBIT DOT 1
            ========================== */}

            <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-lime-300 shadow-[0_0_25px_rgba(163,230,53,1)]" />

            {/* ==========================
                ORBIT DOT 2
            ========================== */}

            <div className="absolute right-2 top-[18%] h-2 w-2 rounded-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

            {/* ==========================
                ORBIT DOT 3
            ========================== */}

            <div className="absolute bottom-[8%] left-[28%] h-2 w-2 rounded-full bg-lime-200/80 shadow-[0_0_15px_rgba(163,230,53,0.7)]" />

          </div>
        </div>

        {/* ==============================
            STATISTICS
        ============================== */}

        <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">

          {/* STAT 1 */}

          <div className="stat-item text-center">
            <h2 className="text-4xl font-semibold md:text-5xl">
              90
              <span className="text-lime-300">%</span>
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Fast & Responsive
            </p>
          </div>

          {/* STAT 2 */}

          <div className="stat-item text-center">
            <h2 className="text-4xl font-semibold md:text-5xl">
              85
              <span className="text-lime-300">%</span>
            </h2>

            <p className="mt-2 text-sm text-white/40">
              User Engagement
            </p>
          </div>

          {/* STAT 3 */}

          <div className="stat-item text-center">
            <h2 className="text-4xl font-semibold md:text-5xl">
              95
              <span className="text-lime-300">%</span>
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Client Satisfaction
            </p>
          </div>

        </div>

        {/* ==============================
            SCROLL INDICATOR
        ============================== */}

        <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30 sm:flex">

          <span>Scroll</span>

          <div className="h-10 w-px bg-white/20" />

        </div>

      </div>
    </section>
  );
};

export default Hero;

