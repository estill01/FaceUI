// Import necessary THREE.js components
import * as THREE from 'three';

// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Facial Features
//
// Skull
//
// Forehead
// - Eyebrows
// - Corrugator Supercilii Muscles
//
// Eyes
// - Iris
// - Pupil
// - Eyelids
// - Orbicularis Oculi Muscle
//
// Cheeks
// - Cheekbones
//
// Nose
// - Nasal Bridge
// - Nasal Septum
//
// Mouth
//
// Jaw
//
//
//
//
//Assume you have the following functions already: moveEye(eyeGroup, xOffset, yOffset), setIrisDilation(eyeGroup, dilationFactor), setEyelidPosition(eyeGroup, upperLidY, lowerLidY), animateBlink(eyeGroup, blinkSpeed), animateSquint(eyeGroup, squintSpeed, squintIntensity)

//
// -------------------------

// ==========================
// Skull
// ==========================
// Function to create a frontal bone
function createFrontalBone(options) {
  const frontalBoneGeometry = new THREE.BoxGeometry(options.frontalBoneWidth, options.frontalBoneHeight, options.frontalBoneDepth);
  const frontalBoneMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const frontalBone = new THREE.Mesh(frontalBoneGeometry, frontalBoneMaterial);
  frontalBone.position.set(0, options.headSize / 2 - options.frontalBoneHeight / 2, options.headSize / 2 - options.frontalBoneDepth / 2);
  return frontalBone;
}

// Function to create a temporal bone
function createTemporalBone(options) {
  const temporalBoneGeometry = new THREE.BoxGeometry(options.temporalBoneWidth, options.temporalBoneHeight, options.temporalBoneDepth);
  const temporalBoneMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const temporalBone = new THREE.Mesh(temporalBoneGeometry, temporalBoneMaterial);
  temporalBone.position.set(options.headSize / 2 - options.temporalBoneWidth / 2, options.temporalBoneHeight / 2, options.headSize / 2 - options.temporalBoneDepth / 2);
  return temporalBone;
}

// ~~~~~~
// TODO FIX IMPLEMENTATION
function createTemporalBone(options) {
  const temporalBoneGeometry = new THREE.Geometry();

  // Define the temporal bone's major features
  const boneWidth = options.boneWidth;
  const boneHeight = options.boneHeight;
  const boneDepth = options.boneDepth;
  const mastoidProcessWidth = options.mastoidProcessWidth;
  const mastoidProcessDepth = options.mastoidProcessDepth;
  const externalAuditoryMeatusWidth = options.externalAuditoryMeatusWidth;
  const externalAuditoryMeatusDepth = options.externalAuditoryMeatusDepth;
  const zygomaticProcessHeight = options.zygomaticProcessHeight;
  const zygomaticProcessDepth = options.zygomaticProcessDepth;

  // Define the vertices for the temporal bone
  const v0 = new THREE.Vector3(-boneWidth / 2, boneHeight / 2, boneDepth / 2);
  const v1 = new THREE.Vector3(boneWidth / 2, boneHeight / 2, boneDepth / 2);
  const v2 = new THREE.Vector3(boneWidth / 2, boneHeight / 2 - zygomaticProcessHeight, -boneDepth / 2);
  const v3 = new THREE.Vector3(boneWidth / 2 - zygomaticProcessDepth, boneHeight / 2 - zygomaticProcessHeight, -boneDepth / 2);
  const v4 = new THREE.Vector3(boneWidth / 2 - zygomaticProcessDepth, boneHeight / 2 - zygomaticProcessHeight, -boneDepth / 2 - mastoidProcessDepth);
  const v5 = new THREE.Vector3(boneWidth / 2, boneHeight / 2 - zygomaticProcessHeight, -boneDepth / 2 - mastoidProcessDepth);
  const v6 = new THREE.Vector3(boneWidth / 2, boneHeight / 2 - zygomaticProcessHeight - externalAuditoryMeatusWidth, -boneDepth / 2 - mastoidProcessDepth);
  const v7 = new THREE.Vector3(boneWidth / 2 - externalAuditoryMeatusDepth, boneHeight / 2 - zygomaticProcessHeight - externalAuditoryMeatusWidth, -boneDepth / 2 - mastoidProcessDepth);
  const v8 = new THREE.Vector3(boneWidth / 2 - externalAuditoryMeatusDepth, boneHeight / 2 - zygomaticProcessHeight - externalAuditoryMeatusWidth, -boneDepth / 2 - mastoidProcessDepth - externalAuditoryMeatusDepth);
  const v9 = new THREE.Vector3(boneWidth / 2, boneHeight / 2 - zygomaticProcessHeight - externalAuditoryMeatusWidth, -boneDepth / 2 - mastoidProcessDepth - externalAuditoryMeatusDepth);
  const v10 = new THREE.Vector3(boneWidth / 2 - mastoidProcessWidth, -boneHeight / 2, -boneDepth / 2);
  const v11 = new THREE.Vector3(-boneWidth / 2, -boneHeight / 2, boneDepth / 2);
  const v12 = new THREE.Vector3(-boneWidth / 2, -boneHeight / 2 + mastoidProcessWidth, -boneDepth / 2);
  const v13 = new THREE.Vector3(-boneWidth / 2 + mastoidProcessDepth, -boneHeight / 2 + mastoidProcessWidth, -boneDepth / 2);
  const

  // Define the faces for the temporal bone
  const f0 = new THREE.Face3(0, 1, 2);
  const f1 = new THREE.Face3(0, 2, 3);
  const f2 = new THREE.Face3(2, 1, 5);
  const f3 = new THREE.Face3(2, 5, 4);
  const f4 = new THREE.Face3(5, 1, 6);
  const f5 = new THREE.Face3(5, 6, 7);
  const f6 = new THREE.Face3(7, 6, 8);
  const f7 = new THREE.Face3(7, 8, 9);
  const f8 = new THREE.Face3(4, 5, 9);
  const f9 = new THREE.Face3(4, 9, 10);
  const f10 = new THREE.Face3(11, 0, 3);
  const f11 = new THREE.Face3(11, 3, 12);
  const f12 = new THREE.Face3(12, 3, 4);
  const f13 = new THREE.Face3(12, 4, 13);
  const f14 = new THREE.Face3(13, 4, 10);
  const f15 = new THREE.Face3(13, 10, 11);
  const f16 = new THREE.Face3(8, 6, 1);
  const f17 = new THREE.Face3(8, 1, 0);
  const f18 = new THREE.Face3(2, 4, 3);
  const f19 = new THREE.Face3(2, 5, 4);

  // Add the faces to the geometry
  temporalBoneGeometry.faces.push(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13, f14, f15, f16, f17, f18, f19);

  // Define the edges for the temporal bone
  const e0 = new THREE.Edge3(0, 1);
  const e1 = new THREE.Edge3(1, 2);
  const e2 = new THREE.Edge3(2, 3);
  const e3 = new THREE.Edge3(3, 4);
  const e4 = new THREE.Edge3(4, 5);
  const e5 = new THREE.Edge3(5, 6);
  const e6 = new THREE.Edge3(6, 7);
  const e7 = new THREE.Edge3(7, 8);
  const e8 = new THREE.Edge3(8, 9);
  const e9 = new THREE.Edge3(9, 4);
  const e10 = new THREE.Edge3(9, 10);
  const e11 = new THREE.Edge3(10, 0);
  const e12 = new THREE.Edge3(11, 0);
  const e13 = new THREE.Edge3(11, 12);
  const e14 = new THREE.Edge3(12, 3);
  const e15 = new THREE.Edge3(12, 4);
  const e16 = new THREE.Edge3(13, 4);
  const e17 = new THREE.Edge3(13, 10);
  const e18 = new THREE.Edge3(13, 11);

  // Add the edges to the geometry
  temporalBoneGeometry.edges.push(e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17, e18);

  // Define the materials for the temporal bone
  const boneMaterial = new THREE.MeshPhongMaterial({ color: 0xefefef, side: THREE.DoubleSide });
  const mastoidProcessMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc, side: THREE.DoubleSide });
  const externalAuditoryMeatusMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, side: THREE.DoubleSide });

  // Create the meshes for the bone and its features
  const boneMesh = new THREE.Mesh(temporalBoneGeometry, boneMaterial);
  const mastoidProcessMesh = new THREE.Mesh(new THREE.BoxGeometry(mastoidProcessWidth, mastoidProcessWidth, mastoidProcessDepth), mastoidProcessMaterial);
  const externalAuditoryMeatusMesh = new THREE.Mesh(new THREE.BoxGeometry(externalAuditoryMeatusWidth, externalAuditoryMeatusDepth, externalAuditoryMeatusDepth), externalAuditoryMeatusMaterial);

  // Position the mastoid process and external auditory meatus and add them to the bone mesh
  mastoidProcessMesh.position.set(boneWidth / 2 - mastoidProcessWidth / 2, -boneHeight / 2 + mastoidProcessWidth / 2, -boneDepth / 2 - mastoidProcessDepth / 2);
  externalAuditoryMeatusMesh.position.set(boneWidth / 2 - externalAuditoryMeatusDepth / 2, boneHeight / 2 - zygomaticProcessHeight - externalAuditoryMeatusWidth / 2, -boneDepth / 2 - mastoidProcessDepth - externalAuditoryMeatusDepth / 2);
  boneMesh.add(mastoidProcessMesh);
  boneMesh.add(externalAuditoryMeatusMesh);

  // Return the bone mesh
  return boneMesh;
}

