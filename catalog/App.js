import React, { useState } from "react";
import theDefault from "@sparknz/set-tokens/dist/docs/default.json";
import halloween from "@sparknz/set-tokens/dist/docs/halloween.json";

import default_js from "@sparknz/set-tokens/dist/js/default.json";
import halloween_js from "@sparknz/set-tokens/dist/js/halloween.json";

import ThemeSelector from "./components/ThemeSelector";
import CatalogRoot from "./components/CatalogRoot";

export default function App() {
    const [selectedTheme, onThemeChange] = useState("Default");
    const themes = {
        Default: theDefault,
        Halloween: halloween
    };

    const jsThemes = {
        Default: default_js,
        Halloween: halloween_js
    };

    return (
        <div>
            <ThemeSelector
                onChange={e => onThemeChange(e.target.value)}
                value={selectedTheme}
                options={Object.keys(themes)}
            />
            <CatalogRoot
                currentTheme={themes[selectedTheme]}
                jsTheme={jsThemes[selectedTheme]}
            />
        </div>
    );
}
