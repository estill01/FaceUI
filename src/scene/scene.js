// Create the scene and camera
import * as THREE from 'three';

export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer();

// Default configuration
scene.background = new THREE.Color(0x000000);
camera.position.z = 5;
renderer.setSize(window.innerWidth, window.innerHeight);