function createParietalBone(options) {
  const parietalBoneGeometry = new THREE.Geometry();

  // Define the parietal bone's major features
  const boneWidth = options.boneWidth;
  const boneHeight = options.boneHeight;
  const boneDepth = options.boneDepth;
  const sagittalSutureWidth = options.sagittalSutureWidth;
  const coronalSutureWidth = options.coronalSutureWidth;
  const lambdoidSutureWidth = options.lambdoidSutureWidth;

  // Define the vertices for the parietal bone
  const v0 = new THREE.Vector3(-boneWidth / 2, boneHeight / 2, boneDepth / 2);
  const v1 = new THREE.Vector3(boneWidth / 2, boneHeight / 2, boneDepth / 2);
  const v2 = new THREE.Vector3(boneWidth / 2 - sagittalSutureWidth / 2, boneHeight / 2, -boneDepth / 2);
  const v3 = new THREE.Vector3(-boneWidth / 2 + sagittalSutureWidth / 2, boneHeight / 2, -boneDepth / 2);
  const v4 = new THREE.Vector3(-boneWidth / 2, -boneHeight / 2, boneDepth / 2);
  const v5 = new THREE.Vector3(boneWidth / 2, -boneHeight / 2, boneDepth / 2);
  const v6 = new THREE.Vector3(boneWidth / 2 - coronalSutureWidth / 2, -boneHeight / 2, -boneDepth / 2);
  const v7 = new THREE.Vector3(-boneWidth / 2 + coronalSutureWidth / 2, -boneHeight / 2, -boneDepth / 2);
  const v8 = new THREE.Vector3(-boneWidth / 2, boneHeight / 2 - lambdoidSutureWidth / 2, -boneDepth / 2);
  const v9 = new THREE.Vector3(-boneWidth / 2, -boneHeight / 2 + lambdoidSutureWidth / 2, -boneDepth / 2);
  const v10 = new THREE.Vector3(boneWidth / 2, boneHeight / 2 - lambdoidSutureWidth / 2, -boneDepth / 2);
  const v11 = new THREE.Vector3(boneWidth / 2, -boneHeight / 2 + lambdoidSutureWidth / 2, -boneDepth / 2);

  // Define the faces for the parietal bone
  const f0 = new THREE.Face3(0, 1, 2);
  const f1 = new THREE.Face3(0, 2, 3);
  const f2 = new THREE.Face3(1, 5, 6);
  const f3 = new THREE.Face3(1, 6, 2);
  const f4 = new THREE.Face3(5, 4, 7);
  const f5 = new THREE.Face3(5, 7, 6);
  const f6 = new THREE.Face3(4, 0, 3);
  const f7 = new THREE.Face3(4, 3, 7);
  const f8 = new THREE.Face3(0, 4, 5);
  const f9 = new THREE.Face3(0, 5, 1);

  // Add the faces to the geometry
  parietalBoneGeometry.faces.push(f0, f1,f2, f3, f4, f5, f6, f7, f8, f9);

  // Define the edges for the parietal bone
  const e0 = new THREE.Edge3(0, 1);
  const e1 = new THREE.Edge3(1, 5);
  const e2 = new THREE.Edge3(5, 4);
  const e3 = new THREE.Edge3(4, 0);
  const e4 = new THREE.Edge3(2, 3);
  const e5 = new THREE.Edge3(3, 7);
  const e6 = new THREE.Edge3(7, 6);
  const e7 = new THREE.Edge3(6, 2);
  const e8 = new THREE.Edge3(0, 8);
  const e9 = new THREE.Edge3(8, 3);
  const e10 = new THREE.Edge3(4, 9);
  const e11 = new THREE.Edge3(9, 7);
  const e12 = new THREE.Edge3(1, 10);
  const e13 = new THREE.Edge3(10, 5);
  const e14 = new THREE.Edge3(6, 11);
  const e15 = new THREE.Edge3(11, 2);
  const e16 = new THREE.Edge3(8, 9);
  const e17 = new THREE.Edge3(10, 11);

  // Add the edges to the geometry
  parietalBoneGeometry.edges.push(e0, e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14, e15, e16, e17);

  // Define the materials for the parietal bone
  const boneMaterial = new THREE.MeshPhongMaterial({ color: 0xefefef, side: THREE.DoubleSide });
  const sutureMaterial = new THREE.MeshPhongMaterial({ color: 0x333333, side: THREE.DoubleSide });

  // Create the meshes for the bone and sutures
  const boneMesh = new THREE.Mesh(parietalBoneGeometry, boneMaterial);
  const sagittalSutureMesh = new THREE.Mesh(new THREE.PlaneGeometry(sagittalSutureWidth, boneHeight), sutureMaterial);
  const coronalSutureMesh = new THREE.Mesh(new THREE.PlaneGeometry(coronalSutureWidth, boneHeight), sutureMaterial);
  const lambdoidSutureMesh = new THREE.Mesh(new THREE.PlaneGeometry(boneWidth, lambdoidSutureWidth), sutureMaterial);

  // Position the sutures and add them to the bone mesh
  sagittalSutureMesh.position.set(0, boneHeight / 2, -boneDepth / 2);
  coronalSutureMesh.position.set(0, -boneHeight / 2, -boneDepth / 2);
  lambdoidSutureMesh.position.set(-boneWidth / 2, 0, -boneDepth / 2);
  boneMesh.add(sagittalSutureMesh);
  boneMesh.add(coronalSutureMesh);
  boneMesh.add(lambdoidSutureMesh);

  // Return the bone mesh
  return boneMesh;
}



function createLacrimalBone(options) {
  const lacrimalBoneHeight = options.headSize * 0.05;
  const lacrimalBoneWidth = options.headSize * 0.025;
  const lacrimalBoneDepth = options.headSize * 0.025;

  const lacrimalBoneGeometry = new THREE.BoxGeometry(lacrimalBoneWidth, lacrimalBoneHeight, lacrimalBoneDepth);
  const lacrimalBoneMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });

  // Define the primary structures of the lacrimal bone
  const fossaGeometry = new THREE.BoxGeometry(lacrimalBoneWidth * 0.5, lacrimalBoneHeight * 0.8, lacrimalBoneDepth * 0.7);
  const fossaMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const fossa = new THREE.Mesh(fossaGeometry, fossaMaterial);
  fossa.position.set(lacrimalBoneWidth * 0.25, 0, 0);
  
  const orbitalPlateGeometry = new THREE.BoxGeometry(lacrimalBoneWidth * 0.6, lacrimalBoneHeight * 0.4, lacrimalBoneDepth * 0.2);
  const orbitalPlateMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const orbitalPlate = new THREE.Mesh(orbitalPlateGeometry, orbitalPlateMaterial);
  orbitalPlate.position.set(-lacrimalBoneWidth * 0.25, 0, lacrimalBoneDepth * 0.25);
  
  const posteriorCanaliculusGeometry = new THREE.CylinderGeometry(lacrimalBoneWidth * 0.1, lacrimalBoneWidth * 0.1, lacrimalBoneHeight * 0.1, 32);
  const posteriorCanaliculusMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const posteriorCanaliculus = new THREE.Mesh(posteriorCanaliculusGeometry, posteriorCanaliculusMaterial);
  posteriorCanaliculus.rotation.z = Math.PI / 2;
  posteriorCanaliculus.position.set(-lacrimalBoneWidth * 0.25, 0, -lacrimalBoneDepth * 0.25);

  // Create a group to hold all the lacrimal bone components
  const lacrimalBoneGroup = new THREE.Group();
  lacrimalBoneGroup.add(fossa);
  lacrimalBoneGroup.add(orbitalPlate);
  lacrimalBoneGroup.add(posteriorCanaliculus);

  // Combine all the components into the final lacrimal bone mesh
  const lacrimalBone = new THREE.Mesh(lacrimalBoneGeometry, lacrimalBoneMaterial);
  lacrimalBone.add(lacrimalBoneGroup);

  return lacrimalBone;
}



function createNasalBone(options) {
  const nasalBoneGeometry = new THREE.BoxGeometry(options.nasalBoneWidth, options.nasalBoneHeight, options.nasalBoneDepth);

  // Add a curvature to the upper part of the nasal bone
  const nasalBoneUpperCurve = new THREE.SphereGeometry(options.nasalBoneUpperCurveRadius, 32, 32, 0, Math.PI);
  nasalBoneUpperCurve.translate(0, options.nasalBoneHeight / 2 - options.nasalBoneUpperCurveRadius, -options.nasalBoneDepth / 2);
  nasalBoneGeometry.merge(nasalBoneUpperCurve);

  // Add a curvature to the lower part of the nasal bone
  const nasalBoneLowerCurve = new THREE.SphereGeometry(options.nasalBoneLowerCurveRadius, 32, 32, Math.PI, Math.PI);
  nasalBoneLowerCurve.translate(0, -options.nasalBoneHeight / 2 + options.nasalBoneLowerCurveRadius, -options.nasalBoneDepth / 2);
  nasalBoneGeometry.merge(nasalBoneLowerCurve);

  const nasalBoneMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const nasalBone = new THREE.Mesh(nasalBoneGeometry, nasalBoneMaterial);

  // Position the nasal bone at the center of the face
  nasalBone.position.set(0, options.headSize / 2 - options.nasalBoneHeight / 2, options.headSize / 2 - options.nasalBoneDepth / 2);

  return nasalBone;
}


function createOccipitalBone(options) {
  const occipitalGeometry = new THREE.Geometry();

  // create the occipital squama
  const squamaWidth = options.squamaWidth || 40;
  const squamaHeight = options.squamaHeight || 40;
  const squamaDepth = options.squamaDepth || 40;
  const squamaGeometry = new THREE.BoxGeometry(squamaWidth, squamaHeight, squamaDepth);
  const squamaMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const squama = new THREE.Mesh(squamaGeometry, squamaMaterial);
  squama.position.set(0, options.headSize / 2 - squamaHeight / 2, -options.headSize / 2 + squamaDepth / 2);
  occipitalGeometry.mergeMesh(squama);

  // create the occipital condyles
  const condyleRadius = options.condyleRadius || 8;
  const condyleHeight = options.condyleHeight || 20;
  const condyleGeometry = new THREE.CylinderGeometry(condyleRadius, condyleRadius, condyleHeight, 16);
  const condyleMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const leftCondyle = new THREE.Mesh(condyleGeometry, condyleMaterial);
  leftCondyle.position.set(-squamaWidth / 2 + condyleRadius, -squamaHeight / 2 - condyleHeight / 2, -squamaDepth / 2 + condyleRadius);
  occipitalGeometry.mergeMesh(leftCondyle);

  const rightCondyle = new THREE.Mesh(condyleGeometry, condyleMaterial);
  rightCondyle.position.set(squamaWidth / 2 - condyleRadius, -squamaHeight / 2 - condyleHeight / 2, -squamaDepth / 2 + condyleRadius);
  occipitalGeometry.mergeMesh(rightCondyle);

  // create the foramen magnum
  const foramenWidth = options.foramenWidth || 20;
  const foramenHeight = options.foramenHeight || 25;
  const foramenDepth = options.foramenDepth || 20;
  const foramenGeometry = new THREE.BoxGeometry(foramenWidth, foramenHeight, foramenDepth);
  const foramenMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const foramen = new THREE.Mesh(foramenGeometry, foramenMaterial);
  foramen.position.set(0, -squamaHeight / 2 - foramenHeight / 2, -squamaDepth / 2 + foramenDepth / 2);
  occipitalGeometry.mergeMesh(foramen);

  return new THREE.Mesh(occipitalGeometry, squamaMaterial);
}

// Function to create the zygomatic bone
function createZygomaticBone(options) {
  const zygomaticMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const zygomaticBone = new THREE.Group();

  // Main body of the zygomatic bone
  const zygomaticBodyGeometry = new THREE.BoxGeometry(options.zygomaticBodyWidth, options.zygomaticBodyHeight, options.zygomaticBodyDepth);
  const zygomaticBodyMesh = new THREE.Mesh(zygomaticBodyGeometry, zygomaticMaterial);
  zygomaticBodyMesh.position.set(0, options.zygomaticBodyHeight / 2, 0);
  zygomaticBone.add(zygomaticBodyMesh);

  // Front process of the zygomatic bone
  const zygomaticFrontProcessGeometry = new THREE.BoxGeometry(options.zygomaticFrontProcessWidth, options.zygomaticFrontProcessHeight, options.zygomaticFrontProcessDepth);
  const zygomaticFrontProcessMesh = new THREE.Mesh(zygomaticFrontProcessGeometry, zygomaticMaterial);
  zygomaticFrontProcessMesh.position.set(0, options.zygomaticBodyHeight / 2 + options.zygomaticFrontProcessHeight / 2, options.zygomaticBodyDepth / 2 - options.zygomaticFrontProcessDepth / 2);
  zygomaticBone.add(zygomaticFrontProcessMesh);

  // Temporal process of the zygomatic bone
  const zygomaticTemporalProcessGeometry = new THREE.BoxGeometry(options.zygomaticTemporalProcessWidth, options.zygomaticTemporalProcessHeight, options.zygomaticTemporalProcessDepth);
  const zygomaticTemporalProcessMesh = new THREE.Mesh(zygomaticTemporalProcessGeometry, zygomaticMaterial);
  zygomaticTemporalProcessMesh.position.set(options.zygomaticBodyWidth / 2 - options.zygomaticTemporalProcessWidth / 2, options.zygomaticBodyHeight / 2 + options.zygomaticTemporalProcessHeight / 2, 0);
  zygomaticBone.add(zygomaticTemporalProcessMesh);

  // Orbital process of the zygomatic bone
  const zygomaticOrbitalProcessGeometry = new THREE.BoxGeometry(options.zygomaticOrbitalProcessWidth, options.zygomaticOrbitalProcessHeight, options.zygomaticOrbitalProcessDepth);
  const zygomaticOrbitalProcessMesh = new THREE.Mesh(zygomaticOrbitalProcessGeometry, zygomaticMaterial);
  zygomaticOrbitalProcessMesh.position.set(0, options.zygomaticOrbitalProcessHeight / 2, -options.zygomaticBodyDepth / 2 + options.zygomaticOrbitalProcessDepth / 2);
  zygomaticBone.add(zygomaticOrbitalProcessMesh);

  return zygomaticBone;
}

