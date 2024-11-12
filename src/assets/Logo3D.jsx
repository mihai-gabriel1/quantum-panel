import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Logo3D = () => {
    const mountRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(200, 200);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Create cube
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const material = new THREE.MeshPhongMaterial({
            color: 0x4f46e5,
            specular: 0x4f46e5,
            shininess: 100,
            transparent: true,
            opacity: 0.9,
        });

        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // Add lights
        const light1 = new THREE.DirectionalLight(0xffffff, 1);
        light1.position.set(0, 1, 1);
        scene.add(light1);

        const light2 = new THREE.DirectionalLight(0x4f46e5, 0.5);
        light2.position.set(-1, -1, -1);
        scene.add(light2);

        camera.position.z = 5;

        // Animation
        const animate = () => {
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationRef.current);
            mountRef.current.removeChild(renderer.domElement);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="w-[200px] h-[200px] cursor-pointer hover:scale-105 transition-transform"
            role="img"
            aria-label="3D Logo"
        />
    );
};

export default Logo3D;