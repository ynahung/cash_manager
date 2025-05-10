const API_CONFIG = {
  // Use hardcoded dev environment for now
  dev: {
    baseUrl: "http://localhost:8000",
    endpoints: {
      transactions: "/api/transactions/",
    },
  },
};

// Use dev environment directly
const env = "dev";

// Log the environment and configuration for debugging
console.log('Environment:', env);
console.log('Available environments:', Object.keys(API_CONFIG));

// Export the full URL for each endpoint
export const API_ENDPOINTS = {
  transactions: `${API_CONFIG[env].baseUrl}${API_CONFIG[env].endpoints.transactions}`,
};

// Export the full configuration for the current environment
export const config = API_CONFIG[env];
