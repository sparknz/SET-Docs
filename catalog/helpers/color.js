export function getColorArray(colorObj, pickBy, keyLabel = "name") { 
    return Object.keys(colorObj).filter(key=> key.includes(pickBy)).map(key => ({[keyLabel]: key, value: colorObj[key]}))
  }

export function getBgTextBorderColorArray(themeObj) {
  const output = {
      background: getColorArray(themeObj, 'color-background'),
      text: getColorArray(themeObj, 'color-text'),
      border: getColorArray(themeObj, 'color-border'),
  }
  return output
}