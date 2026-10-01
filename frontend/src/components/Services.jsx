
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    slug: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites built for performance, usability and real-world business needs.",
    tags: ["React", "JavaScript", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    slug: "mern-stack-development",
    title: "MERN Stack",
    description:
      "Full-stack web applications powered by MongoDB, Express, React and Node.js with scalable architecture.",
    tags: ["MongoDB", "Express", "React", "Node"],
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    slug: "ui-ux-design",
    title: "UI / UX Design",
    description:
      "Clean and intuitive interfaces designed to create engaging digital experiences across devices.",
    tags: ["UI", "UX", "Figma"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    slug: "app-development",
    title: "App Development",
    description:
      "Modern mobile experiences designed around usability, performance and seamless user interactions.",
    tags: ["Mobile", "React Native", "API"],
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "05",
    slug: "shopify-development",
    title: "Shopify Development",
    description:
      "Conversion-focused Shopify stores with custom sections, responsive layouts and optimized shopping experiences.",
    tags: ["Shopify", "E-commerce", "Custom"],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "06",
    slug: "seo-performance",
    title: "SEO & Performance",
    description:
      "Technical improvements focused on search visibility, faster loading and better overall website performance.",
    tags: ["SEO", "Speed", "Core Web"],
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "07",
    slug: "hosting-deployment",
    title: "Hosting & Deployment",
    description:
      "Reliable deployment and hosting setups that keep websites secure, accessible and ready for production.",
    tags: ["Deployment", "Cloud", "Domains"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=85",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
    ------------------------------------------------
    RESPONSIVE SLIDES
    Desktop  = 3
    Tablet   = 2
    Mobile   = 1
    ------------------------------------------------
  */

  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    updateSlides();

    window.addEventListener("resize", updateSlides);

    return () => {
      window.removeEventListener("resize", updateSlides);
    };
  }, []);

  const maxIndex = Math.max(services.length - slidesPerView, 0);

  /*
    ------------------------------------------------
    SLIDER MOVEMENT
    ------------------------------------------------
  */

  const goToSlide = (index) => {
    const nextIndex = Math.max(0, Math.min(index, maxIndex));

    setCurrentIndex(nextIndex);

    if (!sliderRef.current) return;

    const cardWidth =
      sliderRef.current.children[0]?.getBoundingClientRect().width || 0;

    const gap = 24;

    gsap.to(sliderRef.current, {
      x: -(nextIndex * (cardWidth + gap)),
      duration: 0.9,
      ease: "power4.out",
      overwrite: true,
    });
  };

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      goToSlide(currentIndex + 1);
    }
  };

  const previousSlide = () => {
    if (currentIndex > 0) {
      goToSlide(currentIndex - 1);
    }
  };

  /*
    ------------------------------------------------
    RESET SLIDER ON RESIZE
    ------------------------------------------------
  */

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setCurrentIndex(0);

        if (sliderRef.current) {
          gsap.set(sliderRef.current, {
            x: 0,
          });
        }
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /*
    ------------------------------------------------
    SECTION ANIMATION
    ------------------------------------------------
  */

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-label",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-heading",
        {
          y: 70,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".services-description",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-description",
            start: "top 85%",
            once: true,
          },
        }
      );

      /*
        Cards reveal
      */

      gsap.fromTo(
        ".service-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-slider-window",
            start: "top 82%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /*
    ------------------------------------------------
    TOUCH / DRAG SWIPE
    ------------------------------------------------
  */

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 50) return;

    if (distance > 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-28 text-white md:py-36"
    >
      {/* BACKGROUND GLOWS */}

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-lime-300/5 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-lime-300/[0.03] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ============================
            HEADER
        ============================ */}

        <div className="max-w-5xl">

         


<p className="services-label text-xs font-medium uppercase tracking-[0.35em] text-lime-300">
  What We Do
</p>

<h2 className="services-heading mt-6 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-7xl lg:text-8xl">
  Everything you need
  <br />

  <span className="bg-gradient-to-r from-lime-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">
    to build digital experiences.
  </span>
</h2>

<p className="mt-7 max-w-xl text-base leading-7 text-white/40 md:text-lg">
  From strategy and design to development and deployment,
  we create digital experiences built to perform.
</p>






          <p className="services-description mt-8 max-w-2xl text-base leading-7 text-white/40 md:text-lg">
            From strategy and design to development, optimization and
            deployment, we build digital products that are designed to perform.
          </p>

        </div>

        {/* ============================
            SLIDER
        ============================ */}

        <div className="mt-16 md:mt-20">

          {/* Slider Window */}

          <div
            className="services-slider-window overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >

            {/* Slider Track */}

            
<div
  ref={sliderRef}
  className="flex gap-6 will-change-transform"