function createMaxillaBone(options) {
  const maxilla = new THREE.Group();

  // Main body of the maxilla
  const bodyGeometry = new THREE.BoxGeometry(options.maxillaWidth, options.maxillaHeight, options.maxillaDepth);
  const bodyMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, 0, options.headSize / 2 - options.maxillaDepth / 2);
  maxilla.add(body);

  // Frontal process of the maxilla
  const frontalProcessGeometry = new THREE.BoxGeometry(options.frontalProcessWidth, options.frontalProcessHeight, options.frontalProcessDepth);
  const frontalProcess = new THREE.Mesh(frontalProcessGeometry, bodyMaterial);
  frontalProcess.position.set(options.maxillaWidth / 2 - options.frontalProcessWidth / 2, options.frontalProcessHeight / 2, options.headSize / 2 - options.maxillaDepth / 2);
  maxilla.add(frontalProcess);

  // Zygomatic process of the maxilla
  const zygomaticProcessGeometry = new THREE.BoxGeometry(options.zygomaticProcessWidth, options.zygomaticProcessHeight, options.zygomaticProcessDepth);
  const zygomaticProcess = new THREE.Mesh(zygomaticProcessGeometry, bodyMaterial);
  zygomaticProcess.position.set(0, options.maxillaHeight / 2 - options.zygomaticProcessHeight / 2, options.headSize / 2 - options.maxillaDepth / 2);
  maxilla.add(zygomaticProcess);

  // Palatine process of the maxilla
  const palatineProcessGeometry = new THREE.BoxGeometry(options.palatineProcessWidth, options.palatineProcessHeight, options.palatineProcessDepth);
  const palatineProcess = new THREE.Mesh(palatineProcessGeometry, bodyMaterial);
  palatineProcess.position.set(0, -options.maxillaHeight / 2 + options.palatineProcessHeight / 2, options.headSize / 2 - options.maxillaDepth / 2);
  maxilla.add(palatineProcess);

  // Alveolar process of the maxilla
  const alveolarProcessGeometry = new THREE.BoxGeometry(options.alveolarProcessWidth, options.alveolarProcessHeight, options.alveolarProcessDepth);
  const alveolarProcessMaterial = new THREE.MeshPhongMaterial({ color: options.toothColor });
  const alveolarProcess = new THREE.Mesh(alveolarProcessGeometry, alveolarProcessMaterial);
  alveolarProcess.position.set(0, -options.maxillaHeight / 2 + options.alveolarProcessHeight / 2, options.headSize / 2 - options.maxillaDepth / 2);
  maxilla.add(alveolarProcess);

  return maxilla;
}

function createMandibleBone(options) {
  const mandibleGeometry = new THREE.Geometry();

  // Define the mandible's major features
  const bodyLength = options.bodyLength;
  const bodyWidth = options.bodyWidth;
  const bodyHeight = options.bodyHeight;
  const chinLength = options.chinLength;
  const chinHeight = options.chinHeight;
  const ramusWidth = options.ramusWidth;
  const ramusHeight = options.ramusHeight;
  const toothSocketWidth = options.toothSocketWidth;
  const toothSocketHeight = options.toothSocketHeight;

  // Define the vertices for the mandible
  const v0 = new THREE.Vector3(0, 0, 0);
  const v1 = new THREE.Vector3(0, bodyHeight, 0);
  const v2 = new THREE.Vector3(0, bodyHeight, bodyWidth);
  const v3 = new THREE.Vector3(0, 0, bodyWidth);
  const v4 = new THREE.Vector3(0, chinHeight, bodyWidth + chinLength);
  const v5 = new THREE.Vector3(0, 0, bodyWidth + chinLength);
  const v6 = new THREE.Vector3(0, ramusHeight, -ramusWidth);
  const v7 = new THREE.Vector3(0, bodyHeight, -ramusWidth);

  // Define the faces for the mandible
  const f0 = new THREE.Face3(0, 1, 2);
  const f1 = new THREE.Face3(0, 2, 3);
  const f2 = new THREE.Face3(3, 2, 4);
  const f3 = new THREE.Face3(3, 4, 5);
  const f4 = new THREE.Face3(0, 3, 5);
  const f5 = new THREE.Face3(0, 5, 6);
  const f6 = new THREE.Face3(1, 0, 6);
  const f7 = new THREE.Face3(1, 6, 7);
  const f8 = new THREE.Face3(2, 1, 7);
  const f9 = new THREE.Face3(2, 7, 4);

  // Add the vertices and faces to the geometry
  mandibleGeometry.vertices.push(v0, v1, v2, v3, v4, v5, v6, v7);
  mandibleGeometry.faces.push(f0, f1, f2, f3, f4, f5, f6, f7, f8, f9);

  // Compute the face and vertex normals
  mandibleGeometry.computeFaceNormals();
  mandibleGeometry.computeVertexNormals();

  // Create a mesh and material for the mandible
  const mandibleMaterial = new THREE.MeshPhongMaterial({ color: options.boneColor });
  const mandibleMesh = new THREE.Mesh(mandibleGeometry, mandibleMaterial);

  // Create the tooth sockets
  const toothSocketGeometry = new THREE.BoxGeometry(toothSocketWidth, toothSocketHeight, chinLength / 2);
  const toothSocketMaterial = new THREE.MeshPhongMaterial({ color: options.toothSocketColor });
  const toothSocketMesh1 = new THREE.Mesh(toothSocketGeometry, toothSocketMaterial);
  const toothSocketMesh2 = new THREE.Mesh(toothSocketGeometry, toothSocketMaterial);
  toothSocketMesh1.position.set(0, -toothSocketHeight / 2, bodyWidth);
  toothSocketMesh2.position.set(0, -toothSocketHeight / 2, bodyWidth + chinLength);
  mandibleMesh.add(toothSocketMesh1, toothSocketMesh2);

  // Position and rotate the mandible
  mandibleMesh.position.set(0, -options.headSize / 2 + bodyHeight / 2, 0);
  mandibleMesh.rotation.set(0, Math.PI, 0);

  return mandibleMesh;
}

// ----------------
// Full Skull 
// ----------------


function createHeadModel(options) {
  const headGroup = new THREE.Group();

  const frontalBoneOptions = {
    width: options.headSize * options.frontalBoneWidthRatio,
    height: options.headSize * options.frontalBoneHeightRatio,
    depth: options.headSize * options.frontalBoneDepthRatio,
    color: options.headColor
  };
  const frontalBone = createFrontalBone(frontalBoneOptions);
  headGroup.add(frontalBone);

  const temporalBoneOptions = {
    width: options.headSize * options.temporalBoneWidthRatio,
    height: options.headSize * options.temporalBoneHeightRatio,
    depth: options.headSize * options.temporalBoneDepthRatio,
    color: options.headColor
  };
  const temporalBone1 = createTemporalBone(temporalBoneOptions);
  headGroup.add(temporalBone1);

  const temporalBone2 = createTemporalBone(temporalBoneOptions);
  temporalBone2.rotation.y = Math.PI;
  headGroup.add(temporalBone2);

  const sphenoidBoneOptions = {
    width: options.headSize * options.sphenoidBoneWidthRatio,
    height: options.headSize * options.sphenoidBoneHeightRatio,
    depth: options.headSize * options.sphenoidBoneDepthRatio,
    color: options.headColor
  };
  const sphenoidBone = createSphenoidBone(sphenoidBoneOptions);
  headGroup.add(sphenoidBone);

  const ethmoidBoneOptions = {
    width: options.headSize * options.ethmoidBoneWidthRatio,
    height: options.headSize * options.ethmoidBoneHeightRatio,
    depth: options.headSize * options.ethmoidBoneDepthRatio,
    color: options.headColor
  };
  const ethmoidBone = createEthmoidBone(ethmoidBoneOptions);
  ethmoidBone.position.set(0, 0, options.headSize * options.ethmoidBonePositionRatio);
  headGroup.add(ethmoidBone);

  const maxillaBoneOptions = {
    width: options.headSize * options.maxillaBoneWidthRatio,
    height: options.headSize * options.maxillaBoneHeightRatio,
    depth: options.headSize * options.maxillaBoneDepthRatio,
    color: options.headColor
  };
  const maxillaBone1 = createMaxillaBone(maxillaBoneOptions);
  maxillaBone1.position.set(-options.headSize * options.maxillaBonePositionRatio, -options.headSize * options.maxillaBonePositionRatio, options.headSize * options.maxillaBonePositionRatio);
  headGroup.add(maxillaBone1);

  const maxillaBone2 = createMaxillaBone(maxillaBoneOptions);
  maxillaBone2.rotation.y = Math.PI;
  maxillaBone2.position.set(options.headSize * options.maxillaBonePositionRatio, -options.headSize * options.maxillaBonePositionRatio, options.headSize * options.maxillaBonePositionRatio);
  headGroup.add(maxillaBone2);

  const mandibleBoneOptions = {
    width: options.headSize * options.mandibleBoneWidthRatio,
    height: options.headSize * options.mandibleBoneHeightRatio,
    depth: options.headSize * options.mandibleBoneDepthRatio,
    color: options.headColor
  };
  const mandibleBone = createMandibleBone(mandibleBoneOptions);
  mandibleBone.position.set(0, -options.headSize * options.mandibleBonePositionRatio, options.headSize * options.mandibleBonePositionRatio);
  headGroup.add(mandibleBone);

  const parietalBoneOptions = {
    width: options.headSize * options.parietalBoneWidthRatio,
    height: options.headSize * options.parietalBoneHeightRatio,
    depth: options.headSize * options.parietalBoneDepthRatio,
    color: options.headColor
  };
  const parietalBone1 = createParietalBone(parietalBoneOptions);
  headGroup.add(parietalBone1);

  const parietalBone2 = createParietalBone(parietalBoneOptions);
  parietalBone2.rotation.y = Math.PI;
  headGroup.add(parietalBone2);

  const occipitalBoneOptions = {
    width: options.headSize * options.occipitalBoneWidthRatio,
    height: options.headSize * options.occipitalBoneHeightRatio,
    depth: options.headSize * options.occipitalBoneDepthRatio,
    color: options.headColor
  };
  const occipitalBone = createOccipitalBone(occipitalBoneOptions);
  headGroup.add(occipitalBone);

  const nasalBoneOptions = {
    width: options.headSize * options.nasalBoneWidthRatio,
    height: options.headSize * options.nasalBoneHeightRatio,
    depth: options.headSize * options.nasalBoneDepthRatio,
    color: options.headColor
  };
  const nasalBone = createNasalBone(nasalBoneOptions);
  nasalBone.position.set(0, options.headSize * options.nasalBonePositionRatio, options.headSize * options.nasalBonePositionRatio);
  headGroup.add(nasalBone);

  const zygomaticBoneOptions = {
    width: options.headSize * options.zygomaticBoneWidthRatio,
    height: options.headSize * options.zygomaticBoneHeightRatio,
    depth: options.headSize * options.zygomaticBoneDepthRatio,
    color: options.headColor
  };
  const zygomaticBone1 = createZygomaticBone(zygomaticBoneOptions);
  zygomaticBone1.position.set(-options.headSize * options.zygomaticBonePositionRatio, -options.headSize * options.zygomaticBonePositionRatio, options.headSize * options.zygomaticBonePositionRatio);
  headGroup.add(zygomaticBone1);

  const zygomaticBone2 = createZygomaticBone(zygomaticBoneOptions);
  zygomaticBone2.rotation.y = Math.PI;
  zygomaticBone2.position.set(options.headSize * options.zygomaticBonePositionRatio, -options.headSize * options.zygomaticBonePositionRatio, options.headSize * options.zygomaticBonePositionRatio);
  headGroup.add(zygomaticBone2);

  const lacrimalBoneOptions = {
    width: options.headSize * options.lacrimalBoneWidthRatio,
    height: options.headSize * options.lacrimalBoneHeightRatio,
    depth: options.headSize * options.lacrimalBoneDepthRatio,
    color: options.headColor
  };
  const lacrimalBone = createLacrimalBone(lacrimalBoneOptions);
  lacrimalBone.position.set(-options.headSize * options.lacrimalBonePositionRatio, options.headSize * options.lacrimalBonePositionRatio, options.headSize * options.lacrimalBonePositionRatio);
  headGroup.add(lacrimalBone);

  return headGroup;
}


