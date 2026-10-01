
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectTypes = [
  "Website",
  "Web App",
  "UI / UX",
  "E-commerce",
];

const Contact = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  const [selectedType, setSelectedType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= INTRO ANIMATION ================= */

      gsap.fromTo(
        ".contact-label",
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
            trigger: ".contact-label",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-heading-line",
        {
          yPercent: 110,
          rotateX: 35,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotateX: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-description",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-description",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* ================= FORM REVEAL ================= */

      gsap.fromTo(
        ".contact-form-card",
        {
          y: 80,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".contact-form-card",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".contact-info-item",
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* ================= FLOATING BACKGROUND ================= */

      gsap.to(".contact-orb-one", {
        x: 100,
        y: -80,
        scale: 1.15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orb-two", {
        x: -80,
        y: 100,
        scale: 0.85,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-grid", {
        rotation: 3,
        scale: 1.05,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  /* ================= BUTTON MAGNETIC EFFECT ================= */

  const handleButtonMove = (e) => {
    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * 0.18,
      y: y * 0.18,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleButtonLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.4)",
    });
  };

  /* ================= FORM SUBMIT ================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    gsap.fromTo(
      ".success-message",
      {
        y: 20,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.5)",
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-[#080808] px-6 py-28 text-white md:px-10 md:py-40 lg:px-16"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}
        <div className="absolute left-[20%] top-[15%] h-[500px] w-[500px] rounded-full bg-lime-300/[0.045] blur-[140px]" />

        {/* Animated orb */}
        <div className="contact-orb-one absolute -right-40 top-[20%] h-[420px] w-[420px] rounded-full bg-lime-300/[0.05] blur-[120px]" />

        {/* Second orb */}
        <div className="contact-orb-two absolute -bottom-40 left-[-120px] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[130px]" />

        {/* Grid */}
        <div
          className="contact-grid absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* TOP LABEL */}

        <div className="contact-label flex items-center gap-4">
          <span className="h-px w-10 bg-lime-300" />

          <span className="text-[10px] uppercase tracking-[0.45em] text-lime-300">
            Start a Conversation
          </span>
        </div>

        {/* ================= HEADING ================= */}

        <div className="contact-heading mt-8 overflow-hidden">
         <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[9rem]">

  <span className="block overflow-hidden">
    <span className="contact-heading-line block text-white">
      Let's <span className="text-white/40">build</span>
    </span>
  </span>

  <span className="block overflow-hidden">
    <span className="contact-heading-line block">
      <span className="text-cyan-300">something</span>
    </span>
  </span>

  <span className="block overflow-hidden">
    <span className="contact-heading-line block">
      <span className="text-white">meaningful</span>
      <span className="text-lime-300">.</span>
    </span>
  </span>

</h2>
        </div>

        {/* ================= DESCRIPTION ================= */}

        <p className="contact-description mt-8 max-w-xl text-base leading-7 text-white/40 md:text-lg">
          Have an idea, a product or a problem worth solving?
          Tell us what you're thinking and let's turn it into
          a digital experience people remember.
        </p>

        {/* ================= MAIN CONTACT AREA ================= */}

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* ================= LEFT INFO ================= */}

          <div className="contact-info">

            <div className="contact-info-item border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Email
              </p>

              <a
                href="mailto:hello@itzfizz.com"
                className="mt-3 block text-lg text-white/65 transition-colors duration-300 hover:text-lime-300"
              >
                hello@itzfizz.com
              </a>
            </div>

            <div className="contact-info-item mt-10 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Availability
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />

                <span className="text-sm text-white/55">
                  Available for new projects
                </span>
              </div>
            </div>

            <div className="contact-info-item mt-10 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Typical response
              </p>

              <p className="mt-3 text-lg text-white/65">
                Within 24 hours
              </p>
            </div>

            <div className="contact-info-item mt-10 border-t border-white/10 pt-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
                Let's connect
              </p>

              <div className="mt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-all duration-300 hover:border-lime-300/50 hover:bg-lime-300 hover:text-black"
                >
                  IN
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-all duration-300 hover:border-lime-300/50 hover:bg-lime-300 hover:text-black"
                >
                  GH
                </a>

                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-white/40 transition-all duration-300 hover:border-lime-300/50 hover:bg-lime-300 hover:text-black"
                >
                  IG
                </a>
              </div>
            </div>

          </div>

          {/* ================= FORM ================= */}

          <div className="contact-form-card relative">

            {/* Card glow */}
            <div className="absolute -inset-1 rounded-[2rem] bg-lime-300/[0.04] blur-2xl" />

            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:p-8 md:p-10"
            >

              {/* Top decoration */}
              <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/25">
                    Project details
                  </p>

                  <p className="mt-2 text-sm text-white/40">
                    Tell us a little about your idea.
                  </p>
                </div>

                <span className="text-xs text-lime-300">
                  01 — 04
                </span>
              </div>

              {/* NAME + EMAIL */}

              <div className="grid gap-8 md:grid-cols-2">

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Your Name
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none placeholder:text-white/20 transition-all duration-500 focus:border-lime-300"
                  />

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="group relative">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="mt-3 w-full border-b border-white/15 bg-transparent pb-4 text-base text-white outline-none placeholder:text-white/20 transition-all duration-500 focus:border-lime-300"
                  />

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-500 group-focus-within:w-full" />
                </div>

              </div>

              {/* PROJECT TYPE */}

              <div className="mt-10">

                <label className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  What are you looking for?
                </label>

                <div className="mt-5 flex flex-wrap gap-3">

                  {projectTypes.map((type) => {
                    const active = selectedType === type;

                    return (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`rounded-full border px-4 py-2.5 text-xs transition-all duration-300 ${
                          active
                            ? "border-lime-300 bg-lime-300 text-black"
                            : "border-white/10 bg-white/[0.02] text-white/45 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}

                </div>

              </div>

              {/* MESSAGE */}

              <div className="group relative mt-10">

                <label className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  Tell us about your project
                </label>

                <textarea
                  required
                  rows="4"
                  placeholder="What are you building?"
                  className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-4 text-base leading-7 text-white outline-none placeholder:text-white/20 transition-all duration-500 focus:border-lime-300"
                />

                <span className="absolute bottom-0 left-0 h-px w-0 bg-lime-300 transition-all duration-500 group-focus-within:w-full" />

              </div>

              {/* SUBMIT */}

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <p className="max-w-xs text-[10px] leading-5 text-white/20">
                  By sending this form, you agree to start a
                  conversation about your project.
                </p>

                <button
                  ref={buttonRef}
                  type="submit"
                  onMouseMove={handleButtonMove}
                  onMouseLeave={handleButtonLeave}
                  className="group relative flex shrink-0 items-center justify-center gap-4 overflow-hidden rounded-full bg-lime-300 px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:bg-lime-200"
                >
                  <span>
                    {submitted ? "Message Ready" : "Start a Project"}
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                  {/* Button shine */}
                  <span className="pointer-events-none absolute inset-y-0 -left-20 w-12 skew-x-[-20deg] bg-white/40 opacity-0 blur-md transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                </button>

              </div>

              {/* SUCCESS */}

              {submitted && (
                <div className="success-message mt-8 flex items-center gap-4 rounded-2xl border border-lime-300/20 bg-lime-300/[0.05] p-5">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-300 text-black">
                    ✓
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      Your message is ready.
                    </p>

                    <p className="mt-1 text-xs text-white/35">
                      Thanks for reaching out. We'll get back to you soon.
                    </p>
                  </div>

                </div>
              )}

            </form>
          </div>

        </div>

        {/* ================= BOTTOM LINE ================= */}

        <div className="mt-28 border-t border-white/10 pt-8">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

            <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">
              ITZFIZZ — Digital Experiences
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.8)]" />

              <span className="text-[10px] uppercase tracking-[0.25em] text-white/20">
                Let's create something meaningful
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

