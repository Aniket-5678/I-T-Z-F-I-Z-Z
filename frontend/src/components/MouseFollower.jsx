
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const characterRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const mouthRef = useRef(null);

  useEffect(() => {
    const character = characterRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;
    const mouth = mouthRef.current;

    if (!character || !leftEye || !rightEye || !mouth) return;

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const current = {
      x: pointer.x,
      y: pointer.y,
    };

    let isTouching = false;

    // --------------------------------
    // DESKTOP MOUSE
    // --------------------------------

    const moveMouse = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;

      gsap.to(character, {
        opacity: 1,
        duration: 0.3,
      });
    };

    // --------------------------------
    // MOBILE TOUCH
    // --------------------------------

    const startTouch = (e) => {
      if (!e.touches || !e.touches[0]) return;

      isTouching = true;

      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;

      gsap.to(character, {
        opacity: 1,
        scale: 1,
        duration: 0.35,
        ease: "back.out(1.7)",
      });
    };

    const moveTouch = (e) => {
      if (!e.touches || !e.touches[0]) return;

      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;
    };

    const endTouch = () => {
      isTouching = false;

      gsap.to(character, {
        opacity: 0.35,
        scale: 0.85,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveMouse);

    window.addEventListener("touchstart", startTouch, {
      passive: true,
    });

    window.addEventListener("touchmove", moveTouch, {
      passive: true,
    });

    window.addEventListener("touchend", endTouch);

    // --------------------------------
    // SMOOTH ANIMATION LOOP
    // --------------------------------

    let animationFrame;

    const animate = () => {
      // Smooth follow
      current.x += (pointer.x - current.x) * 0.12;
      current.y += (pointer.y - current.y) * 0.12;

      gsap.set(character, {
        x: current.x,
        y: current.y,
      });

      // Direction
      const dx = pointer.x - current.x;
      const dy = pointer.y - current.y;

      const distance = Math.min(
        Math.sqrt(dx * dx + dy * dy),
        100
      );

      // --------------------------------
      // EYES FOLLOW POINTER
      // --------------------------------

      const eyeX = Math.max(
        -4,
        Math.min(4, dx * 0.035)
      );

      const eyeY = Math.max(
        -4,
        Math.min(4, dy * 0.035)
      );

      gsap.set(leftEye, {
        x: eyeX,
        y: eyeY,
      });

      gsap.set(rightEye, {
        x: eyeX,
        y: eyeY,
      });

      // --------------------------------
      // MOUTH REACTION
      // --------------------------------

      const mouthScale = 1 + distance * 0.002;

      gsap.set(mouth, {
        scaleX: mouthScale,
      });

      // --------------------------------
      // JELLY STRETCH
      // --------------------------------

      const stretchX = 1 + distance * 0.0007;
      const stretchY = 1 - distance * 0.00035;

      gsap.set(character, {
        scaleX: stretchX,
        scaleY: stretchY,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    // --------------------------------
    // FLOATING
    // --------------------------------

    const floating = gsap.to(character, {
      y: "+=7",
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // --------------------------------
    // INITIAL STATE
    // --------------------------------

    gsap.set(character, {
      opacity: 0,
      scale: 0.8,
    });

    // --------------------------------
    // CLEANUP
    // --------------------------------

    return () => {
      window.removeEventListener("mousemove", moveMouse);

      window.removeEventListener(
        "touchstart",
        startTouch
      );

      window.removeEventListener(
        "touchmove",
        moveTouch
      );

      window.removeEventListener(
        "touchend",
        endTouch
      );

      cancelAnimationFrame(animationFrame);

      floating.kill();
    };
  }, []);

  return (
    <div
      ref={characterRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "70px",
        height: "70px",
      }}
    >
      {/* OUTER GLOW */}
      <div className="absolute inset-[-18px] rounded-full bg-lime-300/10 blur-2xl" />

      {/* CHARACTER */}
      <div className="relative flex h-full w-full items-center justify-center rounded-[45%_55%_50%_50%] border border-lime-200/40 bg-gradient-to-br from-lime-300 via-emerald-300 to-cyan-300 shadow-[0_0_35px_rgba(163,230,53,0.3)]">

        {/* LEFT EYE */}
        <div
          ref={leftEyeRef}
          className="absolute left-[18px] top-[20px] h-[14px] w-[14px] rounded-full bg-black"
        >
          <span className="absolute left-[4px] top-[3px] h-[4px] w-[4px] rounded-full bg-white" />
        </div>

        {/* RIGHT EYE */}
        <div
          ref={rightEyeRef}
          className="absolute right-[18px] top-[20px] h-[14px] w-[14px] rounded-full bg-black"
        >
          <span className="absolute left-[4px] top-[3px] h-[4px] w-[4px] rounded-full bg-white" />
        </div>

        {/* MOUTH */}
        <div
          ref={mouthRef}
          className="absolute bottom-[16px] left-1/2 h-[8px] w-[20px] -translate-x-1/2 rounded-full bg-black"
        />

        {/* LEFT CHEEK */}
        <div className="absolute left-[8px] top-[39px] h-[7px] w-[10px] rounded-full bg-pink-400/40 blur-[2px]" />

        {/* RIGHT CHEEK */}
        <div className="absolute right-[8px] top-[39px] h-[7px] w-[10px] rounded-full bg-pink-400/40 blur-[2px]" />
      </div>

      {/* ANTENNA */}
      <div className="absolute -top-5 left-1/2 h-5 w-px -translate-x-1/2 bg-lime-300/60" />

      <div className="absolute -top-7 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-lime-300 shadow-[0_0_15px_rgba(163,230,53,0.9)]" />
    </div>
  );
};

export default MouseFollower;

