// Create a face object with properties for the face and mouth
const face = {
  width: 500,
  height: 500,
  centerX: 250,
  centerY: 250,
  mouth: {
    width: 150,
    height: 50,
    y: 300,
  },
};

// Initialize the p5.speech object for speech synthesis
const speech = new p5.Speech();

document.addEventListener("DOMContentLoaded", () => {
  // Set up the D3.js SVG container
  const svg = d3
    .select("#face-container")
    .append("svg")
    .attr("width", face.width)
    .attr("height", face.height);

  // Render the face
  renderFace(svg);

  // Set up the speech synthesis
  speech.onEnd = () => {
    // Reset the mouth to the original position after speaking
    animateMouth(svg, face.mouth.height);
  };
  // Speak and animate the mouth
  speakAndAnimateMouth("Hello, I am your chatbot!");
});

function renderFace(svg) {
  // Draw the face circle
  svg
    .append("circle")
    .attr("cx", face.centerX)
    .attr("cy", face.centerY)
    .attr("r", face.width / 2)
    .attr("fill", "#fff")
    .attr("stroke", "#000")
    .attr("stroke-width", 2);

  // Draw the mouth
  svg
    .append("rect")
    .attr("x", face.centerX - face.mouth.width / 2)
    .attr("y", face.mouth.y)
    .attr("width", face.mouth.width)
    .attr("height", face.mouth.height)
    .attr("fill", "#000")
    .attr("stroke", "#000")
    .attr("stroke-width", 2);
}


function animateMouth(svg, currentPhoneme, nextPhoneme) {
  const mouth = svg.select("rect");
  let currentHeight, currentY, nextHeight, nextY, duration;
  switch (currentPhoneme) {
    case "AA":
    case "AE":
    case "AH":
    case "AO":
    case "AW":
    case "AY":
    case "EH":
    case "ER":
    case "EY":
    case "IH":
    case "IY":
    case "OW":
    case "OY":
    case "UH":
    case "UW":
      currentHeight = face.mouth.height * 1.2;
      currentY = face.mouth.y - currentHeight / 2;
      break;
    case "B":
    case "D":
    case "F":
    case "G":
    case "JH":
    case "K":
    case "L":
    case "M":
    case "N":
    case "NG":
    case "P":
    case "R":
    case "S":
    case "SH":
    case "T":
    case "TH":
    case "V":
    case "W":
    case "Y":
    case "Z":
    case "ZH":
      currentHeight = face.mouth.height * 0.2;
      currentY = face.mouth.y + currentHeight / 2;
      break;
    default:
      currentHeight = face.mouth.height;
      currentY = face.mouth.y;
  }
  switch (nextPhoneme) {
    case "AA":
    case "AE":
    case "AH":
    case "AO":
    case "AW":
    case "AY":
    case "EH":
    case "ER":
    case "EY":
    case "IH":
    case "IY":
    case "OW":
    case "OY":
    case "UH":
    case "UW":
      nextHeight = face.mouth.height * 1.2;
      nextY = face.mouth.y - nextHeight / 2;
      break;
    case "B":
    case "D":
    case "F":
    case "G":
    case "JH":
    case "K":
    case "L":
    case "M":
    case "N":
    case "NG":
    case "P":
    case "R":
    case "S":
    case "SH":
    case "T":
    case "TH":
    case "V":
    case "W":
    case "Y":
    case "Z":
    case "ZH":
      nextHeight = face.mouth.height * 0.2;
      nextY = face.mouth.y + nextHeight / 2;
      break;
    default:
      nextHeight = face.mouth.height;
      nextY = face.mouth.y;
  }
  duration = currentPhoneme === "" ? 0 : 200;
  mouth
    .interrupt()
    .transition()
    .duration(duration)
    .attr("y", currentY)
    .attr("height", currentHeight)
    .transition()
    .duration(Math.abs(speech.getPhrase().length - speech.getWordIndex()) * 200)
    .attr("y", nextY)
    .attr("height", nextHeight);
}


function speakAndAnimateMouth(text) {
  speech.speak(text);
  const phonemes = speech.getWordDetails(text).map((word) => word.phoneme);
  let i = 0;
  const intervalId = setInterval(() => {
    animateMouth(svg, phonemes[i]);
    i++;
    if (i === phonemes.length) clearInterval(intervalId);
  }, 200);
  speech.onEnd = () => {
    clearInterval(intervalId);
    animateMouth(svg, "");
  };
}


function animateMouth(svg, currentPhoneme, nextPhoneme) {
  const mouth = svg.select("rect");
  const currentKeyframe = getKeyframe(currentPhoneme);
  const nextKeyframe = getKeyframe(nextPhoneme);
  const duration = currentPhoneme === "" ? 0 : 200;
  const interpolator = d3.interpolateObject(currentKeyframe, nextKeyframe);
  d3.select({}).transition().duration(duration).tween("interpolate", function() {
    return function(t) {
      const interpolatedKeyframe = interpolator(t);
      applyKeyframe(svg, interpolatedKeyframe);
    };
  });
}

function getKeyframe(phoneme) {
  switch (phoneme) {
    case "AA":
    case "AE":
    case "AH":
    case "AO":
    case "AW":
    case "AY":
    case "EH":
    case "ER":
    case "EY":
    case "IH":
    case "IY":
    case "OW":
    case "OY":
    case "UH":
    case "UW":
      return {
        mouthHeight: 1.2,
        eyebrowRotation: -0.1,
        eyeRotation: 0.1,
      };
    case "B":
    case "D":
    case "F":
    case "G":
    case "JH":
    case "K":
    case "L":
    case "M":
    case "N":
    case "NG":
    case "P":
    case "R":
    case "S":
    case "SH":
    case "T":
    case "TH":
    case "V":
    case "W":
    case "Y":
    case "Z":
    case "ZH":
      return {
        mouthHeight: 0.2,
        eyebrowRotation: 0.5,
        eyeRotation: -0.1,
      };
    default:
      return {
        mouthHeight: 1,
        eyebrowRotation: 0,
        eyeRotation: 0,
      };
  }
}

function applyKeyframe(svg, keyframe) {
  const mouth = svg.select("rect");
  const eyebrows = svg.select("rect");
  const leftEye = svg.select("ellipse").filter(".left");
  const rightEye = svg.select("ellipse").filter(".right");
  mouth.attr("y", face.mouth.y - face.mouth.height * keyframe.mouthHeight / 2)
    .attr("height", face.mouth.height * keyframe.mouthHeight);
  eyebrows.attr("transform", `rotate(${face.eyebrows.rotation + keyframe.eyebrowRotation} ${face.centerX} ${face.eyebrows.y})`);
  leftEye.attr("transform", `rotate(${face.eyes.rotation + keyframe.eyeRotation} ${face.centerX - face.eyes.left.x} ${face.eyes.y})