// ==========================
// Forehead
// ==========================
function createEyebrow(options) {
  const eyebrowShape = new THREE.Shape();
  eyebrowShape.moveTo(-options.eyebrowWidth / 2, 0);
  eyebrowShape.lineTo(-options.eyebrowWidth / 4, options.eyebrowHeight);
  eyebrowShape.lineTo(options.eyebrowWidth / 4, options.eyebrowHeight);
  eyebrowShape.lineTo(options.eyebrowWidth / 2, 0);
  eyebrowShape.closePath();

  const eyebrowGeometry = new THREE.ShapeGeometry(eyebrowShape);
  const eyebrowMaterial = new THREE.MeshPhongMaterial({ color: options.eyebrowColor });
  const eyebrow = new THREE.Mesh(eyebrowGeometry, eyebrowMaterial);

  return eyebrow;
}

function createCorrugatorMuscle(options) {
  const muscleGeometry = new THREE.BoxGeometry(options.corrugatorMuscleWidth, options.corrugatorMuscleHeight, options.corrugatorMuscleDepth);
  const muscleMaterial = new THREE.MeshPhongMaterial({ color: options.headColor, transparent: true, opacity: 0.5 });
  const muscle = new THREE.Mesh(muscleGeometry, muscleMaterial);

  return muscle;
}

function createForeheadSection(options) {
  const forehead = new THREE.Group();

  // Create left and right eyebrows and position them
  const leftEyebrow = createEyebrow(options);
  leftEyebrow.position.set(options.eyeSeparation / 2 - options.eyebrowWidth, options.eyeHeight + options.eyebrowOffset, options.headSize - options.eyeSize - options.eyebrowDepth);
  forehead.add(leftEyebrow);

  const rightEyebrow = createEyebrow(options);
  rightEyebrow.position.set(-options.eyeSeparation / 2 + options.eyebrowWidth, options.eyeHeight + options.eyebrowOffset, options.headSize - options.eyeSize - options.eyebrowDepth);
  forehead.add(rightEyebrow);

  // Create the corrugator supercilii muscles and position them
  const leftCorrugatorMuscle = createCorrugatorMuscle(options);
  leftCorrugatorMuscle.position.set(options.eyeSeparation / 2 - options.corrugatorMuscleWidth / 2, options.eyeHeight + options.corrugatorMuscleOffset, options.headSize - options.eyeSize - options.corrugatorMuscleDepth);
  forehead.add(leftCorrugatorMuscle);

  const rightCorrugatorMuscle = createCorrugatorMuscle(options);
  rightCorrugatorMuscle.position.set(-options.eyeSeparation / 2 + options.corrugatorMuscleWidth / 2, options.eyeHeight + options.corrugatorMuscleOffset, options.headSize - options.eyeSize - options.corrugatorMuscleDepth);
  forehead.add(rightCorrugatorMuscle);

  return forehead;
}

// Function to animate the left eyebrow
function animateLeftEyebrow(time) {
  const speed = 2;
  const angle = Math.sin(time * speed) * Math.PI / 6;
  faceModel.children[5].children[0].rotation.z = angle;
}

// Function to animate the right eyebrow
function animateRightEyebrow(time) {
  const speed = 3;
  const angle = Math.sin(time * speed) * Math.PI / 8;
  faceModel.children[5].children[1].rotation.z = angle;
}

// Function to animate the corrugator muscles
function animateCorrugatorMuscles(time) {
  const speed = 4;
  const offset = Math.sin(time * speed) * 0.02;
  faceModel.children[5].children[2].position.y = faceOptions.eyeHeight + faceOptions.corrugatorMuscleOffset + offset;
  faceModel.children[5].children[3].position.y = faceOptions.eyeHeight + faceOptions.corrugatorMuscleOffset + offset;
}


// ==========================
// EYES
// ==========================
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

// -------------------------
// Eyes::Animations
// -------------------------
function moveEye(eyeGroup, xOffset, yOffset) {
  const iris = eyeGroup.children.find((child) => child.name === 'iris');
  const pupil = eyeGroup.children.find((child) => child.name === 'pupil');

  if (iris && pupil) {
    iris.position.x = xOffset;
    iris.position.y = yOffset;
    pupil.position.x = xOffset;
    pupil.position.y = yOffset;
  }
}

function setIrisDilation(eyeGroup, dilationFactor) {
  const iris = eyeGroup.children.find((child) => child.name === 'iris');
  const pupil = eyeGroup.children.find((child) => child.name === 'pupil');

  if (iris && pupil) {
    iris.scale.set(dilationFactor, dilationFactor, 1);
    pupil.scale.set(dilationFactor, dilationFactor, 1);
  }
}

function setEyelidPosition(eyeGroup, upperLidY, lowerLidY) {
  const upperEyelid = eyeGroup.children.find((child) => child.name === 'upperEyelid');
  const lowerEyelid = eyeGroup.children.find((child) => child.name === 'lowerEyelid');

  if (upperEyelid && lowerEyelid) {
    upperEyelid.position.y = upperLidY;
    lowerEyelid.position.y = lowerLidY;
  }
}

function animateBlink(eyeGroup, blinkSpeed) {
  const upperEyelid = eyeGroup.children.find((child) => child.name === 'upperEyelid');
  const lowerEyelid = eyeGroup.children.find((child) => child.name === 'lowerEyelid');

  if (upperEyelid && lowerEyelid) {
    const initialUpperY = upperEyelid.position.y;
    const initialLowerY = lowerEyelid.position.y;

    const blink = () => {
      const blinkDuration = 1 / blinkSpeed;
      setEyelidPosition(eyeGroup, initialUpperY - 0.1, initialLowerY + 0.1);
      setTimeout(() => {
        setEyelidPosition(eyeGroup, initialUpperY, initialLowerY);
      }, blinkDuration * 1000);
    };

    setInterval(blink, 1000 / blinkSpeed);
  }
}

function animateSquint(eyeGroup, squintSpeed, squintIntensity) {
  const upperEyelid = eyeGroup.children.find((child) => child.name === 'upperEyelid');
  const lowerEyelid = eyeGroup.children.find((child) => child.name === 'lowerEyelid');

  if (upperEyelid && lowerEyelid) {
    const initialUpperY = upperEyelid.position.y;
    const initialLowerY = lowerEyelid.position.y;

    const squint = () => {
      const squintDuration = 1 / squintSpeed;
      setEyelidPosition(eyeGroup, initialUpperY - squintIntensity, initialLowerY + squintIntensity);
      setTimeout(() => {
        setEyelidPosition(eyeGroup, initialUpperY, initialLowerY);
      }, squintDuration * 1000);
    };

    setInterval(squint, 1000 / squintSpeed);
  }
}

function animateEyeMovement(eyeGroup, xSpeed, ySpeed) {
  eyeGroup.children.forEach((child) => {
    if (child !== eyeGroup.children[3]) { // Exclude the orbicularis oculi muscle
      moveEye(child, xSpeed, ySpeed);
    }
  });
}

function animateIrisDilation(eyeGroup, dilationSpeed, minDilation, maxDilation) {
  const iris = eyeGroup.children[1];
  const currentDilation = iris.geometry.parameters.radiusTop;
  const newDilation = currentDilation + dilationSpeed;
  
  if (newDilation < minDilation) {
    setIrisDilation(eyeGroup, minDilation);
  } else if (newDilation > maxDilation) {
    setIrisDilation(eyeGroup, maxDilation);
  } else {
    setIrisDilation(eyeGroup, newDilation);
  }
}

function animateOrbicularisOculi(eyeGroup, contractionIntensity) {
  const muscle = eyeGroup.children[3];
  const initialRadius = eyeGroup.children[0].geometry.parameters.radius;
  const targetRadius = initialRadius * (1 + contractionIntensity);
  
  muscle.geometry.dispose();
  const muscleShape = new THREE.Shape();
  muscleShape.absarc(0, 0, targetRadius, 0, Math.PI * 2, true);
  muscle.geometry = new THREE.ShapeGeometry(muscleShape);
}

// ====================
// Cheeks
// ====================
function createCheekBones(options) {
  const cheekGeometry = new THREE.BoxGeometry(options.cheekWidth, options.cheekHeight, options.cheekDepth);
  const cheekMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });

  // Create left and right cheek bones and position them
  const leftCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
  leftCheek.position.set(options.headSize / 2 + options.earWidth + options.cheekWidth / 2, -options.headSize / 2 + options.cheekHeight / 2, 0);

  const rightCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
  rightCheek.position.set(-options.headSize / 2 - options.earWidth - options.cheekWidth / 2, -options.headSize / 2 + options.cheekHeight / 2, 0);

  return { leftCheek, rightCheek };
}

