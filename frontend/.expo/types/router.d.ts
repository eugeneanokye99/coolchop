/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/_sitemap` | `/customer` | `/explore` | `/location` | `/login` | `/signup` | `/vendor` | `/verify`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
