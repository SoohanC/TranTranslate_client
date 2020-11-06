import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const Earth = () => {
  const mount = useRef(null);
  const [isAnimating, setAnimating] = useState(true);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00a8ff);
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(500, 500);
    const geometry = new THREE.SphereGeometry(12, 12, 12);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const sphere = new THREE.Mesh(geometry, wireframe);
    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.color = new THREE.Color(0xffffff);
    line.material.transparent = false;
    scene.add(line);
    camera.position.z = 35;
    renderer.setClearColor("#000000");
    renderer.setSize(500, 500);

    const renderScene = () => {
        requestAnimationFrame(renderScene);
        line.rotation.x += 0.0;
        line.rotation.y -= 0.02;
        sphere.rotation.x += 0.0;
        sphere.rotation.y += 0.02;
        renderer.render(scene, camera);
    };
    renderScene();

    mount.current.appendChild(renderer.domElement);

    return () => {
    };
  }, []);

  return (
    <div
      className="vis"
      ref={mount}
      onClick={() => setAnimating(!isAnimating)}
    />
  );
};

export default Earth;
