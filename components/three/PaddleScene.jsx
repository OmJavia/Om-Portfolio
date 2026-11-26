import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Stylised, procedural paddle — an illustration of the product category, not a replica of Pickl+.
// Units are arbitrary; total length ≈ 4.

const FACE_W = 1.9;
const FACE_H = 2.3;
const FACE_Y = 0.75; // face centre

function roundedFace(w, h, r) {
  const s = new THREE.Shape();
  const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y);
  s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

function faceTexture() {
  const c = document.createElement("canvas");
  c.width = 512;
  c.height = 620;
  const g = c.getContext("2d");
  const grad = g.createLinearGradient(0, 0, 512, 620);
  grad.addColorStop(0, "#4F5EEB");
  grad.addColorStop(1, "#2B33A8");
  g.fillStyle = grad;
  g.fillRect(0, 0, 512, 620);
  // fine surface texture
  g.globalAlpha = 0.07;
  g.strokeStyle = "#fff";
  for (let i = -620; i < 512; i += 7) {
    g.beginPath(); g.moveTo(i, 0); g.lineTo(i + 620, 620); g.stroke();
  }
  g.globalAlpha = 1;
  // sweet-spot rings
  g.lineWidth = 6;
  g.strokeStyle = "#C8E879";
  g.beginPath(); g.arc(256, 280, 96, 0, Math.PI * 2); g.stroke();
  g.lineWidth = 2;
  g.globalAlpha = 0.6;
  g.beginPath(); g.arc(256, 280, 140, 0, Math.PI * 2); g.stroke();
  g.globalAlpha = 1;
  // signal arcs
  g.strokeStyle = "#22B8A8";
  g.lineWidth = 5;
  for (let i = 0; i < 3; i++) {
    g.beginPath(); g.arc(256, 560, 60 + i * 34, Math.PI * 1.2, Math.PI * 1.8); g.stroke();
  }
  g.fillStyle = "#FF826E";
  g.beginPath(); g.arc(256, 280, 14, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  // Extrude caps use shape coordinates as UVs; remap [-w/2, w/2] → [0, 1].
  t.repeat.set(1 / FACE_W, 1 / FACE_H);
  t.offset.set(0.5, 0.5);
  return t;
}

function gripTexture() {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 256;
  const g = c.getContext("2d");
  g.fillStyle = "#1B1F27";
  g.fillRect(0, 0, 64, 256);
  g.strokeStyle = "#2C323D";
  g.lineWidth = 6;
  for (let i = -64; i < 256 + 64; i += 22) {
    g.beginPath(); g.moveTo(0, i); g.lineTo(64, i + 40); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 2);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function Paddle({ progressRef, dragRef, pointerRef, animate }) {
  const group = useRef();
  const ring = useRef();
  const invalidate = useThree((s) => s.invalidate);

  const parts = useMemo(() => {
    const face = new THREE.ExtrudeGeometry(roundedFace(FACE_W, FACE_H, 0.55), {
      depth: 0.12, bevelEnabled: true, bevelThickness: 0.035, bevelSize: 0.035, bevelSegments: 4, curveSegments: 24,
    });
    face.translate(0, 0, -0.06);
    return {
      face,
      faceMats: [
        new THREE.MeshPhysicalMaterial({ map: faceTexture(), roughness: 0.42, clearcoat: 0.6, clearcoatRoughness: 0.35 }),
        new THREE.MeshStandardMaterial({ color: "#15171C", roughness: 0.55, metalness: 0.2 }),
      ],
      handle: new THREE.CylinderGeometry(0.17, 0.15, 1.35, 32),
      grip: new THREE.MeshStandardMaterial({ map: gripTexture(), roughness: 0.9 }),
      throat: new THREE.CylinderGeometry(0.2, 0.17, 0.3, 32),
      dark: new THREE.MeshStandardMaterial({ color: "#15171C", roughness: 0.45, metalness: 0.35 }),
      module: new THREE.CylinderGeometry(0.21, 0.21, 0.26, 32),
      moduleMat: new THREE.MeshStandardMaterial({ color: "#E9EBEE", roughness: 0.3, metalness: 0.4 }),
      band: new THREE.TorusGeometry(0.212, 0.018, 12, 48),
      teal: new THREE.MeshStandardMaterial({ color: "#22B8A8", emissive: "#22B8A8", emissiveIntensity: 0.6 }),
      signal: new THREE.TorusGeometry(0.42, 0.008, 8, 64),
      signalMat: new THREE.MeshBasicMaterial({ color: "#22B8A8", transparent: true, opacity: 0 }),
    };
  }, []);

  useEffect(
    () => () => {
      Object.values(parts).flat().forEach((p) => {
        p.map?.dispose?.();
        p.dispose?.();
      });
    },
    [parts]
  );

  // Demand mode (reduced motion / mobile) renders only when scroll or drag changes the pose.
  useEffect(() => {
    if (animate) return;
    const nudge = () => invalidate(); // invalidate(state) would misread the Event argument
    window.addEventListener("scroll", nudge, { passive: true });
    window.addEventListener("pointermove", nudge, { passive: true });
    return () => {
      window.removeEventListener("scroll", nudge);
      window.removeEventListener("pointermove", nudge);
    };
  }, [animate, invalidate]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    const p = progressRef.current; // 0 → face, 1 → handle + sensor module revealed
    const drag = dragRef.current;
    const ptr = pointerRef.current;
    if (!drag.active) drag.x *= 0.96; // drag eases back to the story pose
    const targetY = p * Math.PI * 0.85 + drag.x + (animate ? Math.sin(t * 0.35) * 0.35 : 0) + ptr.x * 0.25;
    const targetX = -0.15 + p * 0.55 + ptr.y * 0.15;
    const k = 1 - Math.pow(0.002, delta);
    g.rotation.y += (targetY - g.rotation.y) * k;
    g.rotation.x += (targetX - g.rotation.x) * k;
    g.rotation.z = 0.22 - p * 0.3;
    g.position.y = 0.17 + (animate ? Math.sin(t * 0.9) * 0.06 : 0) + p * 0.2; // 0.17 centres face + handle
    if (ring.current) {
      const pulse = (t * 0.8) % 1;
      ring.current.scale.setScalar(1 + pulse * 1.6);
      ring.current.material.opacity = Math.min(1, p * 2) * (1 - pulse) * 0.8;
    }
    if (!animate && (Math.abs(targetY - g.rotation.y) > 0.001 || drag.x !== 0)) invalidate();
  });

  return (
    <group ref={group}>
      <mesh geometry={parts.face} material={parts.faceMats} position={[0, FACE_Y, 0]} />
      <mesh geometry={parts.throat} material={parts.dark} position={[0, FACE_Y - FACE_H / 2 - 0.1, 0]} />
      <mesh geometry={parts.handle} material={parts.grip} position={[0, FACE_Y - FACE_H / 2 - 0.9, 0]} />
      <group position={[0, FACE_Y - FACE_H / 2 - 1.7, 0]}>
        <mesh geometry={parts.module} material={parts.moduleMat} />
        <mesh geometry={parts.band} material={parts.teal} rotation={[Math.PI / 2, 0, 0]} position={[0, 0.06, 0]} />
        <mesh ref={ring} geometry={parts.signal} material={parts.signalMat} rotation={[Math.PI / 2, 0, 0]} />
      </group>
    </group>
  );
}

export default function PaddleScene({ progressRef, dragRef, pointerRef, animate, frameloop, dpr }) {
  return (
    <Canvas
      frameloop={frameloop}
      dpr={dpr}
      camera={{ position: [0, 0, 7.8], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} color="#FFF4E8" />
      <directionalLight position={[-4, 1, -3]} intensity={1.6} color="#4F5EEB" />
      <pointLight position={[0, -3, 2]} intensity={6} color="#22B8A8" distance={8} />
      <Paddle progressRef={progressRef} dragRef={dragRef} pointerRef={pointerRef} animate={animate} />
    </Canvas>
  );
}