function createCheekBones(options) {
  const cheekGeometry = new THREE.BoxGeometry(options.cheekWidth, options.cheekHeight, options.cheekDepth);
  const cheekMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });

  // Create left and right cheek bones and position them
  const leftCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
  leftCheek.position.set(options.headSize / 2 + options.earWidth + options.cheekWidth / 2, -options.headSize / 2 + options.cheekHeight / 2, 0);

  const rightCheek = new THREE.Mesh(cheekGeometry, cheekMaterial);
  rightCheek.position.set(-options.headSize / 2 - options.earWidth - options.cheekWidth / 2, -options.headSize / 2 + options.cheekHeight / 2, 0);

  return { leftCheek, rightCheek };
}

function createBuccalRegion(options) {
  const buccalGeometry = new THREE.BoxGeometry(options.buccalWidth, options.buccalHeight, options.buccalDepth);
  const buccalMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });

  const buccal = new THREE.Mesh(buccalGeometry, buccalMaterial);
  buccal.position.set(0, -options.noseHeight / 2 - options.buccalHeight / 2, options.headSize - options.buccalDepth / 2);

  return buccal;
}

// ====================
// Facial Expressions
// ====================

function animateFacialExpressions(faceModel, expressionParameters) {
  const leftEye = faceModel.children[1];
  const rightEye = faceModel.children[2];

  // Animate eye movement
  animateEyeMovement(leftEye, expressionParameters.eyeXSpeed, expressionParameters.eyeYSpeed);
  animateEyeMovement(rightEye, expressionParameters.eyeXSpeed, expressionParameters.eyeYSpeed);

  // Animate iris dilation
  animateIrisDilation(leftEye, expressionParameters.dilationSpeed, expressionParameters.minDilation, expressionParameters.maxDilation);
  animateIrisDilation(rightEye, expressionParameters.dilationSpeed, expressionParameters.minDilation, expressionParameters.maxDilation);

  // Animate blinking
  animateBlink(leftEye, expressionParameters.blinkSpeed);
  animateBlink(rightEye, expressionParameters.blinkSpeed);

  // Animate squinting
  animateSquint(leftEye, expressionParameters.squintSpeed, expressionParameters.squintIntensity);
  animateSquint(rightEye, expressionParameters.squintSpeed, expressionParameters.squintIntensity);

  // Animate orbicularis oculi muscle contraction
  animateOrbicularisOculi(leftEye, expressionParameters.contractionIntensity);
  animateOrbicularisOculi(rightEye, expressionParameters.contractionIntensity);
}

function animateShock(eyeGroup, forehead) {
  animateBlink(eyeGroup, 10);

  const speed = 6;
  const intensity = 0.05 * Math.random();

  animateEyeMovement(eyeGroup, 0, intensity);
  animateOrbicularisOculi(eyeGroup, intensity);

  const angle = Math.sin(Date.now() * speed * Math.random()) * Math.PI / 12;
  forehead.children[2].rotation.z = angle;
  forehead.children[3].rotation.z = -angle;
}

function animateThinking(eyeGroup, forehead) {
  animateSquint(eyeGroup, 4, 0.03 * Math.random());

  const speed = 3;
  const intensity = 0.05 * Math.random();

  animateEyeMovement(eyeGroup, intensity, intensity);
  animateOrbicularisOculi(eyeGroup, intensity);

  const angle = Math.sin(Date.now() * speed * Math.random()) * Math.PI / 8;
  forehead.children[2].rotation.z = angle;
  forehead.children[3].rotation.z = -angle;
}

function animateAnger(eyeGroup, forehead) {
  animateSquint(eyeGroup, 6, 0.05 * Math.random());

  const speed = 5;
  const intensity = 0.1 * Math.random();

  animateEyeMovement(eyeGroup, -intensity, intensity);
  animateOrbicularisOculi(eyeGroup, intensity);

  const angle = Math.sin(Date.now() * speed * Math.random()) * Math.PI / 6;
  forehead.children[2].rotation.z = angle;
  forehead.children[3].rotation.z = -angle;
}

function animateFear(eyeGroup, forehead) {
  animateBlink(eyeGroup, 8);

  const speed = 8;
  const intensity = 0.1 * Math.random();

  animateEyeMovement(eyeGroup, 0, -intensity);
  animateOrbicularisOculi(eyeGroup, intensity);

  const offset = Math.sin(Date.now() * speed * Math.random()) * 0.05;
  forehead.children[2].position.y = forehead.children[2].position.y + offset;
  forehead.children[3].position.y = forehead.children[3].position.y + offset;
}

function animateBoredom(eyeGroup, forehead) {
  animateBlink(eyeGroup, 2);

  const speed = 2;
  const intensity = 0.02 * Math.random();

  animateEyeMovement(eyeGroup, intensity, 0);
  animateOrbicularisOculi(eyeGroup, intensity);

  const angle = Math.sin(Date.now() * speed * Math.random()) * Math.PI / 24;
  forehead.children[2].rotation.z = angle;
  forehead.children[3].rotation.z = -angle;
}


function animateFrown(upperLid, lowerLid, frownIntensity) {
  const initialUpperY = upperLid.position.y;
  const initialLowerY = lowerLid.position.y;
  const speed = 2;

  const frown = () => {
    const frownDuration = 1 / speed;
    setEyelidPosition(upperLid, initialUpperY + frownIntensity, null);
    setEyelidPosition(lowerLid, null, initialLowerY - frownIntensity);
    setTimeout(() => {
      setEyelidPosition(upperLid, initialUpperY, null);
      setEyelidPosition(lowerLid, null, initialLowerY);
    }, frownDuration * 1000);
  };

  setInterval(frown, 1000 / speed);
}

function animateHeadLowering(head, loweringIntensity) {
  const initialPosition = head.position.y;
  const speed = 1;

  const lower = () => {
    const lowerDuration = 1 / speed;
    head.position.y = initialPosition - loweringIntensity;
    setTimeout(() => {
      head.position.y = initialPosition;
    }, lowerDuration * 1000);
  };

  setInterval(lower, 1000 / speed);
}

function animateSurprise() {
  const eyebrowSpeed = 3;
  const eyebrowAngle = Math.sin(Date.now() * eyebrowSpeed) * Math.PI / 8;
  faceModel.children[5].children[0].rotation.z = -eyebrowAngle;
  faceModel.children[5].children[1].rotation.z = eyebrowAngle;

  const eyeSpeed = 4;
  const eyeYOffset = Math.sin(Date.now() * eyeSpeed) * 0.02;
  moveEye(faceModel.children[4], 0, eyeYOffset);

  const dilationSpeed = 0.01;
  const minDilation = 0.5;
  const maxDilation = 1.5;
  animateIrisDilation(faceModel.children[4], dilationSpeed, minDilation, maxDilation);

  const muscleIntensity = 0.2;
  animateOrbicularisOculi(faceModel.children[4], muscleIntensity);
}

function animateDisgust() {
  const eyebrowSpeed = 4;
  const eyebrowAngle = Math.sin(Date.now() * eyebrowSpeed) * Math.PI / 8;
  faceModel.children[5].children[0].rotation.z = -eyebrowAngle;
  faceModel.children[5].children[1].rotation.z = eyebrowAngle;

  const dilationSpeed = -0.01;
  const minDilation = 0.5;
  const maxDilation = 1.5;
  animateIrisDilation(faceModel.children[4], dilationSpeed, minDilation, maxDilation);

  const upperLidY = -faceOptions.eyeSize / 2;
  const lowerLidY = faceOptions.eyeSize / 2;
  setEyelidPosition(faceModel.children[4], upperLidY, lowerLidY);
}

// ==============================
// Nose
// ==============================
function createNose(options) {
  // Create the nasal bone using a BoxGeometry
  const nasalBoneGeometry = new THREE.BoxGeometry(options.nasalBoneWidth, options.nasalBoneHeight, options.nasalBoneDepth);
  const nasalBoneMaterial = new THREE.MeshPhongMaterial({ color: options.nasalBoneColor });
  const nasalBone = new THREE.Mesh(nasalBoneGeometry, nasalBoneMaterial);

  // Create the upper lateral cartilage using a BoxGeometry
  const upperLateralCartilageGeometry = new THREE.BoxGeometry(options.upperLateralCartilageWidth, options.upperLateralCartilageHeight, options.upperLateralCartilageDepth);
  const upperLateralCartilageMaterial = new THREE.MeshPhongMaterial({ color: options.upperLateralCartilageColor });
  const upperLateralCartilage = new THREE.Mesh(upperLateralCartilageGeometry, upperLateralCartilageMaterial);
  upperLateralCartilage.position.set(0, options.nasalBoneHeight / 2 + options.upperLateralCartilageHeight / 2, 0);
  nasalBone.add(upperLateralCartilage);

  // Create the lower lateral cartilage using a BoxGeometry
  const lowerLateralCartilageGeometry = new THREE.BoxGeometry(options.lowerLateralCartilageWidth, options.lowerLateralCartilageHeight, options.lowerLateralCartilageDepth);
  const lowerLateralCartilageMaterial = new THREE.MeshPhongMaterial({ color: options.lowerLateralCartilageColor });
  const lowerLateralCartilage = new THREE.Mesh(lowerLateralCartilageGeometry, lowerLateralCartilageMaterial);
  lowerLateralCartilage.position.set(0, -(options.nasalBoneHeight / 2 + options.lowerLateralCartilageHeight / 2), 0);
  nasalBone.add(lowerLateralCartilage);

  // Create the nostrils using a BoxGeometry
  const nostrilGeometry = new THREE.BoxGeometry(options.nostrilWidth, options.nostrilHeight, options.nostrilDepth);
  const nostrilMaterial = new THREE.MeshPhongMaterial({ color: options.nasalBoneColor });
  const leftNostril = new THREE.Mesh(nostrilGeometry, nostrilMaterial);
  const rightNostril = new THREE.Mesh(nostrilGeometry, nostrilMaterial);
  leftNostril.position.set(options.nostrilSeparation / 2, 0, 0);
  rightNostril.position.set(-options.nostrilSeparation / 2, 0, 0);
  lowerLateralCartilage.add(leftNostril);
  lowerLateralCartilage.add(rightNostril);

  // Create the maxilla using a BoxGeometry
  const maxillaGeometry = new THREE.BoxGeometry(options.maxillaWidth, options.maxillaHeight, options.maxillaDepth);
  const maxillaMaterial = new THREE.MeshPhongMaterial({ color: options.maxillaColor });
  const maxilla = new THREE.Mesh(maxillaGeometry, maxillaMaterial);
  maxilla.position.set(0, -options.maxillaHeight / 2, 0);
  nasalBone.add(maxilla);

  return nasalBone;
}

function getDefaultNoseConfig() {
  return {
    nasalBoneWidth: 1,
    nasalBoneHeight: 1,
    nasalBoneDepth: 1,
    nasalBoneColor: 0xffffff,
    upperLateralCartilageWidth: 1,
    upperLateralCartilageHeight: 1,
    upperLateralCartilageDepth: 1,
    upperLateralCartilageColor: 0xffffff,
    lowerLateralCartilageWidth: 1,
    lowerLateralCartilageHeight: 1,
    lowerLateralCartilageDepth: 1,
    lowerLateralCartilageColor: 0xffffff,
    nostrilWidth: 0.2,
    nostrilHeight: 0.2,
    nostrilDepth: 0.2,
    nostrilSeparation: 0.3,
    maxillaWidth: 1,
    maxillaHeight: 1,
    maxillaDepth: 1,
    maxillaColor: 0xffffff,
  };
}

