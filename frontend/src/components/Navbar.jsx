
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const menuItemsRef = useRef([]);
  const menuMetaRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const overlay = overlayRef.current;

    if (!menu || !overlay) return;

    // Desktop par mobile menu animation run nahi karni
    if (window.innerWidth >= 768) {
      gsap.set(menu, { xPercent: -100 });
      gsap.set(overlay, {
        opacity: 0,
        pointerEvents: "none",
      });

      return;
    }

    const tl = gsap.timeline();

    if (menuOpen) {
      document.body.style.overflow = "hidden";

      // Initial state
      gsap.set(menu, {
        xPercent: -100,
      });

      gsap.set(overlay, {
        opacity: 0,
        pointerEvents: "auto",
      });

      gsap.set(menuItemsRef.current, {
        y: 35,
        opacity: 0,
      });

      gsap.set(menuMetaRef.current, {
        y: 20,
        opacity: 0,
      });

      // MENU OPEN
      tl.to(menu, {
        xPercent: 0,
        duration: 0.8,
        ease: "power4.out",
      })
        .to(
          overlay,
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          menuItemsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.09,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .to(
          menuMetaRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: "power3.out",
          },
          "-=0.35"
        );
    } else {
      document.body.style.overflow = "";

      // MENU CLOSE
      tl.to(menuItemsRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        stagger: 0.04,
        ease: "power2.in",
      })
        .to(
          menuMetaRef.current,
          {
            y: 10,
            opacity: 0,
            duration: 0.25,
            ease: "power2.in",
          },
          "<"
        )
        .to(
          overlay,
          {
            opacity: 0,
            duration: 0.35,
            ease: "power2.out",
          },
          "-=0.1"
        )
        .to(
          menu,
          {
            xPercent: -100,
            duration: 0.65,
            ease: "power4.inOut",
          },
          "<"
        )
        .set(overlay, {
          pointerEvents: "none",
        });
    }

    return () => {
      tl.kill();
    };
  }, [menuOpen]);

  // Escape key se menu close
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (target) => {
    closeMenu();

    // Mobile menu close hone ke baad scroll
    setTimeout(() => {
      const element = document.querySelector(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 650);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="absolute left-0 top-0 z-50 w-full px-6 py-6 md:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => handleNavClick("#home")}
            className="relative z-[70] text-xl font-bold tracking-[0.25em] text-white"
          >
            ITZFIZZ
          </button>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-10 text-sm text-white/70 md:flex">
            <a
              href="#home"
              className="transition-colors duration-300 hover:text-white"
            >
              Home
            </a>

            <a
              href="#services"
              className="transition-colors duration-300 hover:text-white"
            >
              Services
            </a>

            <a
              href="#about"
              className="transition-colors duration-300 hover:text-white"
            >
              About
            </a>
          </div>

          {/* DESKTOP CONTACT */}
          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-all duration-300 hover:bg-white hover:text-black md:block"
          >
            Let's Talk
          </button>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="relative z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#0a0a0a]/80 text-white backdrop-blur-md transition-all duration-300 hover:border-lime-300 hover:bg-lime-300 hover:text-black md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">

              {/* TOP LINE */}
              <span
                className={`h-px w-full origin-center bg-current transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-[7px] rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />

              {/* MIDDLE LINE */}
              <span
                className={`h-px w-full bg-current transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              {/* BOTTOM LINE */}
              <span
                className={`h-px w-full origin-center bg-current transition-all duration-500 ${
                  menuOpen
                    ? "-translate-y-[7px] -rotate-45"
                    : "translate-y-0 rotate-0"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        ref={overlayRef}
        onClick={closeMenu}
        className="pointer-events-none fixed inset-0 z-[55] bg-black/70 opacity-0 backdrop-blur-sm"
      />

      {/* ================= MOBILE SIDE MENU ================= */}
      <aside
        ref={menuRef}
        className="fixed left-0 top-0 z-[60] flex h-[100svh] w-[88%] max-w-[430px] flex-col justify-between overflow-hidden border-r border-white/10 bg-[#0a0a0a] px-7 pb-8 pt-28 shadow-[30px_0_100px_rgba(0,0,0,0.6)] sm:px-10 md:hidden"
      >

        {/* ================= BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">

          {/* Lime glow */}
          <div className="absolute -left-32 top-[20%] h-72 w-72 rounded-full bg-lime-300/[0.08] blur-[100px]" />

          {/* White glow */}
          <div className="absolute -bottom-32 right-[-80px] h-80 w-80 rounded-full bg-white/[0.025] blur-[100px]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* ================= MENU CONTENT ================= */}
        <div className="relative z-10">

          <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-lime-300">
            Navigation
          </p>

          <div className="flex flex-col">

            {/* HOME */}
            <button
              ref={(el) => {
                menuItemsRef.current[0] = el;
              }}
              onClick={() => handleNavClick("#home")}
              className="group flex items-center justify-between border-t border-white/10 py-5 text-left"
            >
              <span className="text-4xl font-medium tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-5xl">
                Home
              </span>

              <span className="text-xs text-white/20 transition-all duration-300 group-hover:text-lime-300">
                01
              </span>
            </button>

            {/* SERVICES */}
            <button
              ref={(el) => {
                menuItemsRef.current[1] = el;
              }}
              onClick={() => handleNavClick("#services")}
              className="group flex items-center justify-between border-t border-white/10 py-5 text-left"
            >
              <span className="text-4xl font-medium tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-5xl">
                Services
              </span>

              <span className="text-xs text-white/20 transition-all duration-300 group-hover:text-lime-300">
                02
              </span>
            </button>

            {/* ABOUT */}
            <button
              ref={(el) => {
                menuItemsRef.current[2] = el;
              }}
              onClick={() => handleNavClick("#about")}
              className="group flex items-center justify-between border-t border-white/10 py-5 text-left"
            >
              <span className="text-4xl font-medium tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-5xl">
                About
              </span>

              <span className="text-xs text-white/20 transition-all duration-300 group-hover:text-lime-300">
                03
              </span>
            </button>

            {/* CONTACT */}
            <button
              ref={(el) => {
                menuItemsRef.current[3] = el;
              }}
              onClick={() => handleNavClick("#contact")}
              className="group flex items-center justify-between border-b border-t border-white/10 py-5 text-left"
            >
              <span className="text-4xl font-medium tracking-tight text-white/80 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white sm:text-5xl">
                Contact
              </span>

              <span className="text-xs text-white/20 transition-all duration-300 group-hover:text-lime-300">
                04
              </span>
            </button>

          </div>
        </div>

        {/* ================= MENU FOOTER ================= */}
        <div
          ref={menuMetaRef}
          className="relative z-10 border-t border-white/10 pt-6"
        >
          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/25">
                Digital Experiences
              </p>

              <p className="mt-2 text-sm text-white/40">
                Think bold. Build meaningful.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.8)]" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                Online
              </span>
            </div>

          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

