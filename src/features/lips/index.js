import { createLipsModel, animateLips } from './lib/lips';
import { lipParametersMap } from './lib/lip_parameters';

export const Lips = {
  create: createLipsModel,
  animate: animateLips,
  parameters: lipParametersMap,
}