// Generate a configuration for a small, narrow nose
function getSmallNoseConfig() {
  return {
    nasalBoneWidth: 0.8,
    nasalBoneHeight: 0.8,
    nasalBoneDepth: 0.8,
    upperLateralCartilageWidth: 0.8,
    upperLateralCartilageHeight: 0.6,
    upperLateralCartilageDepth: 0.6,
    lowerLateralCartilageWidth: 0.8,
    lowerLateralCartilageHeight: 0.4,
    lowerLateralCartilageDepth: 0.6,
    nostrilWidth: 0.15,
    nostrilHeight: 0.15,
    nostrilDepth: 0.15,
    nostrilSeparation: 0.2,
    maxillaWidth: 0.8,
    maxillaHeight: 0.4,
    maxillaDepth: 0.8,
  };
}

// Generate a configuration for a large, broad nose
function getLargeNoseConfig() {
  return {
    nasalBoneWidth: 1.2,
    nasalBoneHeight: 1.2,
    nasalBoneDepth: 1.2,
    upperLateralCartilageWidth: 1.2,
    upperLateralCartilageHeight: 0.8,
    upperLateralCartilageDepth: 0.8,
    lowerLateralCartilageWidth: 1.2,
    lowerLateralCartilageHeight: 0.6,
    lowerLateralCartilageDepth: 0.8,
    nostrilWidth: 0.25,
    nostrilHeight: 0.25,
    nostrilDepth: 0.25,
    nostrilSeparation: 0.4,
    maxillaWidth: 1.2,
    maxillaHeight: 0.6,
    maxillaDepth: 1.2,
  };
}
// Generate a configuration for a sharp, angular nose
function getSharpNoseConfig() {
  return {
    nasalBoneWidth: 1,
    nasalBoneHeight: 1,
    nasalBoneDepth: 0.6,
    upperLateralCartilageWidth: 1,
    upperLateralCartilageHeight: 0.6,
    upperLateralCartilageDepth: 0.4,
    lowerLateralCartilageWidth: 1,
    lowerLateralCartilageHeight: 0.4,
    lowerLateralCartilageDepth: 0.4,
    nostrilWidth: 0.2,
    nostrilHeight: 0.2,
    nostrilDepth: 0.15,
    nostrilSeparation: 0.3,
    maxillaWidth: 1,
    maxillaHeight: 0.4,
    maxillaDepth: 0.6,
  };
}

// Generate a configuration for a rounded, bulbous nose
function getBulbousNoseConfig() {
  return {
    nasalBoneWidth: 1,
    nasalBoneHeight: 1,
    nasalBoneDepth: 1,
    upperLateralCartilageWidth: 1,
    upperLateralCartilageHeight: 1,
    upperLateralCartilageDepth: 1,
    lowerLateralCartilageWidth: 1,
    lowerLateralCartilageHeight: 1,
    lowerLateralCartilageDepth: 1,
    nostrilWidth: 0.3,
    nostrilHeight: 0.3,
    nostrilDepth: 0.3,
    nostrilSeparation: 0.4,
    maxillaWidth: 1,
    maxillaHeight: 1,
    maxillaDepth: 1,
  };
}

// Generate a configuration for a long, narrow nose
function getLongNoseConfig() {
  return {
    nasalBoneWidth: 1,
    nasalBoneHeight: 1,
    nasalBoneDepth: 1,
    upperLateralCartilageWidth: 1,
    upperLateralCartilageHeight: 0.8,
    upperLateralCartilageDepth: 0.8,
    lowerLateralCartilageWidth: 1,
    lowerLateralCartilageHeight: 0.6,
    lowerLateralCartilageDepth: 0.8,
    nostrilWidth: 0.2,
    nostrilHeight: 0.2,
    nostrilDepth: 0.2,
    nostrilSeparation: 0.3,
    maxillaWidth: 1,
    maxillaHeight: 0.6,
    maxillaDepth: 1,
  };
}

// Generate a configuration for a short, wide nose
function getWideNoseConfig() {
  return {
    nasalBoneWidth: 1.2,
    nasalBoneHeight: 1,
    nasalBoneDepth: 1.2,
    upperLateralCartilageWidth: 1.2,
    upperLateralCartilageHeight: 0.6,
    upperLateralCartilageDepth: 0.8,
    lowerLateralCartilageWidth: 1.2,
    lowerLateralCartilageHeight: 0.4,
    lowerLateralCartilageDepth: 0.6,
    nostrilWidth: 0.25,
    nostrilHeight: 0.25,
    nostrilDepth: 0.2,
    nostrilSeparation: 0.3,
    maxillaWidth: 1.2,
    maxillaHeight: 0.6,
    maxillaDepth: 1.2,
  };
}

// Generate a configuration for a Roman nose
function getRomanNoseConfig() {
  return {
    nasalBoneWidth: 1.2,
    nasalBoneHeight: 1.2,
    nasalBoneDepth: 0.8,
    upperLateralCartilageWidth: 1.2,
    upperLateralCartilageHeight: 0.8,
    upperLateralCartilageDepth: 0.6,
    lowerLateralCartilageWidth: 1.2,
    lowerLateralCartilageHeight: 0.6,
    lowerLateralCartilageDepth: 0.6,
    nostrilWidth: 0.2,
    nostrilHeight: 0.2,
    nostrilDepth: 0.15,
    nostrilSeparation: 0.3,
    maxillaWidth: 1.2,
    maxillaHeight: 0.6,
    maxillaDepth: 1,
  };
}

// Generate a configuration for a snub nose
function getSnubNoseConfig() {
  return {
    nasalBoneWidth: 0.8,
    nasalBoneHeight: 0.8,
    nasalBoneDepth: 0.6,
    upperLateralCartilageWidth: 0.8,
    upperLateralCartilageHeight: 0.6,
    upperLateralCartilageDepth: 0.4,
    lowerLateralCartilageWidth: 0.8,
    lowerLateralCartilageHeight: 0.4,
    lowerLateralCartilageDepth: 0.4,
    nostrilWidth: 0.15,
    nostrilHeight: 0.15,
    nostrilDepth: 0.15,
    nostrilSeparation: 0.2,
    maxillaWidth: 0.8,
    maxillaHeight: 0.4,
    maxillaDepth: 0.6,
  };
}

// Generate a configuration for a hawk nose
function getHawkNoseConfig() {
  return {
    nasalBoneWidth: 1.2,
    nasalBoneHeight: 1,
    nasalBoneDepth: 0.8,
    upperLateralCartilageWidth: 1.2,
    upperLateralCartilageHeight: 0.6,
    upperLateralCartilageDepth: 0.6,
    lowerLateralCartilageWidth: 1.2,
    lowerLateralCartilageHeight: 0.4,
    lowerLateralCartilageDepth: 0.4,
    nostrilWidth: 0.2,
    nostrilHeight: 0.2,
    nostrilDepth: 0.2,
    nostrilSeparation: 0.3,
    maxillaWidth: 1.2,
    maxillaHeight: 0.6,
    maxillaDepth: 1,
  };
}

// Generate a random nose configuration
function getRandomNoseConfig(
  nasalBoneWidthRange = [0.8, 1.4],
  nasalBoneHeightRange = [0.8, 1.4],
  nasalBoneDepthRange = [0.4, 0.8],
  upperLateralCartilageWidthRange = [0.8, 1.4],
  upperLateralCartilageHeightRange = [0.4, 0.8],
  upperLateralCartilageDepthRange = [0.3, 0.6],
  lowerLateralCartilageWidthRange = [0.8, 1.4],
  lowerLateralCartilageHeightRange = [0.3, 0.6],
  lowerLateralCartilageDepthRange = [0.3, 0.6],
  nostrilWidthRange = [0.1, 0.3],
  nostrilHeightRange = [0.1, 0.3],
  nostrilDepthRange = [0.1, 0.3],
  nostrilSeparationRange = [0.2, 0.5],
  maxillaWidthRange = [0.8, 1.4],
  maxillaHeightRange = [0.4, 0.8],
  maxillaDepthRange = [0.4, 0.8]
) {
  const nasalBoneWidth = Math.random() * (nasalBoneWidthRange[1] - nasalBoneWidthRange[0]) + nasalBoneWidthRange[0];
  const nasalBoneHeight = Math.random() * (nasalBoneHeightRange[1] - nasalBoneHeightRange[0]) + nasalBoneHeightRange[0];
  const nasalBoneDepth = Math.random() * (nasalBoneDepthRange[1] - nasalBoneDepthRange[0]) + nasalBoneDepthRange[0];
  const upperLateralCartilageWidth = Math.random() * (upperLateralCartilageWidthRange[1] - upperLateralCartilageWidthRange[0]) + upperLateralCartilageWidthRange[0];
  const upperLateralCartilageHeight = Math.random() * (upperLateralCartilageHeightRange[1] - upperLateralCartilageHeightRange[0]) + upperLateralCartilageHeightRange[0];
  const upperLateralCartilageDepth = Math.random() * (upperLateralCartilageDepthRange[1] - upperLateralCartilageDepthRange[0]) + upperLateralCartilageDepthRange[0];
  const lowerLateralCartilageWidth = Math.random() * (lowerLateralCartilageWidthRange[1] - lowerLateralCartilageWidthRange[0]) + lowerLateralCartilageWidthRange[0];
  const lowerLateralCartilageHeight = Math.random() * (lowerLateralCartilageHeightRange[1] - lowerLateralCartilageHeightRange[0]) + lowerLateralCartilageHeightRange[0];
  const lowerLateralCartilageDepth = Math.random() * (lowerLateralCartilageDepthRange[1] - lowerLateralCartilageDepthRange[0]) + lowerLateralCartilageDepthRange[0];
  const nostrilWidth = Math.random() * (nostrilWidthRange[1] - nostrilWidthRange[0]) + nostrilWidthRange[0];
  const nostrilHeight = Math.random() * (nostrilHeightRange[1] - nostrilHeightRange[0]) + nostrilHeightRange[0];
  const nostrilDepth = Math.random() * (nostrilDepthRange[1] - nostrilDepthRange[0]) + nostrilDepthRange[0];
  const nostrilSeparation = Math.random() * (nostrilSeparationRange[1] - nostrilSeparationRange[0]) + nostrilSeparationRange[0];
  const maxillaWidth = Math.random() * (maxillaWidthRange[1] - maxillaWidthRange[0]) + maxillaWidthRange[0];
  const maxillaHeight = Math.random() * (maxillaHeightRange[1] - maxillaHeightRange[0]) + maxillaHeightRange[0];
  const maxillaDepth = Math.random() * (maxillaDepthRange[1] - maxillaDepthRange[0]) + maxillaDepthRange[0];

  return {
    nasalBoneWidth,
    nasalBoneHeight,
    nasalBoneDepth,
    upperLateralCartilageWidth,
    upperLateralCartilageHeight,
    upperLateralCartilageDepth,
    lowerLateralCartilageWidth,
    lowerLateralCartilageHeight,
    lowerLateralCartilageDepth,
    nostrilWidth,
    nostrilHeight,
    nostrilDepth,
    nostrilSeparation,
    maxillaWidth,
    maxillaHeight,
    maxillaDepth,
  };
}
function integrateNoses(nose1, nose2) {
  // Compute the relative scale and orientation of the nose components
  const scaleRatios = {
    nasalBone: nose1.nasalBone.width / nose2.nasalBone.width,
    upperLateralCartilage: nose1.upperLateralCartilage.width / nose2.upperLateralCartilage.width,
    lowerLateralCartilage: nose1.lowerLateralCartilage.width / nose2.lowerLateralCartilage.width,
    nostrilWidth: nose1.nostrils.width / nose2.nostrils.width,
    nostrilHeight: nose1.nostrils.height / nose2.nostrils.height,
    maxillaWidth: nose1.maxilla.width / nose2.maxilla.width,
    maxillaHeight: nose1.maxilla.height / nose2.maxilla.height,
  };

  // Create a new object to store the integrated nose configuration
  const integratedNose = {
    nasalBone: {},
    upperLateralCartilage: {},
    lowerLateralCartilage: {},
    nostrils: {},
    maxilla: {},
  };

  // Integrate the nasal bone
  if (scaleRatios.nasalBone >= 1) {
    integratedNose.nasalBone.width = nose1.nasalBone.width;
  } else {
    integratedNose.nasalBone.width = nose2.nasalBone.width;
  }

  // Integrate the upper lateral cartilage
  if (scaleRatios.upperLateralCartilage >= 1) {
    integratedNose.upperLateralCartilage.width = nose1.upperLateralCartilage.width;
  } else {
    integratedNose.upperLateralCartilage.width = nose2.upperLateralCartilage.width;
  }

  // Integrate the lower lateral cartilage
  if (scaleRatios.lowerLateralCartilage >= 1) {
    integratedNose.lowerLateralCartilage.width = nose1.lowerLateralCartilage.width;
  } else {
    integratedNose.lowerLateralCartilage.width = nose2.lowerLateralCartilage.width;
  }

  // Integrate the nostrils
  if (scaleRatios.nostrilWidth >= 1) {
    integratedNose.nostrils.width = nose1.nostrils.width;
  } else {
    integratedNose.nostrils.width = nose2.nostrils.width;
  }

  if (scaleRatios.nostrilHeight >= 1) {
    integratedNose.nostrils.height = nose1.nostrils.height;
  } else {
    integratedNose.nostrils.height = nose2.nostrils.height;
  }

  // Integrate the maxilla
  if (scaleRatios.maxillaWidth >= 1) {
    integratedNose.maxilla.width = nose1.maxilla.width;
  } else {
    integratedNose.maxilla.width = nose2.maxilla.width;
  }

  if (scaleRatios.maxillaHeight >= 1) {
    integratedNose.maxilla.height = nose1.maxilla.height;
  } else {
    integratedNose.maxilla.height = nose2.maxilla.height;
  }

  // Return the integrated nose configuration
  return integratedNose;
}


