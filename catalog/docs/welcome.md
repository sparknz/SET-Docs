# Installation

`yarn add @sparknz/set-tokens`

# File types 
### Scss
`import from '@sparknz/set-tokens/dist/scss/pinkGreen_variables.scss'`

```
$color-background-default-default: #999999;
$color-background-default-invert: #999999;
$color-background-alt-1-default: #000000;
$color-background-alt-1-invert: #000000;
$color-background-alt-2-default: #000000;
...
```

### Nested json

`import theme from '@sparknz/set-tokens/dist/js/pinkGreen.json'`

```
{
  "color": {
    "background": {
      "default": {
        "default": "#ffffff",
        "invert": "#000000"
      },
      "alt1": {
        "default": "#cccccc",
        "invert": "#999999"
      },
      "alt2": {
        "default": "#000000",
        "invert": "#ffffff"
...

```

### Flat json

`import theme from '@sparknz/set-tokens/dist/docs/pinkGreen.json'`

```
{
  "color-background-default-default": "#ffffff",
  "color-background-default-invert": "#000000",
  "color-background-alt-1-default": "#cccccc",
  "color-background-alt-1-invert": "#999999",
  "color-background-alt-2-default": "#000000",
  "color-background-alt-2-invert": "#ffffff",
  ...
}

```

### Sketch palette

`@sparknz/set-tokens/dist/sketch/pinkGreen_palettes.sketchpalette`

```
{
  "compatibleVersion": "2.0",
  "pluginVersion": "2.2",
  "colors": [
    {
      "name": "color-background-default-default",
      "red": "1.00",
      "green": "1.00",
      "blue": "1.00",
      "alpha": 1
    },
    {
      "name": "color-background-default-invert",
      "red": "0.00",
      "green": "0.00",
      "blue": "0.00",
      "alpha": 1
    },
    {
      "name": "color-background-alt-1-default",
      "red": "0.80",
      "green": "0.80",
      "blue": "0.80",
      "alpha": 1
    },
...
```

# Consumption

### Inline styling with nested json

```react
showSource: true
---
<div
    style={{
        padding: currentTheme.size.spacing.default.md, 
        backgroundColor: currentTheme.color.background.default.default,
    }}

>
    <h2 style={{color: currentTheme.color.main.default.default}}>Hello World 1</h2>
    <h2 style={{color: currentTheme.color.main.alt1.default}}>Hello World 2</h2>
</div>
```