import "dotenv/config";

export interface AppConfig {
  BASE_URL: string;
}

export default {
  name: "e-comm-app",
  version: "1.0.0",
  extra: {
    baseUrl: process.env.BASE_URL,
  },
};
