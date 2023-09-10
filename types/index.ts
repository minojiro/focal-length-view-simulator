export type SensorFormat = { name: string; width: number; height: number };

export type AngleItem = {
  id: number;
  sensorFormat: SensorFormat;
  lensFocalLength: number;
};
