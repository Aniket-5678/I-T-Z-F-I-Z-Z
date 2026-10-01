
import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const serviceDetails = {
  "web-development": {
    number: "01",
    title: "Web Development",
    subtitle: "Modern websites built for real-world experiences.",
    description:
      "We create responsive and modern websites focused on usability, performance and clean frontend architecture.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
    ],
    points: [
      "Responsive website development",
      "Modern React-based interfaces",
      "Interactive UI components",
      "REST API integration",
      "Performance-focused implementation",
    ],
  },

  "mern-stack-development": {
    number: "02",
    title: "MERN Stack Development",
    subtitle: "Full-stack applications from frontend to backend.",
    description:
      "We build complete web applications using MongoDB, Express.js, React and Node.js with scalable backend architecture.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
      "JWT",
    ],
    points: [
      "Full-stack application development",
      "REST API development",
      "Authentication and authorization",
      "MongoDB database integration",
      "Admin dashboards and CRUD systems",
    ],
  },

  "ui-ux-design": {
    number: "03",
    title: "UI / UX Design",
    subtitle: "Interfaces that are simple, engaging and intuitive.",
    description:
      "We design digital interfaces with a strong focus on usability, visual hierarchy and smooth user interactions.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "Figma",
      "Wireframes",
      "Prototyping",
      "Design Systems",
      "Interaction",
    ],
    points: [
      "Website and application UI design",
      "Responsive design systems",
      "Wireframes and prototypes",
      "User-focused interface structure",
      "Interactive design concepts",
    ],
  },

  "app-development": {
    number: "04",
    title: "App Development",
    subtitle: "Mobile experiences designed for modern users.",
    description:
      "We develop mobile experiences with responsive interfaces, API integrations and performance-focused architecture.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "React Native",
      "JavaScript",
      "REST API",
      "Firebase",
      "Mobile UI",
    ],
    points: [
      "Cross-platform application development",
      "API integration",
      "Responsive mobile interfaces",
      "Authentication flows",
      "Performance optimization",
    ],
  },

  "shopify-development": {
    number: "05",
    title: "Shopify Development",
    subtitle: "E-commerce experiences designed to convert.",
    description:
      "We create customized Shopify storefronts with responsive layouts, optimized product experiences and flexible sections.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "Shopify",
      "Liquid",
      "E-commerce",
      "Custom Sections",
      "Responsive UI",
    ],
    points: [
      "Custom Shopify storefronts",
      "Theme customization",
      "Custom sections",
      "Responsive product pages",
      "E-commerce UI improvements",
    ],
  },

  "seo-performance": {
    number: "06",
    title: "SEO & Performance",
    subtitle: "Faster experiences with better technical foundations.",
    description:
      "We improve website performance and technical SEO foundations to create faster and more accessible digital experiences.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "Technical SEO",
      "Performance",
      "Core Web Vitals",
      "Metadata",
      "Optimization",
    ],
    points: [
      "Technical SEO improvements",
      "Page speed optimization",
      "Image and asset optimization",
      "Metadata and structured content",
      "Performance-focused frontend improvements",
    ],
  },

  "hosting-deployment": {
    number: "07",
    title: "Hosting & Deployment",
    subtitle: "Reliable deployment from development to production.",
    description:
      "We help move applications from local development to production with reliable hosting, deployment and domain configuration.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80",
    technologies: [
      "Cloud Hosting",
      "DigitalOcean",
      "Vercel",
      "Netlify",
      "Domains",
    ],
    points: [
      "Production deployment",
      "Cloud hosting setup",
      "Domain configuration",
      "SSL and HTTPS setup",
      "Deployment troubleshooting",
    ],
  },
};

/* =========================================================
   CARTOON DEVELOPER
========================================================= */

