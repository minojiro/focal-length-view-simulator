const getAngle = (sensorSideSize: number, lensFocalLength: number) => {
  return 2 * Math.atan(sensorSideSize / (2 * lensFocalLength));
};

export const getFrameRatio = (
  baseSensorSideSizeA: number,
  lensFocalLengthA: number,
  baseSensorSideSizeB: number,
  lensFocalLengthB: number
) => {
  const angleA = getAngle(baseSensorSideSizeA, lensFocalLengthA);
  const angleB = getAngle(baseSensorSideSizeB, lensFocalLengthB);
  return angleB / angleA;
};

export const getDiagonalSize = (width: number, height: number) => {
  // just pythagoras...
  return Math.sqrt(width ** 2 + height ** 2);
};
