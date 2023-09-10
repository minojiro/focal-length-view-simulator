import { SensorFormat } from "~/types";

export const SENSOR_FORMATS: SensorFormat[] = [
  {
    name: "35mm フルサイズ",
    width: 36,
    height: 24,
  },
  {
    name: "中判（FUJIFILM GFX）",
    width: 43.8,
    height: 32.9,
  },
  {
    name: "APS-C（SONY, NIKON, CANONなど）",
    width: 23.6,
    height: 15.8,
  },
  {
    name: "APS-C（FUJIFILM X）",
    width: 23.5,
    height: 15.6,
  },
  {
    name: "マイクロフォーサーズ",
    width: 17.3,
    height: 13.0,
  },
  {
    name: "1型センサー",
    width: 13.2,
    height: 8.8,
  },
  {
    name: "1/1.7型センサー（iPhone14など）",
    width: 7.5,
    height: 5.6,
  },

  {
    name: "1/2.3型センサー",
    width: 6.2,
    height: 4.7,
  },
];

export const COLORS: string[] = [
  "#d827a9",
  "#f97272",
  "#21b2a5",
  "#fabe22",
  "#3bc0f8",
  "#6517e6",
  "#37d39a",
];
