import { useEffect, useRef } from "react";

export function Hero3D() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    let frame = 0; let cleanup: (() => void) | null = null;
    (async () => {
      try {
        const THREE = await import("three");
        const canvas = ref.current!;
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
        camera.position.z = 14;

        const group = new THREE.Group();
        const geos = [
          new THREE.DodecahedronGeometry(0.35),
          new THREE.OctahedronGeometry(0.4),
          new THREE.TetrahedronGeometry(0.45),
        ];
        const mat = new THREE.MeshStandardMaterial({ color: 0xC4922A, emissive: 0x8B1E1E, metalness: 0.95, roughness: 0.1 });
        const meshes: any[] = [];
        for (let i = 0; i < 70; i++) {
          const m = new THREE.Mesh(geos[i % 3], mat.clone());
          m.position.set((Math.random() - 0.5) * 22, (Math.random() - 0.5) * 18, (Math.random() - 0.5) * 12);
          (m as any).speed = 0.0015 + Math.random() * 0.003;
          (m as any).rot = { x: Math.random() * 0.01, y: Math.random() * 0.01 };
          meshes.push(m); group.add(m);
        }
        scene.add(group);
        scene.add(new THREE.AmbientLight(0x3D1A0A, 0.6));
        const pl = new THREE.PointLight(0xC4922A, 2.0, 50); pl.position.set(0, 0, 8); scene.add(pl);

        let mx = 0, my = 0;
        const onMove = (e: MouseEvent) => { mx = (e.clientX / window.innerWidth) * 2 - 1; my = -(e.clientY / window.innerHeight) * 2 + 1; };
        window.addEventListener("mousemove", onMove);

        const resize = () => {
          const w = canvas.parentElement!.clientWidth, h = canvas.parentElement!.clientHeight;
          renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
        };
        resize();
        window.addEventListener("resize", resize);

        const animate = (t: number) => {
          frame = requestAnimationFrame(animate);
          group.rotation.y += (mx * 0.15 - group.rotation.y) * 0.04;
          group.rotation.x += (my * 0.1 - group.rotation.x) * 0.04;
          meshes.forEach((m, i) => {
            m.position.y += m.speed; if (m.position.y > 9) m.position.y = -9;
            m.rotation.x += m.rot.x; m.rotation.y += m.rot.y;
            (m.material as any).opacity = 0.7 + 0.3 * Math.sin(t * 0.001 + i);
            (m.material as any).transparent = true;
          });
          renderer.render(scene, camera);
        };
        animate(0);
        cleanup = () => {
          cancelAnimationFrame(frame);
          window.removeEventListener("mousemove", onMove);
          window.removeEventListener("resize", resize);
          renderer.dispose();
          meshes.forEach((m) => { m.geometry.dispose?.(); m.material.dispose?.(); });
        };
      } catch {}
    })();
    return () => { if (cleanup) cleanup(); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6, zIndex: 1 }} aria-hidden="true" />;
}
