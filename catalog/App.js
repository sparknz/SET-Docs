import React, {useState} from 'react'
import pinkGreen from '@sparknz/set-tokens/dist/docs/pinkGreen.json';
import purpleOrange from '@sparknz/set-tokens/dist/docs/purpleOrange.json';
import halloween from '@sparknz/set-tokens/dist/docs/halloween.json';

import pinkGreen_js from '@sparknz/set-tokens/dist/js/pinkGreen.json';
import purpleOrange_js from '@sparknz/set-tokens/dist/js/purpleOrange.json';
import halloween_js from '@sparknz/set-tokens/dist/js/halloween.json';



import ThemeSelector from './components/ThemeSelector';
import CatalogRoot from './components/CatalogRoot';

export default function App(){
    const [selectedTheme, onThemeChange] = useState('Pink Green');
    const themes = {
        "Pink Green": pinkGreen,
        "Purple Orange": purpleOrange,
        "Halloween": halloween
    };

    const jsThemes = {
        "Pink Green": pinkGreen_js,
        "Purple Orange": purpleOrange_js,
        "Halloween": halloween_js
    }

    return (
        <div>
            <ThemeSelector onChange={e=>onThemeChange(e.target.value)} value={selectedTheme} options={Object.keys(themes)}/>
            <CatalogRoot currentTheme={themes[selectedTheme]} jsTheme={jsThemes[selectedTheme]}/>
        </div>
    )
}