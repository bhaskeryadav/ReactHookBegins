export const SUCCESS = "success";
export const COUNTRY = "country";
export const INDIA_KEY = "IN";
export const GLOBAL_KEY = "GLOBAL";

export const CHANNELS = {
  IN: {
    Defualt: "DEFAULT"
  },
  GLOBAL: {
    Commodities: "COMMODITIES"
  }
};

export const SUBSCRIBE_CHANNEL = "broadcastMsg";

export const getCountry = () => {
  return sessionStorage.getItem(COUNTRY);
};
