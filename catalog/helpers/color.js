export function getPropertyArray(colorObj, pickBy, keyLabel = "name") { 
    return Object.keys(colorObj).filter(key=> key.includes(pickBy)).map(key => ({[keyLabel]: key, value: colorObj[key]}))
  }

export function getThemeColorArrays(themeObj) {
  const output = {
      background: getPropertyArray(themeObj, 'color background'),
      text: getPropertyArray(themeObj, 'color text'),
      border: getPropertyArray(themeObj, 'color border'),
      shadow: getPropertyArray(themeObj, 'color shadow'),
  }
  return output
}