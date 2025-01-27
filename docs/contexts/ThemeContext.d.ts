/// <reference types="react" />
export interface ThemeContextState {
    theme: "light" | "dark";
    toggleTheme: () => void;
}
declare const ThemeContext: import('react').Context<ThemeContextState>;
declare const ThemeContextProvider: ({ children }: {
    children: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export { ThemeContext, ThemeContextProvider };
