import { Component, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

// Three.js stays out of the initial bundle; it loads after hydration, client-only.
const PaddleScene = dynamic(() => import("./PaddleScene"), { ssr: false, loading: () => null });

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

class SceneBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function Fallback() {
  return (
    <div className="absolute inset-[12%] overflow-hidden rounded-[28px] border border-line bg-white shadow-xl">
      <Image src="/Pickle.jpeg" alt="MegaShot Pickl+ smart paddle" fill sizes="(max-width: 1024px) 80vw, 480px" className="object-cover" priority />
    </div>
  );
}

export default function PaddleStage({ className = "relative" }) {
  const wrap = useRef(null);
  const progressRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0, startX: 0, base: 0 });
  const pointerRef = useRef({ x: 0, y: 0 });
  const [mode, setMode] = useState("pending"); // pending | webgl | fallback
  const [visible, setVisible] = useState(false);
  const [env, setEnv] = useState({ reduced: false, mobile: false });

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    setEnv({ reduced, mobile });
    setMode(hasWebGL() ? "webgl" : "fallback");

    const el = wrap.current;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);

    // Scroll drives the story pose: face (at top) → handle and sensor module.
    const onScroll = () => {
      if (window.scrollY < 20) {
        progressRef.current = 0;
        return;
      }
      const r = el.getBoundingClientRect();
      progressRef.current = Math.min(1, Math.max(0, (80 - r.top) / (r.height * 0.65)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const animate = !env.reduced && !env.mobile;
  // Off-screen: stop rendering. Reduced motion / mobile: render only on change.
  const frameloop = !visible ? "never" : animate ? "always" : "demand";

  const onPointerDown = (e) => {
    dragRef.current = { ...dragRef.current, active: true, startX: e.clientX, base: dragRef.current.x };
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (d.active) d.x = d.base + (e.clientX - d.startX) * 0.012;
    else if (animate) {
      const r = e.currentTarget.getBoundingClientRect();
      pointerRef.current = { x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 };
    }
  };
  const endDrag = () => { dragRef.current.active = false; };

  return (
    <figure ref={wrap} className={className}>
      <div aria-hidden className="absolute inset-x-[18%] bottom-[4%] h-8 rounded-[50%] bg-ink/20 blur-2xl" />
      {mode === "fallback" && <Fallback />}
      {mode === "webgl" && (
        <div
          className="absolute inset-0 cursor-grab touch-pan-y active:cursor-grabbing"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={() => { pointerRef.current = { x: 0, y: 0 }; }}
        >
          <SceneBoundary fallback={<Fallback />}>
            <PaddleScene
              progressRef={progressRef}
              dragRef={dragRef}
              pointerRef={pointerRef}
              animate={animate}
              frameloop={frameloop}
              dpr={env.mobile ? [1, 1.5] : [1, 1.75]}
            />
          </SceneBoundary>
        </div>
      )}
      <figcaption className="sr-only">
        Interactive, stylised 3D illustration of a smart pickleball paddle: a blue paddle face, a wrapped handle and a sensor
        module at the base of the handle. Scrolling rotates it to show the handle and sensor module. It illustrates the
        product category of MegaShot Pickl+ and is not an exact replica.
      </figcaption>
    </figure>
  );
}
