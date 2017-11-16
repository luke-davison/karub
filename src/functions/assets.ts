const assetPath = '/static/image/'

export function getTileAsset(num: number): string {
  return assetPath + 'tile' + String(num) + '.jpeg'
}

export function getAdventurerAsset(num: number): string {
  return assetPath + 'adventurer' + getColorFromNumber(num) + '.png'
}

export function getTempleAsset(num: number): string {
  return assetPath + 'temple' + getColorFromNumber(num) + '.png'
}

export function getGemAsset(num: number): string {
  switch (num) {
    case 1: return assetPath + 'diamond.png'
    case 2: return assetPath + 'gold.png'
  }
}

function getColorFromNumber(num: number) {
  switch (num) {
    case 1: return 'blue'
    case 2: return 'orange'
    case 3: return 'purple'
    case 4: return 'brown'
  }
}
