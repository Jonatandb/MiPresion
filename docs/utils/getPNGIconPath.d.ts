import { Theme } from '../contexts/ThemeEnum';
export type imageType = "pill" | "pencil" | "heart";
declare const getPNGIconPath: (imageName: imageType, theme?: Theme) => string;
export default getPNGIconPath;
