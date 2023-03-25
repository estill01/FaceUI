const lipParameters = {
  width: 2,
  height: 1,
  depth: 0.5,
  upperCurve: 0.7,
  lowerCurve: 0.3,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
  upperLipColor: 0xff8888,
  philtrumColor: 0xffcccc,
  lowerLipColor: 0xff8888
};

const thinLipsParameters = {
  width: 2,
  height: 0.8,
  depth: 0.5,
  upperCurve: 0.5,
  lowerCurve: 0.2,
  tubercleHeight: 0.1,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const fullLipsParameters = {
  width: 2,
  height: 1.2,
  depth: 0.5,
  upperCurve: 0.8,
  lowerCurve: 0.7,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const wideLipsParameters = {
  width: 2.5,
  height: 1,
  depth: 0.5,
  upperCurve: 0.7,
  lowerCurve: 0.3,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const narrowLipsParameters = {
  width: 1.5,
  height: 1,
  depth: 0.5,
  upperCurve: 0.7,
  lowerCurve: 0.3,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const prominentCupidsBowLipsParameters = {
  width: 2,
  height: 1,
  depth: 0.5,
  upperCurve: 0.9,
  lowerCurve: 0.3,
  tubercleHeight: 0.3,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const heartShapedLipsParameters = {
  width: 2,
  height: 1,
  depth: 0.5,
  upperCurve: 0.9,
  lowerCurve: 0.4,
  tubercleHeight: 0.3,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const downTurnedLipsParameters = {
  width: 2,
  height: 1.2,
  depth: 0.5,
  upperCurve: 0.6,
  lowerCurve: 0.8,
  tubercleHeight: 0.1,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const upTurnedLipsParameters = {
  width: 2,
  height: 1.2,
  depth: 0.5,
  upperCurve: 0.8,
  lowerCurve: 0.4,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const unevenLipsParameters = {
  width: 2,
  height: 1,
  depth: 0.5,
  upperCurve: 0.6,
  lowerCurve: 0.3,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

const goldilocksLipsParameters = {
  width: 2,
  height: 1,
  depth: 0.5,
  upperCurve: 0.7,
  lowerCurve: 0.6,
  tubercleHeight: 0.2,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};
const overfilledLipsParameters = {
  width: 2.2,
  height: 1.5,
  depth: 0.6,
  upperCurve: 0.9,
  lowerCurve: 0.9,
  tubercleHeight: 0.25,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};
const protrudingUpperLipParameters = {
  width: 2,
  height: 1.1,
  depth: 0.7,
  upperCurve: 0.8,
  lowerCurve: 0.3,
  tubercleHeight: 0.3,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};
const protrudingLowerLipParameters = {
  width: 2,
  height: 1.1,
  depth: 0.5,
  upperCurve: 0.5,
  lowerCurve: 0.8,
  tubercleHeight: 0.15,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};
const thinUpperFullLowerLipParameters = {
  width: 2,
  height: 1.2,
  depth: 0.5,
  upperCurve: 0.4,
  lowerCurve: 0.7,
  tubercleHeight: 0.1,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};
const fullUpperThinLowerLipParameters = {
  width: 2,
  height: 1.2,
  depth: 0.5,
  upperCurve: 0.8,
  lowerCurve: 0.3,
  tubercleHeight: 0.3,
  philtrumWidth: 0.1,
  philtrumDepth: 0.1,
};

export const lipParametersMap = {
  random: () => {
    const keys = Object.keys(lipParametersMap);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return lipParametersMap[randomKey];
  },
  default: lipParameters,
  thin: thinLipsParameters,
  full: fullLipsParameters,
  wide: wideLipsParameters,
  narrow: narrowLipsParameters,
  prominentCupidsBow: prominentCupidsBowLipsParameters,
  heartShaped: heartShapedLipsParameters,
  downTurned: downTurnedLipsParameters,
  upTurned: upTurnedLipsParameters,
  uneven: unevenLipsParameters,
  goldilocks: goldilocksLipsParameters,
  overfilled: overfilledLipsParameters,
  protrudingUpper: protrudingUpperLipParameters,
  protrudingLower: protrudingLowerLipParameters,
  thinUpperFullLower: thinUpperFullLowerLipParameters,
  fullUpperThinLower: fullUpperThinLowerLipParameters,
};

export {
  lipParameters,
  thinLipsParameters,
  fullLipsParameters,
  wideLipsParameters,
  narrowLipsParameters,
  prominentCupidsBowLipsParameters,
  heartShapedLipsParameters,
  downTurnedLipsParameters,
  upTurnedLipsParameters,
  unevenLipsParameters,
  goldilocksLipsParameters,
  overfilledLipsParameters,
  protrudingUpperLipParameters,
  protrudingLowerLipParameters,
  thinUpperFullLowerLipParameters,
  fullUpperThinLowerLipParameters,
};

