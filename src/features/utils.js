
// COLORATION

function generateFeatureMapping(baseColorProfile, relativeValueMapping) {
  const generatedMapping = {};

  for (const feature in relativeValueMapping) {
    const value = relativeValueMapping[feature];
    generatedMapping[feature] = baseColorProfile.base.clone().multiplyScalar(value);
  }

  return generatedMapping;
}

function generateVariations(baseColor, numberOfVariations = 5) {
  const hStep = 0;
  const sStep = 0.025;
  const lStep = 0.05;

  const naturalLanguageDescriptors = {
    lightest: 0,
    light: 1,
    medium: Math.floor((numberOfVariations - 1) / 2),
    dark: numberOfVariations - 2,
    darkest: numberOfVariations - 1,
  };

  const result = new Proxy(
    { base: baseColor },
    {
      get(target, variation) {
        if (variation === 'base') {
          return target.base;
        }
        if (!target.hasOwnProperty(variation)) {
          let index;
          if (naturalLanguageDescriptors.hasOwnProperty(variation)) {
            index = naturalLanguageDescriptors[variation];
          } else {
            index = parseInt(variation.slice(1));
          }
          if (!isNaN(index) && index >= 0 && index < numberOfVariations) {
            const h = hStep * index;
            const s = sStep * index;
            const l = lStep * (index - (numberOfVariations - 1) / 2);
            target[variation] = baseColor.clone().offsetHSL(h, s, l);
          } else {
            return undefined;
          }
        }
        return target[variation];
      },
    }
  );
  return result;
}

 const ethnicityBaseColors = {
   // European
   caucasian:  generateVariations(new THREE.Color('#FFC8A0')) ,
   caucasianNorth: generateVariations(new THREE.Color('#F1D1B3')),
   caucasianSouth: generateVariations(new THREE.Color('#E8B79C')),

   // African
   african: generateVariations(new THREE.Color('#8D5524')),
   africanNorth: generateVariations(new THREE.Color('#C68642')),
   africanSouth: generateVariations(new THREE.Color('#6C4A2C')),

   // Asian
   eastAsian: generateVariations(new THREE.Color('#FFDBAC')),
   southAsian: generateVariations(new THREE.Color('#E0AC69')),
   southeastAsian: generateVariations(new THREE.Color('#F1C27D')),

   // Middle Eastern
   middleEastern: generateVariations(new THREE.Color('#FFDCB2')),
   arabian: generateVariations(new THREE.Color('#E5B589')),

   // Hispanic
   hispanic: generateVariations(new THREE.Color('#D1A775')),
   mestizo: generateVariations(new THREE.Color('#C58C60')),

   // Native American
   nativeAmerican: generateVariations(new THREE.Color('#DCAB88')),

   // Pacific Islander
   pacificIslander: generateVariations(new THREE.Color('#EAB897')),

   // Mixed Ethnicity
   mixed: generateVariations(new THREE.Color('#F1BF92')),

   // Other Ethnicities
   sami: generateVariations(new THREE.Color('#ECD0B7')),
   inuit: generateVariations(new THREE.Color('#E6C59E')),
   aboriginalAustralian: generateVariations(new THREE.Color('#B3722D')),
   dravidian: generateVariations(new THREE.Color('#B25929')),

   // East Asian
   mongolian: generateVariations(new THREE.Color('#FFD2A9')),

   // South Asian
   sinhalese: generateVariations(new THREE.Color('#D69F6B')),

   // Southeast Asian
   malay: generateVariations(new THREE.Color('#DEAA77')),

   // Central Asian
   tajik: generateVariations(new THREE.Color('#E2B08F')),
   uzbek: generateVariations(new THREE.Color('#E4BD95')),

   // West Asian
   armenian: generateVariations(new THREE.Color('#F4C8A4')),
   azerbaijani: generateVariations(new THREE.Color('#E7B590')),

   // African
   ethiopian: generateVariations(new THREE.Color('#9C4C31')),

   // Indigenous Peoples
   maori: generateVariations(new THREE.Color('#C39064')),

   // Jewish Diaspora
   ashkenaziJewish: generateVariations(new THREE.Color('#F3C6A2')),
 };

