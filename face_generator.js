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

function integrateFaces(faces) {
  // Compute the relative scale and orientation of the face components
  const scaleRatios = {};
  const componentNames = Object.keys(faces[0]);

  for (const componentName of componentNames) {
    const componentSizes = faces.map((face) => face[componentName]?.width);
    const nonZeroSizes = componentSizes.filter((size) => size > 0);

    if (nonZeroSizes.length === faces.length) {
      // All faces have this component, so compute the scale ratio
      const minSize = Math.min(...componentSizes);
      const maxSize = Math.max(...componentSizes);
      const scaleRatio = maxSize / minSize;
      scaleRatios[componentName] = scaleRatio;
    }
  }

function integrateFaces(faces, options = {}) {
  const { weights = {}, features = {} } = options;

  // Compute the relative scale and orientation of the face components
  const scaleRatios = {};
  const componentNames = Object.keys(faces[0]);

  for (const componentName of componentNames) {
    const componentSizes = faces.map((face) => face[componentName]?.width);
    const nonZeroSizes = componentSizes.filter((size) => size > 0);

    if (nonZeroSizes.length === faces.length) {
      // All faces have this component, so compute the scale ratio
      const minSize = Math.min(...componentSizes);
      const maxSize = Math.max(...componentSizes);
      const scaleRatio = maxSize / minSize;
      scaleRatios[componentName] = scaleRatio;
    }
  }

  // Create a new object to store the integrated face configuration
  const integratedFace = {};

  for (const componentName of componentNames) {
    if (!features.hasOwnProperty(componentName)) {
      continue;
    }

    const featureOptions = features[componentName];
    const components = faces.map((face, index) => {
      const weight = weights[index] || 1;
      const component = face[componentName];
      return component != null && weight > 0 ? { weight, component } : null;
    }).filter((component) => component != null);

    if (components.length === 0) {
      continue;
    }

    // Determine the component to use for each property based on the feature options
    const integratedComponent = {};
    const propertyNames = Object.keys(featureOptions);

    for (const propertyName of propertyNames) {
      const options = featureOptions[propertyName];
      const componentWeights = components.map((component) => {
        const weight = options.hasOwnProperty(component.component.type) ? options[component.component.type] : 0;
        return weight * component.weight;
      });
      const totalWeight = componentWeights.reduce((sum, weight) => sum + weight, 0);

      if (totalWeight > 0) {
        const componentValues = components.map((component) => component.component[propertyName]);
        const weightedValues = componentValues.map((value, index) => value * componentWeights[index] / totalWeight);
        const integratedValue = weightedValues.reduce((sum, value) => sum + value, 0);
        integratedComponent[propertyName] = integratedValue;
      }
    }

    // Integrate the component sizes based on the scale ratios
    const scaleRatio = scaleRatios[componentName] || 1;

    if (integratedComponent.hasOwnProperty('width')) {
      const nonZeroWidths = components.map((component) => component.component.width).filter((width) => width > 0);
      const minWidth = Math.min(...nonZeroWidths);
      const maxWidth = Math.max(...nonZeroWidths);
      const integratedWidth = maxWidth * scaleRatio;
      integratedComponent.width = integratedWidth;
    }

    if (integratedComponent.hasOwnProperty('height')) {
      const nonZeroHeights = components.map((component) => component.component.height).filter((height) => height > 0);
      const minHeight = Math.min(...nonZeroHeights);
      const maxHeight = Math.max(...nonZeroHeights);
      const integratedHeight = maxHeight * scaleRatio;
      integratedComponent.height = integratedHeight;
    }

    if (integratedComponent.hasOwnProperty('depth')) {
      const nonZeroDepths = components.map((component) =>


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
