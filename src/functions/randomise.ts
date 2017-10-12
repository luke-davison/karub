const numberOfTiles = 36
const numberOfExplorers = 4
const numberOfStartingPlaces = 12
const minDistanceBetweenStartingPlaces = 30

export function randomiseTiles(): Array<number> {
  const sorted: Array<number> = []
  for (let i = 1; i <= numberOfTiles; i++) {
    sorted.push(i)
  }
  const randomised: Array<number> = []
  while (sorted.length > 0) {
    const r = Math.floor(Math.random()*sorted.length)
    randomised.push(sorted.splice(r, 1)[0])
  }
  return randomised
}

export function randomiseStartingPlacements(): {temples: Array<number>, explorers: Array<number>} {
  const temples: Array<number> = []
  for (let id = 1; id <= numberOfExplorers; id++) {
    let position = newRandomInt()
    while (notAlreadyTaken(temples, position)) {
      position = newRandomInt()
    }
    temples.push(position)
  }
  
  const explorers: Array<number> = []
  for (let id = 1; id <= numberOfExplorers; id++) {
    let position = newRandomInt()
    while (notAlreadyTaken(explorers, position) && notTooCloseToTemple(id, position)) {
      position = newRandomInt()
    }
    explorers.push(position)
  }
  return {temples, explorers}

  
  function notAlreadyTaken(arr: Array<number>, position): boolean {
    return !!arr.find(placement => placement === position)
  }
  function notTooCloseToTemple(id: number, position: number): boolean {
    const temple = temples[id]
    return position + temple < minDistanceBetweenStartingPlaces || numberOfStartingPlaces * 2 - position - temple < minDistanceBetweenStartingPlaces
  }
  function newRandomInt(): number {
    return Math.floor(Math.random() * numberOfStartingPlaces * 10)
  }
}