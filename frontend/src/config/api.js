const API_CONFIG = {
  // Development environment
  dev: {
    baseUrl: "http://localhost:8000",
    endpoints: {
      transactions: "/api/transactions/",
    },
  },
  // Production environment
  prod: {
    baseUrl: "https://api.yourdomain.com",
    endpoints: {
      transactions: "/api/transactions/",
    },
  },
};

// Get environment from process.env.REACT_APP_ENV or default to 'dev'
const env = process.env.REACT_APP_ENV || "dev";

// Get the appropriate configuration based on environment
const config = API_CONFIG[env];

// Export the full URL for each endpoint
export const API_ENDPOINTS = {
  transactions: `${config.baseUrl}${config.endpoints.transactions}`,
};
