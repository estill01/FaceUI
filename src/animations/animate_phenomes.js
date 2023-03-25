function animatePhenome(phenome, mouth, jaw, tongue, options, time) {
  const lipMovement = 0.2;
  const currentMouthWidth = mouth.scale.x;
  const currentJawPosition = jaw.position.y;
  const currentTonguePosition = tongue.position.z;
  switch (phenome) {
    case 'AA':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'AE':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'AH':
      // Open the jaw slightly and relax the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'AO':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, 0.5, 0.5, currentTonguePosition);
      break;
    case 'AW':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, 0.5, 0.5, currentTonguePosition);
      break;
    case 'AY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, 1, 0.5, currentTonguePosition);
      break;
    case 'EH':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, 0, 0.5, currentTonguePosition);
      break;
    case 'ER':
      // Place the tongue near the roof of the mouth and round the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0.5, 0.5, currentTonguePosition);
      break;
    case 'EY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, 0.5, 0.5, currentTonguePosition);
      break;
    case 'IH':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'IY':
      // Spread the lips and raise the front of the tongue toward the roof of the mouth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, 1, 0.5, currentTonguePosition);
      break;
    case 'OW':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, -0.5, 0.5, currentTonguePosition);
      break;
    case 'OY':
      // Open the jaw slightly and spread the lips
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, -0.5, 0.5, currentTonguePosition);
      break;
    case 'UH':
      // Open the jaw wide and round the lips
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 1, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, -0.5, 0.5, currentTonguePosition);
      break;
    case 'UW':
      // Open the jaw wide and round the lips, then raise the back of the tongue toward the roof of the mouth
      animateJaw(jaw, options, time, 1, currentJawPosition);
      animateMouth(mouth, options, time, 1, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, -1, 0.5, currentTonguePosition);
      break;
    case 'B':
      // Close the lips and activate the vocal cords
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'CH':
      // Narrow the opening between the tongue and the roof of the mouth and release a burst of air
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 1, 0.5, currentTonguePosition);
      break;
    case 'D':
      // Close the lips and activate the vocal cords, then release
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'DH':
      // Close the lips and place the tip of the tongue between the upper front teeth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, 0, 0.5, currentTonguePosition);
      break;
    case 'F':
      // Place the upper teeth on the lower lip and release a burst of air
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'G':
      // Close the lips and activate the vocal cords, then release. Also activate the back of the tongue
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, -0.5, 0.5, currentTonguePosition);
      break;
    case 'HH':
      // Open the mouth and breathe out, no vocal cords are used
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0, currentTonguePosition);
      break;
    case 'JH':
      // Close the lips and release a burst of air while vibrating the vocal cords
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 1, 0.5, currentTonguePosition);
      break;
    case 'K':
      // Close the lips and activate the vocal cords, then release. Also activate the back of the tongue
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, -0.5, 0.5, currentTonguePosition);
      break;
    case 'L':
      // Place the tip of the tongue on the roof of the mouth behind the front teeth and release air
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, -1, 0.5, currentTonguePosition);
      break;
    case 'M':
      // Close the lips and release air through the nose
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'N':
      // Close the lips and release air through the nose while placing the tip of the tongue on the roof of the mouth behind the front teeth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, -1, 0.5, currentTonguePosition);
      break;
    case 'NG':
      // Close the lips and release air through the nose while raising the back of the tongue to the roof of the mouth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, -0.5, -1, 0.5, currentTonguePosition);
      break;
    case 'P':
      // Close the lips and release a burst of air
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'R':
      // Vibrate the tongue while positioning it close to the roof of the mouth behind the front teeth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 0.5, -1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, -1, 1, currentTonguePosition);
      break;
    case 'S':
      // Narrow the opening between the tongue and the roof of the mouth while releasing air
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, -1, 0.5, currentTonguePosition);
      break;
    case 'SH':
      // Narrow the opening between the tongue and the roof of the mouth while releasing air, but with the tongue further forward
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, 0, 0.5, currentTonguePosition);
      break;
    case 'T':
      // Close the lips and activate the vocal cords, then release. Also place the tip of the tongue behind the upper front teeth
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0.5, -1, 0.5, currentTonguePosition);
      break;
    case 'TH':
      // Close the lips and place the tip of the tongue between the upper and lower front teeth, then exhale
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, 1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, 0, 0.5, currentTonguePosition);
      break;
    case 'V':
      // Place the upper teeth on the lower lip and release a burst of air while activating the vocal cords
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0, 0.5, currentTonguePosition);
      break;
    case 'W':
      // Shape the lips as for 'OO', but with the tongue positioned further forward
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 0, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, 0.5, 0.5, currentTonguePosition);
      break;
    case 'Y':
      // Shape the lips as for 'EE', but with the tongue positioned further back
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 0, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 0, -0.5, 0.5, currentTonguePosition);
      break;
    case 'Z':
      // Narrow the opening between the tongue and the roof of the mouth while releasing air and activating the vocal cords
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, -1, 0.5, currentTonguePosition);
      break;
    case 'ZH':
      // Narrow the opening between the tongue and the roof of the mouth while releasing air and activating the vocal cords, but with the tongue further forward
      animateJaw(jaw, options, time, 0.5, currentJawPosition);
      animateMouth(mouth, options, time, -1, 1, lipMovement, currentMouthWidth);
      animateTongue(tongue, options, time, 1, 0, 0.5, currentTonguePosition);
      break;
    default:
      console.log('Phenome not recognized: ' + phenome);
  }
}

