import React from 'react';
import { Catalog, pageLoader } from "catalog";

import { getColorArray, getBgTextBorderColorArray } from '../helpers/color';

const loader = (page) =>
  pageLoader(() => import(`../docs/${page}.md`));


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
          imports: { colors: getColorArray(currentTheme, 'color-base') },
          content: loader("color/base"),
        },
        {
          path: "/color/theme",
          title: "Theme Color",
          imports: getBgTextBorderColorArray(currentTheme),
          content: loader("color/theme"),
        }
      ]
    },
    {
      title: "Layout",
      pages: [
        {
          path: "/layout/breakpoint",
          title: "Breakpoint",
          imports: { breakpoint: getColorArray(currentTheme, 'breakpoint') },
          content: loader("layout/breakpoint"),
        },
        {
          path: "/layout/z-index",
          title: "z-index",
          imports: { zIndex: getColorArray(currentTheme, 'z-index') },
          content: loader("layout/z-index"),
        }
      ]
    },
    {
      title: "Sizing",
      pages: [
        {
          path: "/sizing/font",
          title: "Font",
          imports: { font: getColorArray(currentTheme, 'font', 'label') },
          content: loader("sizing/font"),
        },
        {
          path: "/sizing/spacing",
          title: "Spacing",
          imports: { spacing: getColorArray(currentTheme, 'spacing') },
          content: loader("sizing/spacing"),
        },
      ]
    }
  ];

  return <Catalog title="Catalog" pages={pages} basePath='/SET-Docs'  useBrowserHistory={true}  />

}