const nonNaturalBaseColors = {
  // Vibrant Colors
   vibrantBlue: generateVariations(new THREE.Color('#2E7DFF')),
   vibrantGreen: generateVariations(new THREE.Color('#00D45C')),
   vibrantRed: generateVariations(new THREE.Color('#FF3B30')),
   vibrantPurple: generateVariations(new THREE.Color('#AF52DE')),
   vibrantPink: generateVariations(new THREE.Color('#FF6AC1')),
   vibrantOrange: generateVariations(new THREE.Color('#FF9500')),
   vibrantYellow: generateVariations(new THREE.Color('#FFCC00')),
   vibrantCyan: generateVariations(new THREE.Color('#00D8FF')),
   vibrantMagenta: generateVariations(new THREE.Color('#FF2D8D')),

   // Muted Colors
   mutedBlue: generateVariations(new THREE.Color('#7A9ABE')),
   mutedGreen: generateVariations(new THREE.Color('#6E9F71')),
   mutedRed: generateVariations(new THREE.Color('#BF817D')),
   mutedPurple: generateVariations(new THREE.Color('#8F7C9A')),
   mutedPink: generateVariations(new THREE.Color('#D8A2AE')),
   mutedOrange: generateVariations(new THREE.Color('#D89F72')),
   mutedYellow: generateVariations(new THREE.Color('#CDBD8A')),
   mutedCyan: generateVariations(new THREE.Color('#7AA6B8')),
   mutedMagenta: generateVariations(new THREE.Color('#C284A1')),

   // Pastel Colors
   pastelBlue: generateVariations(new THREE.Color('#A8D3FF')),
   pastelGreen: generateVariations(new THREE.Color('#B5D9A5')),
   pastelRed: generateVariations(new THREE.Color('#FFA8A0')),
   pastelPurple: generateVariations(new THREE.Color('#C8A8E9')),
   pastelPink: generateVariations(new THREE.Color('#FFC6E3')),
   pastelOrange: generateVariations(new THREE.Color('#FFD8A8')),
   pastelYellow: generateVariations(new THREE.Color('#FFF2A8')),
   pastelCyan: generateVariations(new THREE.Color('#A8EFFF')),
   pastelMagenta: generateVariations(new THREE.Color('#FFA8D8')),

   // Metallic Colors
   metallicSilver: generateVariations(new THREE.Color('#C0C0C0')),
   metallicGold: generateVariations(new THREE.Color('#D4AF37')),
   metallicBronze: generateVariations(new THREE.Color('#CD7F32')),
   metallicCopper: generateVariations(new THREE.Color('#B87333')),

   // Neon Colors
   neonBlue: generateVariations(new THREE.Color('#4D4DFF')),
   neonGreen: generateVariations(new THREE.Color('#54FF9F')),
   neonRed: generateVariations(new THREE.Color('#FF3030')),
   neonPurple: generateVariations(new THREE.Color('#BD33A4')),
   neonPink: generateVariations(new THREE.Color('#FF007F')),
   neonOrange: generateVariations(new THREE.Color('#FF7F00')),
   neonYellow: generateVariations(new THREE.Color('#FFFF00')),
   neonCyan: generateVariations(new THREE.Color('#00FFFF')),
   neonMagenta: generateVariations(new THREE.Color('#FF00FF')),  

  // Earth Tones
   earthSlate: generateVariations(new THREE.Color('#708090')),
   earthOlive: generateVariations(new THREE.Color('#808000')),
   earthTerracotta: generateVariations(new THREE.Color('#D2691E')),
   earthBeige: generateVariations(new THREE.Color('#F5F5DC')),
   earthSienna: generateVariations(new THREE.Color('#A0522D')),
   earthUmber: generateVariations(new THREE.Color('#8B4513')),
   earthMoss: generateVariations(new THREE.Color('#8B8B00')),
   earthTuscan: generateVariations(new THREE.Color('#D2B48C')),

   // Sunset Colors
   sunsetPink: generateVariations(new THREE.Color('#FF9E9D')),
   sunsetOrange: generateVariations(new THREE.Color('#FF9A3C')),
   sunsetGold: generateVariations(new THREE.Color('#FFD700')),
   sunsetMauve: generateVariations(new THREE.Color('#C17A94')),
   sunsetAmber: generateVariations(new THREE.Color('#FFBF00')),
   sunsetCrimson: generateVariations(new THREE.Color('#DC143C')),
   sunsetIndigo: generateVariations(new THREE.Color('#4B0082')),

   // Jewel Tones
   jewelEmerald: generateVariations(new THREE.Color('#50C878')),
   jewelSapphire: generateVariations(new THREE.Color('#082567')),
   jewelRuby: generateVariations(new THREE.Color('#E0115F')),
   jewelAmethyst: generateVariations(new THREE.Color('#9966CC')),
   jewelTopaz: generateVariations(new THREE.Color('#FFC87C')),
   jewelAquamarine: generateVariations(new THREE.Color('#7FFFD4')),
   jewelGarnet: generateVariations(new THREE.Color('#DC3545')),
}



// Usage Example -- move this somewhere else
const lipRelativeValueMapping = {
  upperLip: 0.95,
  lowerLip: 1.05,
  philtrum: 0.9,
};

const lipColorProfiles = {
  caucasian: generateFeatureMapping(baseColors.caucasian, lipRelativeValueMapping),
  african: generateFeatureMapping(baseColors.african, lipRelativeValueMapping),
  // Add other ethnicities in the same manner
};

// const chosenLipProfile = lipColorProfiles.caucasian;
const chosenLipProfile = lipColorProfiles.caucasian.dark;

const upperLipColor = chosenLipProfile.upperLip;
const lowerLipColor = chosenLipProfile.lowerLip;
const philtrumColor = chosenLipProfile.philtrum;