function animateJaw(jaw, options, time, targetJawPosition, currentJawPosition) {
  const t = Math.min(1, (time - jaw.startTime) / options.jawDuration);

  const newPosition = currentJawPosition + (targetJawPosition - currentJawPosition) * t;
  const deltaY = newPosition - jaw.position.y;
  jaw.position.y += deltaY;

  const deltaZ = options.jawTranslate * Math.sin(Math.PI * t);
  jaw.position.z = options.headSize - options.jawSize - deltaZ;
}

function animateMouth(mouth, options, time, targetMouthWidth, targetMouthOpenness, lipMovement, currentMouthWidth, currentMouthOpenness, currentMouthDepth) {
  const t = Math.min(1, (time - mouth.startTime) / options.mouthDuration);

  const newWidth = currentMouthWidth + (targetMouthWidth - currentMouthWidth) * t;
  const deltaWidth = newWidth - mouth.scale.x;
  mouth.scale.x += deltaWidth;

  const newOpenness = currentMouthOpenness + (targetMouthOpenness - currentMouthOpenness) * t;
  const deltaY = options.mouthTranslateY * newOpenness;
  mouth.position.y = -options.noseHeight / 2 - options.mouthHeight / 2 - deltaY;

  const newDepth = currentMouthDepth + (options.mouthDepth / 2 * (1 - newOpenness)) * t;
  const deltaDepth = newDepth - mouth.scale.z;
  mouth.scale.z += deltaDepth;

  const deltaZ = options.mouthTranslateZ * newOpenness + lipMovement * Math.sin(Math.PI * t);
  mouth.position.z = options.headSize - mouth.scale.z / 2 - deltaZ;
}

function animateTongue(tongue, options, time, targetTonguePositionX, targetTonguePositionY, targetTongueOpenness, currentTonguePosition) {
  const t = Math.min(1, (time - tongue.startTime) / options.tongueDuration);

  const newPositionX = currentTonguePosition.x + (targetTonguePositionX - currentTonguePosition.x) * t;
  const deltaX = newPositionX - tongue.position.x;
  tongue.position.x += deltaX;

  const newPositionY = currentTonguePosition.y + (targetTonguePositionY - currentTonguePosition.y) * t;
  const deltaY = newPositionY - tongue.position.y;
  tongue.position.y += deltaY;

  const newOpenness = options.tongueOpenness + (targetTongueOpenness - options.tongueOpenness) * t;
  const deltaZ = options.tongueTranslateZ * newOpenness + Math.sin(Math.PI * t);
  tongue.position.z = options.headSize - options.mouthDepth - options.tongueSize / 2 - deltaZ;
}

