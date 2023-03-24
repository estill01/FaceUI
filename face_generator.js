// Import necessary THREE.js components
import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


function createEyeWithLids(options) {
  const eyeGroup = new THREE.Group();

  // Create the eye
  const eyeGeometry = new THREE.SphereGeometry(options.eyeSize, 16, 16);
  const eyeMaterial = new THREE.MeshPhongMaterial({ color: options.eyeColor });
  const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  eyeGroup.add(eye);

  // Create iris using CylinderGeometry
  const irisGeometry = new THREE.CylinderGeometry(options.irisSize, options.irisSize, options.irisDepth, 32);
  const irisMaterial = new THREE.MeshPhongMaterial({ color: options.irisColor });
  const iris = new THREE.Mesh(irisGeometry, irisMaterial);
  iris.position.z = options.eyeSize - options.irisDepth / 2;
  iris.rotation.x = Math.PI / 2;
  eyeGroup.add(iris);

  // Create pupil using CylinderGeometry
  const pupilGeometry = new THREE.CylinderGeometry(options.pupilSize, options.pupilSize, options.pupilDepth, 32);
  const pupilMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
  const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
  pupil.position.z = options.eyeSize - options.pupilDepth;
  pupil.rotation.x = Math.PI / 2;
  eyeGroup.add(pupil);

  // Create eyelids using ShapeGeometry
  const eyelidShape = new THREE.Shape();
  eyelidShape.absarc(0, 0, options.eyeSize, 0, Math.PI, true);
  const eyelidGeometry = new THREE.ShapeGeometry(eyelidShape);
  const eyelidMaterial = new THREE.MeshPhongMaterial({ color: options.headColor, side: THREE.DoubleSide });

  // Create upper and lower eyelids and position them
  const upperEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
  upperEyelid.position.set(0, options.eyeSize / 2, options.eyeSize - 0.01);
  upperEyelid.rotation.x = Math.PI;
  eyeGroup.add(upperEyelid);

  const lowerEyelid = new THREE.Mesh(eyelidGeometry, eyelidMaterial);
  lowerEyelid.position.set(0, -options.eyeSize / 2, options.eyeSize - 0.01);
  eyeGroup.add(lowerEyelid);

  // Create orbicularis oculi muscle structure using ShapeGeometry
  const muscleShape = new THREE.Shape();
  muscleShape.absarc(0, 0, options.eyeSize * 1.2, 0, Math.PI * 2, true);
  const muscleGeometry = new THREE.ShapeGeometry(muscleShape);
  const muscleMaterial = new THREE.MeshPhongMaterial({ color: options.headColor, side: THREE.DoubleSide, transparent: true, opacity: 0.5 });
  const muscle = new THREE.Mesh(muscleGeometry, muscleMaterial);
  muscle.position.z = options.eyeSize - 0.01;
  eyeGroup.add(muscle);

  return eyeGroup;
}



// Function to create a generic 3D human face model
function createFaceModel(options) {
  // Create a new Group to hold all the face components
  const faceGroup = new THREE.Group();

  // Create the head using a SphereGeometry
  const headGeometry = new THREE.SphereGeometry(options.headSize, 32, 32);
  const headMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const head = new THREE.Mesh(headGeometry, headMaterial);
  faceGroup.add(head);

  // Create left and right eyes with eyelids and position them
  const leftEye = createEyeWithLids(options);
  leftEye.position.set(options.eyeSeparation / 2, options.eyeHeight, options.headSize - options.eyeSize);
  faceGroup.add(leftEye);

  const rightEye = createEyeWithLids(options);
  rightEye.position.set(-options.eyeSeparation / 2, options.eyeHeight, options.headSize - options.eyeSize);
  faceGroup.add(rightEye);

 
  // Create the nose using CylinderGeometry
  const noseGeometry = new THREE.CylinderGeometry(options.noseWidth, options.noseWidth, options.noseHeight, 16);
  const noseMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const nose = new THREE.Mesh(noseGeometry, noseMaterial);
  nose.position.set(0, -options.noseHeight / 2, options.headSize - options.noseHeight / 2);
  nose.rotation.set(Math.PI / 2, 0, 0);
  faceGroup.add(nose);

  // Create the mouth using BoxGeometry
  const mouthGeometry = new THREE.BoxGeometry(options.mouthWidth, options.mouthHeight, options.mouthDepth);
  const mouthMaterial = new THREE.MeshPhongMaterial({ color: options.mouthColor });
  const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
  mouth.position.set(0, -options.mouthHeight - options.noseHeight / 2, options.headSize - options.mouthDepth / 2);
  faceGroup.add(mouth);

  // Create the ears using BoxGeometry
  const earGeometry = new THREE.BoxGeometry(options.earWidth, options.earHeight, options.earDepth);
  const earMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });

  // Create left and right ears and position them
  const leftEar = new THREE.Mesh(earGeometry, earMaterial);
  leftEar.position.set(options.headSize / 2 + options.earWidth / 2, 0, 0);
  faceGroup.add(leftEar);

  const rightEar = new THREE.Mesh(earGeometry, earMaterial);
  rightEar.position.set(-options.headSize / 2 - options.earWidth / 2, 0, 0);
  faceGroup.add(rightEar);

  // Return the faceGroup to be added to the scene
  return faceGroup;
}

// Define the options for customization of the face model
const faceOptions = {
  headSize: 1,
  headColor: 0xf0c8a0,
  eyeSize: 0.1,
  eyeColor: 0x000000,
  eyeSeparation: 0.4,
  eyeHeight: 0.15,
  irisSize: 0.06,
  irisColor: 0x4169e1, // Royal Blue
  irisDepth: 0.01,
  pupilSize: 0.03,
  pupilDepth: 0.01,
  noseWidth: 0.1,
  noseHeight: 0.3,
  mouthWidth: 0.3,
  mouthHeight: 0.1,
  mouthDepth: 0.05,
  mouthColor: 0xe06666,
  earWidth: 0.2,
  earHeight: 0.4,
  earDepth: 0.1,
};

// Create the face model with the given options
const faceModel = createFaceModel(faceOptions);
scene.add(faceModel);

// Add a light source
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Position the camera
camera.position.z = 5;

// Animation loop
function animate() {
requestAnimationFrame(animate);

// Rotate the face model for better visualization
faceModel.rotation.y += 0.01;

renderer.render(scene, camera);
}

// Start the animation loop
animate();
