declare module "topojson-client" {
  // Minimal module declaration to satisfy TypeScript in this project setup.
  // We intentionally keep this loose because the app only uses `feature()`.
  export function feature(topology: any, object: any): any;
}
