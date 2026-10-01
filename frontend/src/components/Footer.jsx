
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonGlowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // MAIN REVEAL
      gsap.from(".footer-reveal", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // LINKS STAGGER
      gsap.from(".footer-link", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-links",
          start: "top 85%",
          once: true,
        },
      });

      // ORB FLOAT
      gsap.to(".footer-orb", {
        y: -45,
        x: 25,
        scale: 1.12,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ORB ROTATION
      gsap.to(".footer-orb-inner", {
        rotation: 360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      // =========================================
      // PREMIUM MAGNETIC BUTTON
      // =========================================

      const button = buttonRef.current;
      const glow = buttonGlowRef.current;

      if (button) {
        const moveButton = (e) => {
          const rect = button.getBoundingClientRect();

          const x =
            e.clientX - (rect.left + rect.width / 2);

          const y =
            e.clientY - (rect.top + rect.height / 2);

          // Magnetic movement
          gsap.to(button, {
            x: x * 0.22,
            y: y * 0.22,
            scale: 1.04,
            duration: 0.45,
            ease: "power3.out",
          });

          // Glow follows movement
          if (glow) {
            gsap.to(glow, {
              x: x * 0.1,
              y: y * 0.1,
              opacity: 1,
              scale: 1.2,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        };

        const enterButton = () => {
          gsap.to(button, {
            scale: 1.06,
            duration: 0.4,
            ease: "back.out(1.7)",
          });

          if (glow) {
            gsap.to(glow, {
              opacity: 1,
              scale: 1.25,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        };

        const resetButton = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "elastic.out(1, 0.45)",
          });

          if (glow) {
            gsap.to(glow, {
              x: 0,
              y: 0,
              opacity: 0,
              scale: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          }
        };

        button.addEventListener("mousemove", moveButton);
        button.addEventListener("mouseenter", enterButton);
        button.addEventListener("mouseleave", resetButton);

        return () => {
          button.removeEventListener("mousemove", moveButton);
          button.removeEventListener("mouseenter", enterButton);
          button.removeEventListener("mouseleave", resetButton);
        };
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#080808] px-6 pb-8 pt-24 text-white md:px-10 md:pt-32 lg:px-16"
    >
      {/* BACKGROUND GRID */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* LARGE GLOW */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-300/[0.07] blur-[130px]" />

      {/* ANIMATED ORB */}
      <div className="footer-orb pointer-events-none absolute right-[-120px] top-[-100px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-lime-300/10 via-cyan-300/10 to-violet-400/10 blur-3xl">
        <div className="footer-orb-inner absolute inset-10 rounded-full border border-lime-300/10" />

        <div className="absolute inset-20 rounded-full border border-cyan-300/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* TOP LABEL */}
        <div className="footer-reveal mb-8 flex items-center gap-4">
          <span className="h-px w-10 bg-gradient-to-r from-lime-300 to-cyan-300" />

          <span className="text-[10px] font-medium uppercase tracking-[0.45em] text-lime-300">
            Let's create
          </span>
        </div>

        {/* BIG CTA */}
        <div className="footer-reveal max-w-6xl">
          <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            <span className="block text-white">
              Have an idea?
            </span>

            <span className="block bg-gradient-to-r from-lime-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              Let's build it.
            </span>
          </h2>
        </div>

        {/* CTA BUTTON */}
        <div className="footer-reveal relative mt-12 md:mt-14">
          
          {/* BUTTON GLOW */}
          <div
            ref={buttonGlowRef}
            className="pointer-events-none absolute left-0 top-1/2 h-24 w-56 -translate-y-1/2 rounded-full bg-lime-300/20 opacity-0 blur-3xl"
          />

          <a
            ref={buttonRef}
            href="/#contact"
            className="group relative inline-flex items-center gap-5 overflow-hidden rounded-full border border-lime-300/30 bg-lime-300 px-7 py-4 text-sm font-medium text-black will-change-transform md:px-8 md:py-5"
          >
            {/* SHINE */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

            <span className="relative z-10">
              Start a conversation
            </span>

            <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-lime-300 transition-all duration-500 group-hover:rotate-45 group-hover:scale-110">
              ↗
            </span>
          </a>
        </div>

        {/* DIVIDER */}
        <div className="footer-reveal mt-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:mt-32" />

        {/* FOOTER CONTENT */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* BRAND */}
          <div className="footer-reveal lg:col-span-2">
            <Link
              to="/"
              className="group inline-block"
            >
              <span className="text-3xl font-semibold tracking-[-0.04em]">
                ITZFIZZ
                <span className="text-lime-300">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/35">
              Creating modern digital experiences through design,
              technology and thoughtful development.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                Available for new projects
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="footer-links">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/25">
              Navigation
            </p>

            <div className="flex flex-col items-start gap-4">

              <a
                href="/"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-lime-300"
              >
                Home
              </a>

              <a
                href="/#services"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-lime-300"
              >
                Services
              </a>

              <a
                href="/#about"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-lime-300"
              >
                About
              </a>

              <a
                href="/#contact"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-lime-300"
              >
                Contact
              </a>

            </div>
          </div>

          {/* SERVICES */}
          <div className="footer-links">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/25">
              Services
            </p>

            <div className="flex flex-col items-start gap-4">

              <Link
                to="/services/web-development"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                Web Development
              </Link>

              <Link
                to="/services/mern-stack-development"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                MERN Stack
              </Link>

              <Link
                to="/services/ui-ux-design"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                UI / UX Design
              </Link>

              <Link
                to="/services/shopify-development"
                className="footer-link text-sm text-white/55 transition-colors duration-300 hover:text-cyan-300"
              >
                Shopify Development
              </Link>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-reveal flex flex-col gap-5 border-t border-white/[0.08] pt-7 md:flex-row md:items-center md:justify-between">

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
            © 2026 Itzfizz Digital. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
            >
              Instagram
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white"
            >
              GitHub
            </a>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

