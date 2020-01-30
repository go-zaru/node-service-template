// Generic example types; derived from acutal usage
export type StaticData = string | boolean | number | undefined;

export type AnyData = StaticData | object;

export interface OptionalData {
  [key:string]: AnyData | AnyData[];
}


export interface RequiredConfig {
  name:string;
}

export interface OptionalConfig {
  options?: AnyData[];
}

export interface ComposedConfig
  extends RequiredConfig, OptionalConfig, OptionalData {}

export interface ServiceConfig extends OptionalData {
  nameOfConfig: ComposedConfig;
}

export interface ServiceDependencies {}

export interface ServiceConstructor {
  new (depenendcies:ServiceDependencies):Service;
}
export interface Service {}

