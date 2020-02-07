import React from "react";
import { Catalog, pageLoader } from "catalog";

import { getPropertyArray } from "../helpers/color";

const loader = page => pageLoader(() => import(`../docs/${page}.md`));

export default function CatalogRoot({ currentTheme, jsTheme }) {
    const pages = [
        {
            path: "/",
            title: "Welcome",
            content: loader("welcome"),
            imports: { currentTheme: jsTheme }
        },
        {
            title: "Color",
            pages: [
                {
                    path: "/color/base",
                    title: "Base Color",
                    imports: {
                        colors: getPropertyArray(currentTheme, "color base")
                    },
                    content: loader("color/base")
                },
                {
                    path: "/color/text",
                    title: "Text Color",
                    imports: {
                        colorArray: getPropertyArray(currentTheme, "color text")
                    },
                    content: loader("color/text")
                },
                {
                    path: "/color/border",
                    title: "Border Color",
                    imports: {
                        colorArray: getPropertyArray(
                            currentTheme,
                            "color border"
                        )
                    },
                    content: loader("color/border")
                },
                {
                    path: "/color/background",
                    title: "Background Color",
                    imports: {
                        colorArray: getPropertyArray(
                            currentTheme,
                            "color background"
                        )
                    },
                    content: loader("color/background")
                },
                {
                    path: "/color/shadow",
                    title: "Shadow Color",
                    imports: {
                        colorArray: getPropertyArray(
                            currentTheme,
                            "color shadow"
                        )
                    },
                    content: loader("color/shadow")
                }
            ]
        },
        {
            title: "Layout",
            pages: [
                {
                    path: "/layout/breakpoint",
                    title: "Breakpoint",
                    imports: {
                        breakpoint: getPropertyArray(currentTheme, "breakpoint")
                    },
                    content: loader("layout/breakpoint")
                },
                {
                    path: "/layout/z-index",
                    title: "z-index",
                    imports: {
                        zIndex: getPropertyArray(currentTheme, "zIndex")
                    },
                    content: loader("layout/z-index")
                }
            ]
        },
        {
            title: "Sizing",
            pages: [
                {
                    path: "/sizing/font",
                    title: "Font",
                    imports: {
                        font: getPropertyArray(currentTheme, "font", "label")
                    },
                    content: loader("sizing/font")
                },
                {
                    path: "/sizing/line_height",
                    title: "Line Height",
                    imports: {
                        line_height: getPropertyArray(
                            currentTheme,
                            "line_height",
                            "label"
                        )
                    },
                    content: loader("sizing/line_height")
                },
                {
                    path: "/sizing/spacing",
                    title: "Spacing",
                    imports: {
                        spacing: getPropertyArray(currentTheme, "spacing")
                    },
                    content: loader("sizing/spacing")
                },
                {
                    path: "/sizing/radius",
                    title: "Border Radius",
                    imports: {
                        radiusArray: getPropertyArray(currentTheme, "radius")
                    },
                    content: loader("sizing/radius")
                }
            ]
        },
        {
            title: "Misc",
            pages: [
                {
                    path: "/misc/opcacity",
                    title: "Opacity",
                    imports: {
                        opacityArray: getPropertyArray(currentTheme, "opacity")
                    },
                    content: loader("misc/opacity")
                },
                {
                    path: "/misc/duration",
                    title: "Duration",
                    imports: {
                        duration: getPropertyArray(currentTheme, "duration")
                    },
                    content: loader("misc/duration")
                }
            ]
        }
    ];

    return (
        <Catalog
            title="Catalog"
            pages={pages}
            basePath="/SET-Docs"
            useBrowserHistory={true}
        />
    );
}
