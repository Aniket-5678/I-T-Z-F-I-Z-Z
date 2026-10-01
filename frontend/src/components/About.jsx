
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const approaches = [
  {
    number: "01",
    title: "Discover",
    shortTitle: "Understand",
    description:
      "Every strong digital experience starts with understanding. We explore the idea, audience, goals and challenges before writing a single line of code.",
    points: [
      "Understand the business",
      "Research users and goals",
      "Define the digital direction",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "02",
    title: "Design",
    shortTitle: "Create",
    description:
      "We transform ideas into clear visual experiences with thoughtful layouts, strong hierarchy and interfaces that feel natural to use.",
    points: [
      "Visual direction",
      "UI / UX systems",
      "Interactive prototypes",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "03",
    title: "Develop",
    shortTitle: "Build",
    description:
      "Design becomes a real product through clean, scalable and responsive development focused on performance and smooth interaction.",
    points: [
      "Frontend development",
      "Backend & API integration",
      "Responsive implementation",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1800&q=85",
  },
  {
    number: "04",
    title: "Launch",
    shortTitle: "Perform",
    description:
      "The final step is more than deployment. We optimize the experience, make it production-ready and prepare it for real users.",
    points: [
      "Performance optimization",
      "Production deployment",
      "Continuous improvements",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
         INTRO
      ===================================================== */

      gsap.fromTo(
        ".approach-label",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".approach-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".approach-heading",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".approach-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".approach-intro-text",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".approach-intro-text",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =====================================================
         RESPONSIVE PINNED EXPERIENCE
      ===================================================== */

      const mm = gsap.matchMedia();

      /*
        =====================================================
        DESKTOP
        =====================================================
      */

      mm.add("(min-width: 1024px)", () => {
        const cards = gsap.utils.toArray(".approach-card");

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".approach-stage",
            start: "top top",
            end: "+=3400",
            scrub: 1.2,
            pin: true,
            anticipatePin: 1,
          },
        });

        /* Initial states */

        gsap.set(cards, {
          opacity: 0,
          x: 100,
          scale: 0.94,
        });

        gsap.set(cards[0], {
          opacity: 1,
          x: 0,
          scale: 1,
        });

        gsap.set(".approach-big-number", {
          textContent: "01",
        });

        gsap.set(".approach-progress", {
          width: "0%",
        });

        /*
          Card transitions
        */

        cards.forEach((card, index) => {
          if (index === 0) return;

          const previousCard = cards[index - 1];

          timeline
            .to(
              previousCard,
              {
                opacity: 0,
                x: -100,
                scale: 0.94,
                duration: 1,
                ease: "power2.inOut",
              },
              "+=0.2"
            )

            .fromTo(
              card,
              {
                opacity: 0,
                x: 100,
                scale: 0.94,
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              },
              "<"
            )

            .to(
              ".approach-big-number",
              {
                textContent: String(index + 1).padStart(2, "0"),
                duration: 0.6,
                snap: {
                  textContent: 1,
                },
                ease: "power2.out",
              },
              "<"
            )

            .to(
              ".approach-progress",
              {
                width: `${(index / (cards.length - 1)) * 100}%`,
                duration: 1,
                ease: "none",
              },
              "<"
            );
        });

        /*
          Background orb
        */

        gsap.to(".approach-orb-one", {
          x: 220,
          y: -120,
          scale: 1.5,
          rotation: 140,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-stage",
            start: "top top",
            end: "+=3400",
            scrub: 2,
          },
        });

        gsap.to(".approach-orb-two", {
          x: -180,
          y: 140,
          scale: 0.7,
          rotation: -120,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-stage",
            start: "top top",
            end: "+=3400",
            scrub: 2,
          },
        });

        /*
          Grid movement
        */

        gsap.to(".approach-grid", {
          rotation: 8,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-stage",
            start: "top top",
            end: "+=3400",
            scrub: 2,
          },
        });

        /*
          Images
        */

        gsap.to(".approach-image", {
          scale: 1.18,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-stage",
            start: "top top",
            end: "+=3400",
            scrub: 2,
          },
        });

        return () => {
          timeline.kill();
        };
      });

      /*
        =====================================================
        MOBILE + TABLET
        =====================================================
      */

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".approach-card-mobile");

        /*
          Same pinned concept as desktop.
        */

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".approach-mobile-stage",
            start: "top top",
            end: "+=3000",
            scrub: 1.1,
            pin: true,
            anticipatePin: 1,
          },
        });

        /*
          Initial state
        */

        gsap.set(cards, {
          opacity: 0,
          y: 60,
          scale: 0.94,
        });

        gsap.set(cards[0], {
          opacity: 1,
          y: 0,
          scale: 1,
        });

        gsap.set(".approach-mobile-number", {
          textContent: "01",
        });

        gsap.set(".approach-mobile-progress", {
          width: "0%",
        });

        /*
          Card transitions
        */

        cards.forEach((card, index) => {
          if (index === 0) return;

          const previousCard = cards[index - 1];

          timeline
            .to(
              previousCard,
              {
                opacity: 0,
                y: -50,
                scale: 0.94,
                duration: 1,
                ease: "power2.inOut",
              },
              "+=0.15"
            )

            .fromTo(
              card,
              {
                opacity: 0,
                y: 60,
                scale: 0.94,
              },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
              },
              "<"
            )

            .to(
              ".approach-mobile-number",
              {
                textContent: String(index + 1).padStart(2, "0"),
                duration: 0.5,
                snap: {
                  textContent: 1,
                },
                ease: "power2.out",
              },
              "<"
            )

            .to(
              ".approach-mobile-progress",
              {
                width: `${(index / (cards.length - 1)) * 100}%`,
                duration: 1,
                ease: "none",
              },
              "<"
            );
        });

        /*
          Mobile background movement
        */

        gsap.to(".approach-orb-one", {
          x: 100,
          y: -100,
          scale: 1.3,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-mobile-stage",
            start: "top top",
            end: "+=3000",
            scrub: 2,
          },
        });

        gsap.to(".approach-orb-two", {
          x: -100,
          y: 120,
          scale: 0.7,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-mobile-stage",
            start: "top top",
            end: "+=3000",
            scrub: 2,
          },
        });

        /*
          Mobile image zoom
        */

        gsap.to(".approach-mobile-image", {
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".approach-mobile-stage",
            start: "top top",
            end: "+=3000",
            scrub: 2,
          },
        });

        return () => {
          timeline.kill();
        };
      });

      /*
        Refresh after images/layout
      */

      const refreshTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 700);

      return () => {
        clearTimeout(refreshTimer);
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(163,230,53,0.08),transparent_32%)]" />

        {/* Moving orbs */}

        <div className="approach-orb-one absolute -left-48 top-[20%] h-[500px] w-[500px] rounded-full bg-lime-300/[0.04] blur-[130px]" />

        <div className="approach-orb-two absolute -right-48 bottom-[10%] h-[450px] w-[450px] rounded-full bg-white/[0.025] blur-[120px]" />

        {/* Grid */}

        <div
          className="approach-grid absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* =====================================================
          INTRO
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16">

        <div className="max-w-5xl">

        <p className="approach-label text-xs font-medium uppercase tracking-[0.45em] text-lime-300">
  Our Approach
