export type SensorFormat = { name: string; width: number; height: number };

export type AngleItem = {
  id: number;
  color: string;
  sensorFormat: SensorFormat;
  lensFocalLength: number;
};