function generateNoseVariations(noseConfig, numVariations, stochasticity) {
  const variations = [];

  for (let i = 0; i < numVariations; i++) {
    // Generate a new configuration based on the input nose config
    const newNoseConfig = {
      nasalBoneWidth: noseConfig.nasalBoneWidth + Math.random() * stochasticity,
      nasalBoneHeight: noseConfig.nasalBoneHeight + Math.random() * stochasticity,
      upperLateralCartilageWidth: noseConfig.upperLateralCartilageWidth + Math.random() * stochasticity,
      upperLateralCartilageHeight: noseConfig.upperLateralCartilageHeight + Math.random() * stochasticity,
      lowerLateralCartilageWidth: noseConfig.lowerLateralCartilageWidth + Math.random() * stochasticity,
      lowerLateralCartilageHeight: noseConfig.lowerLateralCartilageHeight + Math.random() * stochasticity,
      nostrilWidth: noseConfig.nostrilWidth + Math.random() * stochasticity,
      nostrilHeight: noseConfig.nostrilHeight + Math.random() * stochasticity,
      nostrilDepth: noseConfig.nostrilDepth + Math.random() * stochasticity,
      nostrilSeparation: noseConfig.nostrilSeparation + Math.random() * stochasticity,
      maxillaWidth: noseConfig.maxillaWidth + Math.random() * stochasticity,
      maxillaHeight: noseConfig.maxillaHeight + Math.random() * stochasticity,
      maxillaDepth: noseConfig.maxillaDepth + Math.random() * stochasticity,
    };

    variations.push(newNoseConfig);
  }

  return variations;
}

function integratedFaces(faces, options = {}) {
  const {
    featureWeights = {},
    featureOverrides = {},
    featureExcludeList = [],
    featureIncludeList = [],
    randomize = true,
    stochasticity = 0.5
  } = options;

  const integratedFace = new THREE.Group();

  const featureNames = faces[0].children.map(child => child.name);
  for (const featureName of featureNames) {
    if (featureExcludeList.includes(featureName) || (featureIncludeList.length > 0 && !featureIncludeList.includes(featureName))) {
      continue;
    }

    let feature;
    if (featureOverrides[featureName]) {
      feature = featureOverrides[featureName].clone();
    } else if (featureWeights[featureName]) {
      const weightSum = Object.values(featureWeights[featureName]).reduce((sum, weight) => sum + weight, 0);
      const featureWeightsNormalized = {};
      for (const [faceIndex, weight] of Object.entries(featureWeights[featureName])) {
        featureWeightsNormalized[faceIndex] = weight / weightSum;
      }
      const featureConfigs = featureWeightsNormalized.map((weight, index) => ({ face: faces[index], weight }));
      feature = integrateFeature(featureConfigs, featureName, randomize, stochasticity);
    } else {
      feature = faces[0].getObjectByName(featureName).clone();
    }

    feature.name = featureName;
    integratedFace.add(feature);
  }

  return integratedFace;
}

function integrateFeature(featureConfigs, featureName, randomize = true, stochasticity = 0.5) {
  const integratedFeature = new THREE.Group();

  const featureType = featureName.match(/[A-Z][a-z]*/g).join('_').toLowerCase();
  const featureComponents = Object.fromEntries(featureConfigs.map(({ face }) => [face.userData.name, face.getObjectByName(featureName)]));

  // Compute weights for each face
  const weights = featureConfigs.map(({ weight }) => weight);

  // Compute relative scale of the features compared to each other
  const featureScales = Object.fromEntries(Object.entries(featureComponents)
    .map(([name, feature]) => [name, new THREE.Vector3().setFromMatrixScale(feature.matrixWorld)]));
  const totalScale = Object.values(featureScales).reduce((sum, scale) => sum.add(scale), new THREE.Vector3(0, 0, 0));
  const scaleWeights = weights.map(weight => weight / totalScale.length());
  const relativeScales = Object.fromEntries(Object.entries(featureScales)
    .map(([name, scale]) => [name, scale.multiplyScalar(scaleWeights[weights.indexOf(featureConfigs.find(({ face }) => face.userData.name === name).weight)]))));

  // Compute relative position and orientation of the features compared to each other
  const featurePositions = Object.fromEntries(Object.entries(featureComponents)
    .map(([name, feature]) => [name, new THREE.Vector3().setFromMatrixPosition(feature.matrixWorld)]));
  const centroid = Object.values(featurePositions).reduce((sum, position) => sum.add(position), new THREE.Vector3(0, 0, 0)).multiplyScalar(1 / featureConfigs.length);
  const relativePositions = Object.fromEntries(Object.entries(featurePositions)
    .map(([name, position]) => [name, position.sub(centroid).multiplyScalar(scaleWeights[weights.indexOf(featureConfigs.find(({ face }) => face.userData.name === name).weight))])]));
  const relativeOrientations = Object.fromEntries(Object.entries(featureComponents)
    .map(([name, feature]) => [name, feature.getWorldQuaternion(new THREE.Quaternion()).invert()]));

  // Apply relative scales, positions, and orientations to the features
  for (let i = 0; i < featureConfigs.length; i++) {
    const { face, weight } = featureConfigs[i];
    const featureComponent = featureComponents[face.userData.name];
    const relativeScale = relativeScales[face.userData.name];
    const relativePosition = relativePositions[face.userData.name];
    const relativeOrientation = relativeOrientations[face.userData.name];

    let newFeatureComponent;
    if (randomize && Math.random() < stochasticity) {
      newFeatureComponent = featureComponent.clone();
      newFeatureComponent.scale.copy(new THREE.Vector3(1, 1, 1).lerp(relativeScale, Math.random()));
      newFeatureComponent.position.copy(new THREE.Vector3(0, 0, 0).lerp(relativePosition, Math.random()));
      newFeatureComponent.setRotationFromQuaternion(new THREE.Quaternion().slerp(relativeOrientation, Math.random()));
    } else {
      newFeatureComponent = featureComponent.clone();
      newFeatureComponent.scale.copy(relativeScale);
      newFeatureComponent.position.copy(relativePosition);
      newFeatureComponent.setRotationFromQuaternion(relativeOrientation);
    }

    integratedFeature.add(newFeatureComponent);
  }

  integratedFeature.name = featureName;
  return integratedFeature;
}


// ---------------------------------
// COnvenience Functions for modifying / merging facial features 
// ----------------------------------
function integrateNoses(faces, options = {}) {
  const features = {
    nose: {
      height: { 'nose-bridge': 0.5, 'lower-lateral-cartilage': 0.5 },
      width: { 'nasal-bone': 0.5, 'upper-lateral-cartilage': 0.25, 'lower-lateral-cartilage': 0.25 },
      depth: { 'nasal-bone': 0.5, 'lower-lateral-cartilage': 0.5 },
      nostrilSize: { 'nostril': 1 },
      nostrilFlare: { 'nostril': 1 },
    },
  };

  const mergedOptions = {
    features: { ...features, ...options.features },
    weights: options.weights,
  };

  return integrateFaces(faces, mergedOptions);
}

function integrateEyes(faces, options = {}) {
  const features = {
    eye: {
      height: { 'eyelid-top': 0.5, 'eyelid-bottom': 0.5 },
      width: { 'eyeball': 1 },
    },
  };

  const mergedOptions = {
    features: { ...features, ...options.features },
    weights: options.weights,
  };

  return integrateFaces(faces, mergedOptions);
}

function integrateMouths(faces, options = {}) {
  const features = {
    mouth: {
      height: { 'upper-lip': 0.5, 'lower-lip': 0.5 },
      width: { 'mouth': 1 },
      depth: { 'mouth': 1 },
    },
  };

  const mergedOptions = {
    features: { ...features, ...options.features },
    weights: options.weights,
  };

  return integrateFaces(faces, mergedOptions);
}

function integrateCheeks(faces, options = {}) {
  const features = {
    cheek: {
      height: { 'cheekbone': 0.5, 'buccal-region': 0.5 },
      width: { 'cheekbone': 0.5, 'buccal-region': 0.5 },
      depth: { 'cheekbone': 0.5, 'buccal-region': 0.5 },
    },
  };

  const mergedOptions = {
    features: { ...features, ...options.features },
    weights: options.weights,
  };

  return integrateFaces(faces, mergedOptions);
}

// Helper function to adjust the geometry of a feature
function adjustFeatureGeometry(face, featureName, adjustFn) {
  const feature = face.getObjectByName(featureName);
  if (!feature) {
    console.warn(`Feature ${featureName} not found in face.`);
    return;
  }
  feature.geometry = adjustFn(feature.geometry);
}

