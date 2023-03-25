import * as THREE from 'three';
import { lipParametersMap } from './lip_parameters';

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

function createLipGeometry(shape, lipParameters) {
  const lipSegments = 50;

  const extrudeSettings = {
    steps: lipSegments,
    depth: lipParameters.depth,
    bevelEnabled: false
  };

  const lipExtrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  lipExtrudeGeometry.computeVertexNormals();

  return lipExtrudeGeometry;
}


function createLips(lipParameters) {
  const upperLipShape = createUpperLipShape(lipParameters);
  const upperLipGeometry = createLipGeometry(upperLipShape, lipParameters);
  const upperLipMaterial = new THREE.MeshBasicMaterial({ color: lipParameters.upperLipColor });
  const upperLip = new THREE.Mesh(upperLipGeometry, upperLipMaterial);

  const philtrumGeometry = createPhiltrumShape(lipParameters);
  const philtrumMaterial = new THREE.MeshBasicMaterial({ color: lipParameters.philtrumColor });
  const philtrum = new THREE.Mesh(philtrumGeometry, philtrumMaterial);
  philtrum.position.set(0, lipParameters.upperCurve * lipParameters.height / 2, lipParameters.depth / 2);

  const lowerLipShape = createLowerLipShape(lipParameters);
  const lowerLipGeometry = createLipGeometry(lowerLipShape, lipParameters);
  const lowerLipMaterial = new THREE.MeshBasicMaterial({ color: lipParameters.lowerLipColor });
  const lowerLip = new THREE.Mesh(lowerLipGeometry, lowerLipMaterial);
  lowerLip.position.y = -lipParameters.height;

  return { upperLip, philtrum, lowerLip };
}

export function createLipsModel(lipParameters) {
  if (lipParameters === undefined) {
    lipParameters = lipParametersMap['default'];
  }
  
  const lips = createLips(lipParameters);
  const lipModel = new THREE.Group();
  lipModel.add(lips.upperLip);
  lipModel.add(lips.philtrum);
  lipModel.add(lips.lowerLip);
  return lipModel;
}

export function animateLips(lipModel) {
  // Rotate the lips and philtrum
  lips.upperLip.rotation.y += 0.01;
  lips.philtrum.rotation.y += 0.01;
  lips.lowerLip.rotation.y += 0.01;
}



