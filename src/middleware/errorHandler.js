import logger from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  // Log the full error internally
  logger.error(err.stack || err.message);

  // Respond with JSON to the client
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};
