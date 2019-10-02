export function getColorArray(colorObj, pickBy) { 
    return Object.keys(colorObj).filter(key=> key.includes(pickBy)).map(key => ({name: key, value: colorObj[key]}))
  }

export function getBgTextBorderColorArray(themeObj) {
  const output = {
      background: getColorArray(themeObj, 'color-background'),
      text: getColorArray(themeObj, 'color-text'),
      border: getColorArray(themeObj, 'color-border'),
  }
  return output
}