>
  {services.map((service, index) => (
    <div
      key={service.slug}
      className="service-slide min-w-0 shrink-0 basis-full md:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
    >
      <Link
        to={`/services/${service.slug}`}
        className="service-card group relative block h-full overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101010] transition-all duration-700 hover:-translate-y-3 hover:border-lime-300/30 hover:shadow-[0_25px_80px_rgba(163,230,53,0.08)]"
      >

        {/* TOP COLOR GLOW */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-lime-300/10 blur-3xl transition-all duration-700 group-hover:bg-cyan-300/15 group-hover:scale-150" />

        {/* IMAGE */}
        <div className="relative h-64 overflow-hidden md:h-72">

          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover grayscale-[35%] brightness-[0.75] transition-all duration-[1200ms] ease-out group-hover:scale-110 group-hover:rotate-1 group-hover:grayscale-0 group-hover:brightness-100"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/30 to-black/10" />

          {/* COLOR OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br from-lime-300/10 via-transparent to-cyan-300/10 opacity-60 transition-opacity duration-700 group-hover:opacity-100" />

          {/* IMAGE GLOW */}
          <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-lime-300/20 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-150" />

          {/* NUMBER */}
          <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-xs font-medium text-white/70 backdrop-blur-xl transition-all duration-500 group-hover:border-lime-300/60 group-hover:bg-lime-300 group-hover:text-black group-hover:scale-110">
            {service.number}
          </div>

          {/* ARROW */}
          <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/40 text-lg text-white/60 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-300/60 group-hover:bg-cyan-300 group-hover:text-black group-hover:rotate-45">
            ↗
          </div>

          {/* SERVICE LABEL */}
          <div className="absolute bottom-6 left-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-lime-300">
              Service
            </p>
          </div>

        </div>

        {/* CONTENT */}
        <div className="relative flex min-h-[330px] flex-col p-7 md:p-8">

          {/* SMALL INDEX */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-lime-300 to-cyan-300 transition-all duration-500 group-hover:w-14" />

            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/25 transition-colors duration-500 group-hover:text-white/50">
              Digital Service
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white transition-all duration-500 group-hover:text-lime-100 md:text-3xl">
            {service.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-5 max-w-md text-sm leading-7 text-white/40 transition-colors duration-500 group-hover:text-white/55 md:text-base">
            {service.description}
          </p>

          {/* TAGS */}
          <div className="mt-7 flex flex-wrap gap-2">
            {service.tags.map((tag, tagIndex) => (
              <span
                key={tag}
                className={`rounded-full border px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-all duration-500 ${
                  tagIndex === 0
                    ? "border-lime-300/20 bg-lime-300/[0.06] text-lime-200/70 group-hover:border-lime-300/40 group-hover:bg-lime-300/10 group-hover:text-lime-200"
                    : "border-white/[0.08] bg-white/[0.02] text-white/35 group-hover:border-cyan-300/20 group-hover:text-white/60"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* BOTTOM */}
          <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] pt-6">

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/25 transition-all duration-500 group-hover:text-white/70">
              Explore Service
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-sm text-lime-300 transition-all duration-500 group-hover:border-lime-300/40 group-hover:bg-lime-300 group-hover:text-black group-hover:translate-x-1">
              →
            </span>

          </div>
        </div>

        {/* BOTTOM GRADIENT LINE */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-lime-300 via-cyan-300 to-violet-400 transition-all duration-700 group-hover:w-full" />

      </Link>
    </div>
  ))}
</div>


          </div>

          {/* ============================
              CONTROLS
          ============================ */}

          <div className="mt-8 flex items-center justify-between">

            {/* Progress */}

            <div className="flex items-center gap-4">

              <span className="text-xs uppercase tracking-[0.25em] text-white/30">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>

              <div className="h-px w-20 bg-white/10 sm:w-32">

                <div
                  className="h-full bg-lime-300 transition-all duration-700"
                  style={{
                    width: `${
                      ((currentIndex + 1) /
                        Math.max(services.length - slidesPerView + 1, 1)) *
                      100
                    }%`,
                  }}
                />

              </div>

              <span className="text-xs uppercase tracking-[0.25em] text-white/20">
                {String(
                  Math.max(services.length - slidesPerView + 1, 1)
                ).padStart(2, "0")}
              </span>

            </div>

            {/* Arrows */}

            <div className="flex gap-3">

              <button
                type="button"
                onClick={previousSlide}
                disabled={currentIndex === 0}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-white/50 transition-all duration-300 hover:border-lime-300/40 hover:bg-lime-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Previous service"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-lg text-white/50 transition-all duration-300 hover:border-lime-300/40 hover:bg-lime-300 hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Next service"
              >
                →
              </button>

            </div>

          </div>

        </div>

        {/* ============================
            BOTTOM STATEMENT
        ============================ */}

        <div className="mt-24 border-t border-white/10 pt-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <p className="max-w-xl text-sm leading-6 text-white/30">
              Design. Develop. Optimize. Deploy.
              <br />
              One digital experience at a time.
            </p>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/30">
              <span className="h-2 w-2 rounded-full bg-lime-300" />

              <span>
                Swipe or explore our services
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Services;