// Convenience function to scale a feature by a given factor
function scaleFeature(face, featureName, scale) {
  adjustFeatureGeometry(face, featureName, geometry => {
    geometry.scale(scale, scale, scale);
    return geometry;
  });
}

// Convenience function to rotate a feature around the X, Y, and/or Z axis
function rotateFeature(face, featureName, xRot = 0, yRot = 0, zRot = 0) {
  const feature = face.getObjectByName(featureName);
  if (!feature) {
    console.warn(`Feature ${featureName} not found in face.`);
    return;
  }
  feature.rotateX(xRot);
  feature.rotateY(yRot);
  feature.rotateZ(zRot);
}

// Convenience function to generate a set of random variations for a feature
function generateFeatureVariations(face, featureName, count = 5, adjustFn) {
  const feature = face.getObjectByName(featureName);
  if (!feature) {
    console.warn(`Feature ${featureName} not found in face.`);
    return;
  }
  const variations = [];
  for (let i = 0; i < count; i++) {
    const variation = feature.clone();
    if (adjustFn) {
      adjustFn(variation);
    }
    variations.push(variation);
  }
  return variations;
}

// Convenience function to generate a set of random nose variations
function generateNoseVariations(face, count = 5, adjustFn) {
  return generateFeatureVariations(face, 'nose', count, adjustFn);
}

// Convenience function to generate a set of random eye variations
function generateEyeVariations(face, count = 5, adjustFn) {
  return generateFeatureVariations(face, 'left-eye', count, adjustFn);
}

// Convenience function to generate a set of random mouth variations
function generateMouthVariations(face, count = 5, adjustFn) {
  return generateFeatureVariations(face, 'mouth', count, adjustFn);
}

// Convenience function to generate a set of random cheek variations
function generateCheekVariations(face, count = 5, adjustFn) {
  return generateFeatureVariations(face, 'left-cheek', count, adjustFn);
}



// ==============================
// Mouth and Jaw
// ==============================
// Function to create the mouth
function createMouth(options) {
  const mouthGroup = new THREE.Group();

  // Create the lips using BoxGeometry
  const lipsGeometry = new THREE.BoxGeometry(options.mouthWidth, options.lipHeight, options.mouthDepth);
  const lipsMaterial = new THREE.MeshPhongMaterial({ color: options.lipsColor });
  const upperLip = new THREE.Mesh(lipsGeometry, lipsMaterial);
  const lowerLip = new THREE.Mesh(lipsGeometry, lipsMaterial);
  upperLip.position.set(0, options.lipHeight / 2, 0);
  lowerLip.position.set(0, -options.lipHeight / 2, 0);
  mouthGroup.add(upperLip);
  mouthGroup.add(lowerLip);

  // Create the tongue
  const tongue = createTongue(options);
  tongue.position.set(0, -options.tongueHeight / 2, options.mouthDepth / 2);
  mouthGroup.add(tongue);

  // Create the oral cavity
  const oralCavity = createOralCavity(options);
  oralCavity.position.set(0, 0, options.mouthDepth / 2);
  mouthGroup.add(oralCavity);

  return mouthGroup;
}

// Function to create the jaw
function createJaw(options) {
  const jawGroup = new THREE.Group();

  // Create the lower jaw using BoxGeometry
  const jawGeometry = new THREE.BoxGeometry(options.jawWidth, options.jawHeight, options.jawDepth);
  const jawMaterial = new THREE.MeshPhongMaterial({ color: options.headColor });
  const jaw = new THREE.Mesh(jawGeometry, jawMaterial);
  jaw.position.set(0, -options.jawHeight / 2, options.headSize - options.jawDepth / 2);
  jawGroup.add(jaw);

  return jawGroup;
}

// Function to create the oral cavity
function createOralCavity(options) {
  const oralCavityGroup = new THREE.Group();

  // Create the inner mouth using BoxGeometry
  const innerMouthGeometry = new THREE.BoxGeometry(options.innerMouthWidth, options.innerMouthHeight, options.innerMouthDepth);
  const innerMouthMaterial = new THREE.MeshPhongMaterial({ color: options.innerMouthColor });
  const innerMouth = new THREE.Mesh(innerMouthGeometry, innerMouthMaterial);
  innerMouth.position.set(0, 0, options.innerMouthDepth / 2);
  oralCavityGroup.add(innerMouth);

  // Create the teeth using BoxGeometry
  const teethGeometry = new THREE.BoxGeometry(options.teethWidth, options.teethHeight, options.teethDepth);
  const teethMaterial = new THREE.MeshPhongMaterial({ color: options.teethColor });
  const teeth = new THREE.Mesh(teethGeometry, teethMaterial);
  teeth.position.set(0, -options.teethHeight / 2, options.innerMouthDepth / 2 + options.teethDepth / 2);
  oralCavityGroup.add(teeth);

  return oralCavityGroup;
}

// Function to create the tongue
function createTongue(options) {
  const tongueGeometry = new THREE.BoxGeometry(options.tongueWidth, options.tongueHeight, options.tongueDepth);
  const tongueMaterial = new THREE.MeshPhongMaterial({ color: options.tongueColor });
  const tongue = new THREE.Mesh(tongueGeometry, tongueMaterial);

  return tongue;
}

// -----------------------
// Speech Animations
// -----------------------

// Function to animate the jaw and mouth for a given phoneme
function animatePhenome(phenome, mouth, jaw, tongue, options, time) {
  const lipMovement = 0.2;
  switch (phenome) {
    case 'AA':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0.5);
      break;
    case 'AE':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0.5);
      break;
    case 'AH':
      // Open the jaw slightly and relax the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, 0, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0.5);
      break;
    case 'AO':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement);
      animateTongue(tongue, options, time, -0.5, 0.5, 0.5);
      break;
    case 'AW':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement);
      animateTongue(tongue, options, time, -0.5, 0.5, 0.5);
      break;
    case 'AY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0.5, 1, 0.5);
      break;
    case 'EH':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0.5);
      break;
    case 'ER':
      // Open the jaw slightly and round the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, 0, -1, lipMovement);
      animateTongue(tongue, options, time, 0.5, 0.5, 0.5);
      break;
    case 'EY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0.5, 1, 0.5);
      break;
    case 'IH':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'IY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -1, -1, lipMovement);
      animateTongue(tongue, options, time, 1, 1, 0.5);
      break;
    case 'OW':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement);
      animateTongue(tongue, options, time, -0.5, -0.5, 0.5);
      break;
    case 'OY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0.5, 1, 0.5);
      break;
    case 'UH':
      // Open the jaw slightly and round the lips
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, 0, -1, lipMovement);
      animateTongue(tongue, options, time, -0.5, -0.5, 0.5);
      break;
    case 'UW':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 1, 1, 0.5);
      break;
    case 'TH':
      // Place tongue between the teeth and blow air out to produce a hissing sound
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'DH':
      // Similar to TH sound, but voiced instead of voiceless
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'W':
      // Round the lips and blow air out to produce a vowel-like sound
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -0.5, -1, 0.5);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'Y':
      // Place tongue near the roof of the mouth and blow air out to produce a vowel-like sound
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -1, -1, 0.5);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'H':
      // Exhale a burst of air through the mouth
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -1, -1, 0.5);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'L':
      // Place tip of the tongue against the roof of the mouth and allow air to flow around it
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -1, -1, 0.5);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    case 'R':
      // Pronounced in different ways depending on dialect and speaker
      animateJaw(jaw, options, time, 0.5);
      animateMouth(mouth, options, time, -1, -1, 0.5);
      animateTongue(tongue, options, time, 0, 0, 0);
      break;
    default:
      console.log(`Phoneme not recognized: ${phenome}`);
  }
}




// Function to animate the jaw
function animateJaw(jaw, options, time, variation) {
  const movement = Math.sin(time * options.jawSpeed) * options.jawRange * variation;
  jaw.position.setY(options.headSize - options.jawHeight / 2 - movement);
}

// Function to animate the mouth
function animateMouth(mouth, options, time, tonguePosition, lipRoundness, lipMovement) {
  const upperLip = mouth.children[0];
  const lowerLip = mouth.children[1];
  const tongue = mouth.children[2];
  upperLip.position.setY(options.lipHeight / 2 + lipMovement);
  lowerLip.position.setY(-options.lipHeight / 2 - lipMovement);
  upperLip.scale.setX(1 + lipRoundness);
  lowerLip.scale.setX(1 + lipRoundness);
  animateTongue(tongue, options, time, tonguePosition, 0, 0);
}

// Function to animate the tongue
function animateTongue(tongue, options, time, position, elevation, variation) {
  const movement = Math.sin(time * options.tongueSpeed) * options.tongueRange * variation;
  tongue.position.setY(-options.tongueHeight / 2 + position * options.tongueRange + movement);
  tongue.position.setZ(options.mouthDepth / 2 - options.tongueDepth / 2 + elevation * options.tongueRange);
}


// ====================
// Face Model
// ====================

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
 
   // Create the nose
  const nose = createNose(options);
  nose.position.set(0, -options.noseHeight / 2, options.headSize - options.noseHeight / 2);
  faceGroup.add(nose);

  // Create the mouth and jaw
  const mouth = createMouth(options);
  const jaw = createJaw(options);
  jaw.add(mouth);
  faceGroup.add(jaw);


  // Create the cheek bones
  const { leftCheek, rightCheek } = createCheekBones(options);
  faceGroup.add(leftCheek);
  faceGroup.add(rightCheek);

  // Create the buccal region
  const buccal = createBuccalRegion(options);
  faceGroup.add(buccal);


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
  // Head
  headSize: 1,
  headColor: 0xf0c8a0,

  // Forehead
  eyebrowWidth: 0.15,
  eyebrowHeight: 0.04,
  eyebrowColor: 0x8b4513, // Saddle Brown
  eyebrowOffset: 0.04,
  eyebrowDepth: 0.02,
  corrugatorMuscleWidth: 0.06,
  corrugatorMuscleHeight: 0.02,
  corrugatorMuscleDepth: 0.1,
  corrugatorMuscleOffset: 0.02,

  // Eyes
  eyeSize: 0.1,
  eyeColor: 0x000000,
  eyeSeparation: 0.4,
  eyeHeight: 0.15,
  irisSize: 0.06,
  irisColor: 0x4169e1, // Royal Blue
  irisDepth: 0.01,
  pupilSize: 0.03,
  pupilDepth: 0.01,

  // Nose
  noseWidth: 0.1,
  noseHeight: 0.3,

  // Ears
  earWidth: 0.2,
  earHeight: 0.4,
  earDepth: 0.1,


 // Mouth options
  mouthWidth: 10,
  mouthHeight: 6,
  mouthDepth: 4,
  lipHeight: 1,
  lipsColor: 0xff69b4,
  tongueWidth: 6,
  tongueHeight: 2,
  tongueDepth: 2,
  tongueColor: 0xffa07a,

  // Jaw options
  jawWidth: 14,
  jawHeight: 8,
  jawDepth: 10,

  // Oral cavity options
  innerMouthWidth: 8,
  innerMouthHeight: 8,
  innerMouthDepth: 10,
  innerMouthColor: 0xffffff,
  teethWidth: 6,
  teethHeight: 4,
  teethDepth: 4,
  teethColor: 0xffff00,

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
