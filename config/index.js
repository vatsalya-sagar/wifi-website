const dev = process.env.NODE_ENV !== "production";
export const BASEPATH = dev
  ? "https://wp.wifiattendance.com/"
  : "https://wp.wifiattendance.com/";
