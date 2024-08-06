import { WESTER_ZODIAC_SIGNS } from "../constants";

export const getSignLabel = (id: number) => {
  const label = WESTER_ZODIAC_SIGNS.filter((sign) => sign.value === id)[0].label;
  return label;
};
