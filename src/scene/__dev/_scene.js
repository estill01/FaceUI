// Create the scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;












const lipModel = createLipModel(lipParameters);
scene.add(lipModel);


// Create the WebGLRendererk
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);G



const lips = createLips(lipParameters);

// Add lips and philtrum to the scene
scene.add(lips.upperLip);
scene.add(lips.philtrum);
scene.add(lips.lowerLip);

// Animation loop
function animate() {
requestAnimationFrame(animate);

// Rotate the lips and philtrum
lips.upperLip.rotation.y += 0.01;
lips.philtrum.rotation.y += 0.01;
lips.lowerLip.rotation.y += 0.01;

renderer.render(scene, camera);
}

animate();
