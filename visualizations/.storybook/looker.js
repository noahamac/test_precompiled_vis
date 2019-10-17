/** @format */

import { create } from "@storybook/theming";
import logo from "../src/looker_logo.png";
export default create({
  //base: "dark",

  colorPrimary: "#262D33",
  colorSecondary: "#009abf",
  appBorderColor: "#009abf",

  // // UI
  appBg: "#262D33",
  appContentBg: "white",
  appBorderColor: "#fff",
  appBorderRadius: 0,

  // // Typography
  // fontBase: '"Open Sans", sans-serif',
  // fontCode: "monospace",

  // // Toolbar default and active colors
  barTextColor: "white",
  barSelectedColor: "#FFF",
  barBg: "#262D33",
  // //
  // //   // Text colors
  textColor: "#c2770f",
  textInverseColor: "#d28a00",

  // //   barTextColor: 'white',
  // //   barSelectedColor: '#f1c400',
  // //   barBg: '#009abf',

  // // Form colors
  // inputBg: "#ddd",
  // inputBorder: "#ccc",
  // inputTextColor: "#262D33",
  // inputBorderRadius: 1,

  brandTitle: "Looker/Appnovation Visualizations",
  brandUrl: "https://www.looker.com/",
  brandImage: logo
});
