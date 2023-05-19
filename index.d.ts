interface ResizeInterface {
  type: "wh" | "ww" | "sh" | "sw";
}
interface ReturnFunction {
  (num: number): number;
}

declare module "react-native-responsive-resizer" {
  export function resize(type: ResizeInterface, basis: number): ReturnFunction;
}
