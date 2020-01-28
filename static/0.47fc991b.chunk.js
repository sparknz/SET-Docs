webpackJsonp([0],{812:function(n,e,t){var o=t(11),r=t(45),a=t(294).PageRenderer;a.__esModule&&(a=a.default);var l=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:t(826)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,n.exports=l},826:function(n,e){n.exports='# Installation\n\n`yarn add @sparknz/set-tokens`\n\n# Consumption\n\n### Inline styling with nested json\n\n`import currentTheme from \'@sparknz/set-tokens/dist/docs/<your heme name>.json\'`\n\n```react\nshowSource: true\n---\n<div\n    style={{\n        padding: currentTheme.size.spacing8, \n        backgroundColor: currentTheme.color.background.default.default,\n    }}\n\n>\n    <h2 style={{color: currentTheme.color.text.main1.default}}>Hello World 1</h2>\n    <h2 style={{color: currentTheme.color.text.main2.default}}>Hello World 2</h2>\n</div>\n```\n\n# File types \n### Scss\n`import from \'@sparknz/set-tokens/dist/scss/pinkGreen_variables.scss\'`\n\n```\n$color-background-default-default: #999999;\n$color-background-default-invert: #999999;\n$color-background-alt-1-default: #000000;\n$color-background-alt-1-invert: #000000;\n$color-background-alt-2-default: #000000;\n...\n```\n\n### Nested json\n\n`import theme from \'@sparknz/set-tokens/dist/js/pinkGreen.json\'`\n\n```\n{\n  "color": {\n    "background": {\n      "default": {\n        "default": "#ffffff",\n        "invert": "#000000"\n      },\n      "alt1": {\n        "default": "#cccccc",\n        "invert": "#999999"\n      },\n      "alt2": {\n        "default": "#000000",\n        "invert": "#ffffff"\n...\n\n```\n\n### Flat json\n\n`import theme from \'@sparknz/set-tokens/dist/docs/pinkGreen.json\'`\n\n```\n{\n  "color-background-default-default": "#ffffff",\n  "color-background-default-invert": "#000000",\n  "color-background-alt-1-default": "#cccccc",\n  "color-background-alt-1-invert": "#999999",\n  "color-background-alt-2-default": "#000000",\n  "color-background-alt-2-invert": "#ffffff",\n  ...\n}\n\n```\n\n### Sketch palette\n\n`@sparknz/set-tokens/dist/sketch/pinkGreen_palettes.sketchpalette`\n\n```\n{\n  "compatibleVersion": "2.0",\n  "pluginVersion": "2.2",\n  "colors": [\n    {\n      "name": "color-background-default-default",\n      "red": "1.00",\n      "green": "1.00",\n      "blue": "1.00",\n      "alpha": 1\n    },\n    {\n      "name": "color-background-default-invert",\n      "red": "0.00",\n      "green": "0.00",\n      "blue": "0.00",\n      "alpha": 1\n    },\n    {\n      "name": "color-background-alt-1-default",\n      "red": "0.80",\n      "green": "0.80",\n      "blue": "0.80",\n      "alpha": 1\n    },\n...\n```'}});
//# sourceMappingURL=0.47fc991b.chunk.js.map