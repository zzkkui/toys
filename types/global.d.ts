declare module "*.module.less" {
  const styles: { readonly [key: string]: string };
  export default styles;
}

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

declare type Recordable<T = any> = Record<string, T>;
