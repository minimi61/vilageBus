import Constants from "expo-constants";

const ENV = {
 dev: {
   apiUrl: 'fS2lEqjSxbLDWk9WgGzAu71%2F6%2FcEdswoXARBwK3MgL2%2Fj%2F15RBan%2BbFuDbXQ5yuHiOnEbGySD19nB7c3gm1Zvg%3D%3D',
 },
 staging: {
   apiUrl: "[your.staging.api.here]",
 },
 prod: {
   apiUrl: "[your.production.api.here]",
   // Add other keys you want here
 }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
 // What is __DEV__ ?
 // This variable is set to true when react-native is running in Dev mode.
 // __DEV__ is true when run locally, but false when published.
 if (__DEV__) {
   return ENV.dev;
 } else if (env === 'staging') {
   return ENV.staging;
 } else if (env === 'prod') {
   return ENV.prod;
 }
};

export default getEnvVars;