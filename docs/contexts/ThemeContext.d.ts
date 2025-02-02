import { Theme } from './ThemeEnum';
export interface ThemeContextState {
    theme: Theme;
    toggleTheme: () => void;
}
declare const ThemeContext: import('react').Context<ThemeContextState>;
declare const ThemeContextProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export { ThemeContext, ThemeContextProvider };
