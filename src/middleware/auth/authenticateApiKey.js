import dotenv from "dotenv";
dotenv.config();

/**
 * Middleware: authenticateApiKey
 * Protects routes by validating the `x-api-key` header.
 *
 * Usage:
 *   router.get("/secure", authenticateApiKey, controllerFunction);
 */
export const authenticateApiKey = (req, res, next) => {
  const apiKeyHeader = req.headers["x-api-key"];
  const validApiKey = process.env.API_KEY;

  // Missing API key
  if (!apiKeyHeader) {
    return res.status(401).json({
      success: false,
      message: "API key required",
    });
  }

  // Invalid API key
  if (apiKeyHeader !== validApiKey) {
    return res.status(403).json({
      success: false,
      message: "Invalid API key",
    });
  }

  // Valid key → proceed
  req.authType = "apiKey"; // optional, in case you want to log later
  next();
};