const DeveloperCharacter = () => {
  const characterRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const handRef = useRef(null);

  useEffect(() => {
    const character = characterRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const hand = handRef.current;

    if (!character || !leftEye || !rightEye || !hand) return;

    const ctx = gsap.context(() => {
      /* --------------------------------
         CHARACTER FLOAT
      -------------------------------- */

      gsap.to(character, {
        y: -10,
        rotation: 1.5,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* --------------------------------
         TYPING HAND
      -------------------------------- */

      gsap.to(hand, {
        x: 5,
        y: -2,
        duration: 0.35,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      /* --------------------------------
         BLINK
      -------------------------------- */

      const blink = () => {
        gsap.to([leftEye, rightEye], {
          scaleY: 0.08,
          duration: 0.08,
          ease: "power2.in",
          onComplete: () => {
            gsap.to([leftEye, rightEye], {
              scaleY: 1,
              duration: 0.1,
              ease: "power2.out",
              onComplete: () => {
                gsap.delayedCall(
                  gsap.utils.random(2, 5),
                  blink
                );
              },
            });
          },
        });
      };

      gsap.delayedCall(2, blink);

      /* --------------------------------
         ENTRANCE
      -------------------------------- */

      gsap.from(character, {
        opacity: 0,
        scale: 0.5,
        rotation: -12,
        duration: 1.2,
        delay: 0.3,
        ease: "back.out(1.7)",
      });
    }, characterRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={characterRef}
      className="
        relative mx-auto
        h-[300px] w-[270px]
        sm:h-[330px] sm:w-[300px]
        md:h-[360px] md:w-[330px]
        lg:h-[390px] lg:w-[360px]
      "
    >
      {/* =====================================
          GLOW
      ====================================== */}

      <div
        className="
          absolute left-1/2 top-1/2
          h-40 w-40
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-lime-300/20
          blur-[70px]
          sm:h-52 sm:w-52
          sm:blur-[90px]
        "
      />

      {/* =====================================
          FLOATING CODE CARD 1
      ====================================== */}

      <div
        className="
          absolute left-0 top-12
          rotate-[-8deg]
          rounded-xl
          border border-white/10
          bg-[#151515]/90
          px-3 py-2
          shadow-2xl
          backdrop-blur-md
          sm:px-4 sm:py-3
        "
      >
        <span className="font-mono text-[10px] text-lime-300 sm:text-xs">
          {"<Code />"}
        </span>
      </div>

      {/* =====================================
          FLOATING CODE CARD 2
      ====================================== */}

      <div
        className="
          absolute right-0 top-2
          rotate-[8deg]
          rounded-xl
          border border-white/10
          bg-[#151515]/90
          px-3 py-2
          shadow-2xl
          backdrop-blur-md
          sm:px-4 sm:py-3
        "
      >
        <span className="font-mono text-[10px] text-cyan-300 sm:text-xs">
          {"{ API }"}
        </span>
      </div>

      {/* =====================================
          FLOATING CODE CARD 3
      ====================================== */}

      <div
        className="
          absolute bottom-10 left-0
          rotate-[5deg]
          rounded-xl
          border border-white/10
          bg-[#151515]/90
          px-3 py-2
          shadow-2xl
          backdrop-blur-md
          sm:bottom-16 sm:px-4 sm:py-3
        "
      >
        <span className="font-mono text-[10px] text-violet-300 sm:text-xs">
          npm run dev
        </span>
      </div>

      {/* =====================================
          MOBILE CODE CARD
      ====================================== */}

      <div
        className="
          absolute bottom-20 right-0
          rotate-[-5deg]
          rounded-xl
          border border-white/10
          bg-[#151515]/90
          px-3 py-2
          shadow-2xl
          backdrop-blur-md
          md:hidden
        "
      >
        <span className="font-mono text-[10px] text-pink-300">
          {"</>"}
        </span>
      </div>

      {/* =====================================
          DEVELOPER BODY
      ====================================== */}

      <div
        className="
          absolute bottom-4 left-1/2
          h-32 w-36
          -translate-x-1/2
          rounded-[45%_45%_25%_25%]
          border border-white/10
          bg-gradient-to-b from-cyan-400 to-blue-600
          shadow-[0_25px_80px_rgba(34,211,238,0.18)]
          sm:bottom-5 sm:h-40 sm:w-44
        "
      >
        {/* Shirt */}

        <div
          className="
            absolute bottom-0 left-1/2
            h-16 w-24
            -translate-x-1/2
            rounded-t-[45%]
            bg-[#111827]
            sm:h-20 sm:w-32
          "
        />

        {/* Laptop */}

        <div
          className="
            absolute left-1/2 top-10
            h-12 w-24
            -translate-x-1/2
            rounded-lg
            border border-white/10
            bg-[#090909]
            shadow-xl
            sm:top-12 sm:h-14 sm:w-28
          "
        >
          <div className="absolute inset-1.5 rounded-md bg-gradient-to-br from-lime-300/20 via-cyan-300/10 to-violet-400/20 sm:inset-2">
            <div className="absolute left-2 top-2 h-1 w-8 rounded-full bg-lime-300/60 sm:w-10" />
            <div className="absolute left-2 top-5 h-1 w-11 rounded-full bg-cyan-300/40 sm:w-14" />
            <div className="absolute left-2 top-8 h-1 w-7 rounded-full bg-violet-300/50 sm:w-8" />
          </div>
        </div>

        {/* Left arm */}

        <div
          className="
            absolute left-3 top-12
            h-4 w-16
            rotate-[22deg]
            rounded-full
            bg-cyan-300
            sm:left-5 sm:top-14 sm:h-5 sm:w-20
          "
        />

        {/* Right arm */}

        <div
          ref={handRef}
          className="
            absolute right-1 top-14
            h-4 w-16
            rotate-[-24deg]
            rounded-full
            bg-cyan-300
            sm:right-2 sm:top-16 sm:h-5 sm:w-20
          "
        />
      </div>

      {/* =====================================
          HEAD
      ====================================== */}

      <div
        className="
          absolute left-1/2 top-12
          h-32 w-32
          -translate-x-1/2
          rounded-[42%]
          border border-white/20
          bg-[#f4c7a1]
          shadow-2xl
          sm:top-16 sm:h-40 sm:w-40
        "
      >
        {/* Hair */}

        <div
          className="
            absolute left-0 top-0
            h-11 w-full
            rounded-t-[45%]
            bg-[#151515]
            sm:h-14
          "
        />

        <div
          className="
            absolute left-4 top-2
            h-8 w-7
            rotate-[-15deg]
            rounded-full
            bg-[#151515]
            sm:left-5 sm:top-3 sm:h-10 sm:w-8
          "
        />

        <div
          className="
            absolute right-4 top-2
            h-8 w-7
            rotate-[15deg]
            rounded-full
            bg-[#151515]
            sm:right-5 sm:top-3 sm:h-10 sm:w-8
          "
        />

        {/* Ears */}

        <div
          className="
            absolute -left-2 top-16
            h-7 w-4
            rounded-full
            bg-[#e7b58e]
            sm:-left-3 sm:top-20 sm:h-9 sm:w-5
          "
        />

        <div
          className="
            absolute -right-2 top-16
            h-7 w-4
            rounded-full
            bg-[#e7b58e]
            sm:-right-3 sm:top-20 sm:h-9 sm:w-5
          "
        />

        {/* Eyes */}

        <div
          ref={leftEyeRef}
          className="
            absolute left-8 top-[76px]
            h-3 w-3
            rounded-full
            bg-black
            sm:left-10 sm:top-24 sm:h-3.5 sm:w-3.5
          "
        />

        <div
          ref={rightEyeRef}
          className="
            absolute right-8 top-[76px]
            h-3 w-3
            rounded-full
            bg-black
            sm:right-10 sm:top-24 sm:h-3.5 sm:w-3.5
          "
        />

        {/* Nose */}

        <div
          className="
            absolute left-1/2 top-[87px]
            h-2.5 w-2
            -translate-x-1/2
            rounded-full
            bg-[#d79c75]
            sm:top-[105px] sm:h-3
          "
        />

        {/* Smile */}

        <div
          className="
            absolute bottom-5 left-1/2
            h-3 w-8
            -translate-x-1/2
            rounded-b-full
            border-b-2 border-black
            sm:bottom-6 sm:w-10
          "
        />

        {/* Glasses */}

        <div
          className="
            absolute left-4 top-[62px]
            h-8 w-10
            rounded-lg
            border-2 border-black/70
            sm:left-6 sm:top-[87px] sm:h-10 sm:w-12
          "
        />

        <div
          className="
            absolute right-4 top-[62px]
            h-8 w-10
            rounded-lg
            border-2 border-black/70
            sm:right-6 sm:top-[87px] sm:h-10 sm:w-12
          "
        />

        <div
          className="
            absolute left-1/2 top-[75px]
            h-1 w-4
            -translate-x-1/2
            bg-black/70
            sm:top-[101px] sm:w-5
          "
        />
      </div>

      {/* Ground shadow */}

      <div
        className="
          absolute bottom-0 left-1/2
          h-4 w-36
          -translate-x-1/2
          rounded-full
          bg-black/50
          blur-xl
          sm:h-5 sm:w-44
        "
      />
    </div>
  );
};

/* =========================================================
   SERVICE DETAILS
========================================================= */

const ServiceDetails = () => {
  const { slug } = useParams();
  const pageRef = useRef(null);

  const service = serviceDetails[slug];

  /* ---------------------------------------------
     ALWAYS START SERVICE PAGE FROM TOP
  --------------------------------------------- */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [slug]);

  /* ---------------------------------------------
     GSAP ANIMATIONS
  --------------------------------------------- */

  useEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      /* ==========================================
         HERO INTRO
      ========================================== */

      const heroTimeline = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      heroTimeline
        .from(".detail-back", {
          y: 20,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          ".detail-number",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".detail-title",
          {
            y: 90,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        )
        .from(
          ".detail-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".developer-wrapper",
          {
            scale: 0.7,
            opacity: 0,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.5"
        );

      /* ==========================================
         HERO IMAGE PARALLAX
      ========================================== */

      gsap.to(".detail-hero-image", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      /* ==========================================
         ORB ANIMATION
      ========================================== */

      gsap.to(".detail-orb-one", {
        x: 100,
        y: -70,
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".detail-orb-two", {
        x: -100,
        y: 100,
        rotation: -180,
        ease: "none",
        scrollTrigger: {
          trigger: ".detail-hero",
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* ==========================================
         OVERVIEW
      ========================================== */

      gsap.from(".overview-label", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 80%",
        },
      });

      gsap.from(".overview-description", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 75%",
        },
      });

      gsap.from(".tech-block", {
        x: 60,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".overview-section",
          start: "top 75%",
        },
      });

      /* ==========================================
         TECH PILLS
      ========================================== */

      gsap.from(".tech-pill", {
        y: 25,
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        stagger: 0.08,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".tech-block",
          start: "top 80%",
        },
      });

      /* ==========================================
         DELIVERY
      ========================================== */

      gsap.from(".deliver-label", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".deliver-section",
          start: "top 80%",
        },
      });

      gsap.from(".deliver-item", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".deliver-grid",
          start: "top 80%",
        },
      });

      /* ==========================================
         CTA
      ========================================== */

      gsap.from(".detail-cta", {
        y: 80,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".detail-cta",
          start: "top 85%",
        },
      });

      gsap.from(".cta-orb", {
        scale: 0,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".detail-cta",
          start: "top 85%",
        },
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, [slug, service]);

  /* ==========================================
     404
  ========================================== */

  if (!service) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#080808] px-6 text-white">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-lime-300">
            404
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Service Not Found
          </h1>

          <Link
            to="/"
            className="mt-8 inline-block rounded-full bg-lime-300 px-6 py-3 text-sm font-medium text-black transition hover:bg-lime-200"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      ref={pageRef}
      className="min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="detail-hero relative min-h-[930px] overflow-hidden sm:min-h-[820px] lg:min-h-[850px]">
        {/* Background */}

        <img
          src={service.image}
          alt={service.title}
          className="detail-hero-image absolute inset-0 h-[115%] w-full object-cover"
        />

        {/* Dark overlay */}

        <div className="absolute inset-0 bg-black/75" />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#080808]/60 to-[#080808]" />

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Orbs */}

        <div className="detail-orb-one absolute left-[5%] top-[15%] h-40 w-40 rounded-full bg-lime-300/10 blur-[70px]" />

        <div className="detail-orb-two absolute right-[5%] top-[35%] h-56 w-56 rounded-full bg-cyan-300/10 blur-[90px]" />

        {/* Hero content */}

        <div
          className="
            relative z-10 mx-auto
            flex min-h-[930px]
            max-w-7xl
            items-center
            px-6
            pb-24
            pt-28
            sm:min-h-[820px]
            sm:pb-20
            sm:pt-32
            md:px-10
            lg:min-h-[850px]
            lg:px-16
          "
        >
          <div
            className="
              grid w-full
              items-center
              gap-8
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-10
            "
          >
            {/* LEFT */}

            <div>
              <Link
                to="/"
                className="
                  detail-back
                  inline-flex w-fit
                  items-center gap-3
                  text-xs uppercase
                  tracking-[0.3em]
                  text-white/45
                  transition-colors duration-300
                  hover:text-lime-300
                "
              >
                <span className="text-lg">←</span>
                Back to Home
              </Link>

              <div className="mt-10 flex items-start gap-4 sm:mt-14 sm:gap-5">
                <span className="detail-number mt-2 text-sm font-medium text-lime-300 sm:mt-3">
                  {service.number}
                </span>

                <div>
                  <h1
                    className="
                      detail-title
                      max-w-5xl
                      text-5xl
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.05em]
                      sm:text-6xl
                      md:text-7xl
                      lg:text-[6.5rem]
                    "
                  >
                    {service.title}
                  </h1>

                  <p
                    className="
                      detail-subtitle
                      mt-7
                      max-w-2xl
                      text-base
                      leading-7
                      text-white/55
                      sm:mt-8
                      sm:text-lg
                      md:text-xl
                      md:leading-8
                    "
                  >
                    {service.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* ==========================================
                CARTOON DEVELOPER

                IMPORTANT:
                Visible on mobile + tablet + desktop
            ========================================== */}

            <div
              className="
                developer-wrapper
                relative
                mt-2
                flex
                min-h-[310px]
                items-center
                justify-center
                sm:mt-4
                sm:min-h-[350px]
                lg:mt-0
                lg:min-h-0
              "
            >
              <DeveloperCharacter />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-8">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/30">
            Explore
          </span>

          <div className="h-10 w-px overflow-hidden bg-white/10 sm:h-12">
            <div className="h-5 w-full animate-pulse bg-lime-300" />
          </div>
        </div>
      </section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="overview-section relative px-6 py-28 md:py-40">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="overview-label text-xs uppercase tracking-[0.4em] text-lime-300">
                Overview
              </p>

              <p className="overview-description mt-8 max-w-4xl text-2xl leading-[1.35] tracking-[-0.02em] text-white/70 sm:text-3xl md:text-5xl">
                {service.description}
              </p>
            </div>

            <div className="tech-block">
              <p className="text-xs uppercase tracking-[0.4em] text-white/30">
                Technologies
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      tech-pill
                      cursor-default
                      rounded-full
                      border border-white/10
                      bg-white/[0.025]
                      px-4 py-2.5
                      text-sm
                      text-white/55
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-lime-300/30
                      hover:bg-lime-300/5
                      hover:text-lime-200
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

                  <span className="text-xs uppercase tracking-[0.25em] text-white/35">
                    Development mindset
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/40">
                  Clean architecture, thoughtful interactions and
                  performance-focused implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DELIVER
      ===================================================== */}

      <section className="deliver-section relative border-t border-white/[0.07] px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="deliver-label text-xs uppercase tracking-[0.4em] text-lime-300">
                What We Deliver
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-5xl md:text-7xl">
                From idea
                <br />

                <span className="bg-gradient-to-r from-lime-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  to execution.
                </span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-white/35">
              Every project is built around usability, scalability and
              a strong digital experience.
            </p>
          </div>

          <div className="deliver-grid mt-16 grid border-t border-white/10 md:grid-cols-2">
            {service.points.map((point, index) => (
              <div
                key={point}
                className="
                  deliver-item
                  group
                  flex gap-6
                  border-b border-white/10
                  py-8
                  transition-all duration-500
                  hover:bg-white/[0.015]
                  md:px-5
                "
              >
                <span className="font-mono text-xs text-white/20 transition-colors group-hover:text-lime-300">
                  0{index + 1}
                </span>

                <div className="flex-1">
                  <span className="block text-lg text-white/60 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white md:text-xl">
                    {point}
                  </span>

                  <span className="mt-3 block h-px w-0 bg-lime-300 transition-all duration-500 group-hover:w-16" />
                </div>

                <span className="text-xl text-white/10 transition-all duration-300 group-hover:translate-x-1 group-hover:text-lime-300">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 pb-20 pt-10 md:pb-28">
        <div
          className="
            detail-cta
            relative mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[2rem]
            border border-white/10
            bg-[#101010]
            p-8
            md:p-16
            lg:p-20
          "
        >
          <div className="cta-orb absolute -right-20 -top-20 h-80 w-80 rounded-full bg-lime-300/10 blur-[100px]" />

          <div className="relative z-10 flex flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-lime-300">
                Have a project?
              </p>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-7xl">
                Let's create something
                <span className="text-white/25">
                  {" "}
                  meaningful.
                </span>
              </h2>
            </div>

            <Link
              to="/#contact"
              className="
                group
                flex w-fit
                items-center gap-5
                rounded-full
                bg-lime-300
                px-7 py-4
                text-sm font-medium
                text-black
                transition-all duration-500
                hover:gap-7
                hover:bg-lime-200
              "
            >
              Start a Project

              <span className="text-lg transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime-300/50 to-transparent" />
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;

