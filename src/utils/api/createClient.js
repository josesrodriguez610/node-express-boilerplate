import dotenv from "dotenv";
dotenv.config();

import axios from "axios";
import logger from "../logger.js";

export function createClient({ baseURL, name, defaultBody }) {
  const client = axios.create({
    baseURL,
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });

  client.interceptors.request.use((config) => {
    if (["post", "put", "patch"].includes(config.method)) {
      config.data = { ...(defaultBody || {}), ...(config.data || {}) };
    }
    logger.info(`[${name} →] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  });

  client.interceptors.response.use(
    (response) => {
      logger.info(`[${name} ←] ${response.status} ${response.config.url}`);
      return response;
    },
    (error) => {
      const { response } = error;
      if (response) {
        const { status, config } = response;
        const label =
          status >= 500
            ? "Server error"
            : status >= 400
            ? "Client error"
            : "Unexpected error";
        logger.error(`[${name} ${label}] ${status} at ${config.url}`);
      } else {
        logger.error(`[${name} Network Error] ${error.message}`);
      }
      return Promise.reject(error);
    }
  );

  return client;
}