</p>

<h2 className="approach-heading mt-6 max-w-5xl text-4xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl md:text-7xl lg:text-8xl">
  Ideas become
  <br />
  <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
    digital experiences.
  </span>
</h2>

<p className="approach-intro-text mt-8 max-w-2xl text-base leading-7 text-white/45 md:text-lg">
  We combine strategy, design, technology and performance to turn
  ambitious ideas into digital experiences people remember.
</p>

        </div>

      </div>

      {/* =====================================================
          DESKTOP EXPERIENCE
      ====================================================== */}

      <div className="approach-stage relative hidden h-screen min-h-[700px] lg:block">

        <div className="mx-auto flex h-screen max-w-7xl items-center px-16">

          {/* LEFT */}

          <div className="relative flex h-[540px] w-[34%] flex-col justify-between">

            <div>

              <p className="text-xs uppercase tracking-[0.4em] text-white/20">
                How we work
              </p>

              <div className="mt-8 flex items-end gap-5">

                <span className="approach-big-number text-[9rem] font-semibold leading-none tracking-[-0.08em] text-white/[0.08]">
                  01
                </span>

                <span className="mb-5 text-xs uppercase tracking-[0.3em] text-lime-300">
                  / 04
                </span>

              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/25">
                A simple process built around clarity, creativity and
                technology.
              </p>

            </div>

            {/* PROGRESS */}

            <div className="w-full max-w-xs">

              <div className="relative h-px w-full bg-white/10">

                <div className="approach-progress absolute left-0 top-0 h-px w-0 bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

              </div>

              <div className="mt-4 flex justify-between text-[10px] uppercase tracking-[0.2em] text-white/20">
                <span>Start</span>
                <span>Launch</span>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative h-[540px] w-[66%]">

            {approaches.map((item) => (
              <div
                key={item.number}
                className="approach-card absolute inset-0"
              >

                <div className="grid h-full grid-cols-[0.85fr_1.15fr] gap-10">

                  {/* CONTENT */}

                  <div className="flex flex-col justify-center">

                    <div className="mb-7 flex items-center gap-4">

                      <span className="text-xs text-lime-300">
                        {item.number}
                      </span>

                      <span className="h-px w-10 bg-white/10" />

                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                        {item.shortTitle}
                      </span>

                    </div>

                    <h3 className="text-6xl font-semibold tracking-[-0.05em] xl:text-7xl">
                      {item.title}
                      <span className="text-lime-300">.</span>
                    </h3>

                    <p className="mt-7 max-w-md text-base leading-8 text-white/40">
                      {item.description}
                    </p>

                    <div className="mt-8 space-y-3">

                      {item.points.map((point, pointIndex) => (
                        <div
                          key={point}
                          className="flex items-center gap-3 text-sm text-white/50"
                        >

                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/10 text-[9px] text-lime-300">
                            {String(pointIndex + 1).padStart(2, "0")}
                          </span>

                          <span>{point}</span>

                        </div>
                      ))}

                    </div>

                  </div>

                  {/* IMAGE */}

                  <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="approach-image h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

                    <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.08] via-transparent to-transparent" />

                    <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">

                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                        Digital Experience
                      </span>

                      <span className="text-5xl font-light text-white/15">
                        {item.number}
                      </span>

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* =====================================================
          MOBILE / TABLET EXPERIENCE
      ====================================================== */}

      <div className="approach-mobile-stage relative z-10 h-[100svh] min-h-[620px] lg:hidden">

        <div className="mx-auto flex h-full max-w-3xl flex-col justify-center px-6 md:px-10">

          {/* TOP COUNTER */}

          <div className="mb-5 flex items-end justify-between">

            <div>

              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                How we work
              </p>

              <div className="mt-2 flex items-end gap-3">

                <span className="approach-mobile-number text-6xl font-semibold leading-none tracking-[-0.06em] text-white/[0.09] sm:text-7xl">
                  01
                </span>

                <span className="mb-1 text-[10px] uppercase tracking-[0.3em] text-lime-300">
                  / 04
                </span>

              </div>

            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
              Scroll
            </span>

          </div>

          {/* CARD STAGE */}

          <div className="relative h-[480px] w-full sm:h-[540px]">

            {approaches.map((item) => (
              <div
                key={item.number}
                className="approach-card-mobile absolute inset-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0d0d0d]"
              >

                {/* IMAGE */}

                <div className="relative h-[48%] overflow-hidden sm:h-[52%]">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="approach-mobile-image h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-br from-lime-300/[0.08] via-transparent to-transparent" />

                  {/* Number */}

                  <div className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-xs text-lime-300 backdrop-blur-md">
                    {item.number}
                  </div>

                  {/* Label */}

                  <div className="absolute bottom-5 left-5">

                    <p className="text-[9px] uppercase tracking-[0.35em] text-lime-300">
                      {item.shortTitle}
                    </p>

                    <h3 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {item.title}
                      <span className="text-lime-300">.</span>
                    </h3>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex h-[52%] flex-col p-5 sm:h-[48%] sm:p-7">

                  <p className="text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
                    {item.description}
                  </p>

                  <div className="mt-auto space-y-2.5">

                    {item.points.map((point, pointIndex) => (
                      <div
                        key={point}
                        className="flex items-center gap-3 border-t border-white/10 pt-2.5 text-xs text-white/50 sm:text-sm"
                      >

                        <span className="text-[9px] text-lime-300">
                          {String(pointIndex + 1).padStart(2, "0")}
                        </span>

                        <span>{point}</span>

                      </div>
                    ))}

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* MOBILE PROGRESS */}

          <div className="mt-5">

            <div className="relative h-px w-full bg-white/10">

              <div className="approach-mobile-progress absolute left-0 top-0 h-px w-0 bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

            </div>

            <div className="mt-3 flex justify-between text-[9px] uppercase tracking-[0.25em] text-white/20">

              <span>Start</span>
              <span>Launch</span>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM STATEMENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-20 md:px-10 lg:px-16 lg:pt-28">

        <div className="border-t border-white/10 pt-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-xs uppercase tracking-[0.35em] text-lime-300">
                Built with intention
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/30">
                Think bold. Build meaningful. Move forward.
              </p>

            </div>

            <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/30">

              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />

              <span>
                Strategy × Design × Technology
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
