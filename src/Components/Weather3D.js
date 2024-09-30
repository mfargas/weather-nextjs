import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Weather3D = ({ weatherCondition }) => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!weatherCondition) return;  // Prevent rendering until weatherCondition is available

        // Set up the scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Append the renderer to the DOM
        mountRef.current.appendChild(renderer.domElement);

        // Create a light source
        const light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.set(0, 10, 10);
        scene.add(light);

        // Add a basic 3D weather icon based on the weatherCondition
        let iconGeometry;
        let iconMaterial = new THREE.MeshStandardMaterial({ color: 0xffff00 }); // Default color is yellow (for sun)

        if (weatherCondition === "Clear") {
            iconGeometry = new THREE.SphereGeometry(1, 32, 32); // Sun shape
        } else if (weatherCondition === "Clouds") {
            iconGeometry = new THREE.BoxGeometry(1, 1, 1); // A simple box for clouds
            iconMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
        } else if (weatherCondition === "Rain") {
            iconGeometry = new THREE.ConeGeometry(0.5, 1, 32); // A cone shape for raindrops
            iconMaterial = new THREE.MeshStandardMaterial({ color: 0x0000ff }); // Blue for rain
        }

        if (!iconGeometry) {
            iconGeometry = new THREE.SphereGeometry(1, 32, 32); // Default to sphere if condition doesn't match
        }

        const iconMesh = new THREE.Mesh(iconGeometry, iconMaterial);
        scene.add(iconMesh);

        // Position the camera
        camera.position.z = 5;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            iconMesh.rotation.x += 0.01; // Simple rotation animation
            iconMesh.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resize
        window.addEventListener("resize", () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        // Clean up on component unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
        };
    }, [weatherCondition]);

    return <div ref={mountRef} />;
};

export default Weather3D;