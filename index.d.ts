type ResizeInterface = "wh" | "ww" | "sh" | "sw";

interface ReturnFunction {
  (num: number): number;
}

declare module "react-native-responsive-sizer" {
  export function resize(type: ResizeInterface, basis: number): ReturnFunction;
}
