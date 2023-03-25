import * as THREE from 'three';


function createUpperLipShape(lipParameters) {
  const upperLipShape = new THREE.Shape();
  upperLipShape.moveTo(-lipParameters.width / 2, 0);
  upperLipShape.quadraticCurveTo(-lipParameters.philtrumWidth / 2, lipParameters.upperCurve * lipParameters.height, 0, lipParameters.upperCurve * lipParameters.height + lipParameters.tubercleHeight);
  upperLipShape.quadraticCurveTo(lipParameters.philtrumWidth / 2, lipParameters.upperCurve * lipParameters.height, lipParameters.width / 2, 0);
  return upperLipShape;
}

function createPhiltrumShape(lipParameters) {
  const philtrumGeometry = new THREE.BoxGeometry(lipParameters.philtrumWidth, lipParameters.upperCurve * lipParameters.height, lipParameters.philtrumDepth);
  return philtrumGeometry;
}

function createLowerLipShape(lipParameters) {
  const lowerLipShape = new THREE.Shape();
  lowerLipShape.moveTo(-lipParameters.width / 2, 0);
  lowerLipShape.quadraticCurveTo(0, -lipParameters.lowerCurve * lipParameters.height, lipParameters.width / 2, 0);
  return lowerLipShape;
}

function createLips(lipParameters) {
  const upperLipShape = createUpperLipShape(lipParameters);
  const upperLipGeometry = new THREE.ExtrudeGeometry(upperLipShape, {
    depth: lipParameters.depth,
    bevelEnabled: false,
  });
  const upperLipMaterial = new THREE.MeshBasicMaterial({ color: 0xff8888 });
  const upperLip = new THREE.Mesh(upperLipGeometry, upperLipMaterial);

  const philtrumGeometry = createPhiltrumShape(lipParameters);
  const philtrumMaterial = new THREE.MeshBasicMaterial({ color: 0xffcccc });
  const philtrum = new THREE.Mesh(philtrumGeometry, philtrumMaterial);
  philtrum.position.set(0, lipParameters.upperCurve * lipParameters.height / 2, lipParameters.depth / 2);

  const lowerLipShape = createLowerLipShape(lipParameters);
  const lowerLipGeometry = new THREE.ExtrudeGeometry(lowerLipShape, {
    depth: lipParameters.depth,
    bevelEnabled: false,
  });
  const lowerLipMaterial = new THREE.MeshBasicMaterial({ color: 0xff8888 });
  const lowerLip = new THREE.Mesh(lowerLipGeometry, lowerLipMaterial);
  lowerLip.position.y = -lipParameters.height;

  return { upperLip, philtrum, lowerLip };
}

function createLipModel(lipParameters) {
  const lips = createLips(lipParameters);

  const lipModel = new THREE.Group();
  lipModel.add(lips.upperLip);
  lipModel.add(lips.philtrum);
  lipModel.add(lips.lowerLip);

  return lipModel;
}



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
