import {StartingPlacement} from '../interfaces'

const numberOfTiles = 36
const numberOfExplorers = 4
const numberOfStartingPlaces = 12
const minDistanceBetweenStartingPlaces = 3

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

export function randomiseStartingPlacements(): {temples: Array<StartingPlacement>, explorers: Array<StartingPlacement>} {
  const temples: Array<StartingPlacement> = []
  for (let id = 1; id <= numberOfExplorers; id++) {
    let degrees = newRandomInt()
    while (notAlreadyTaken(temples, degrees)) {
      degrees = newRandomInt()
    }
    temples.push({id, degrees})
  }
  
  const explorers: Array<StartingPlacement> = []
  for (let id = 1; id <= numberOfExplorers; id++) {
    let degrees = newRandomInt()
    while (notAlreadyTaken(explorers, degrees) && notTooCloseToTemple(id, degrees)) {
      degrees = newRandomInt()
    }
    explorers.push({id, degrees})
  }
  return {temples, explorers}

  
  function notAlreadyTaken(arr: Array<StartingPlacement>, degrees): boolean {
    return !!arr.find(placement => placement.degrees === degrees)
  }
  function notTooCloseToTemple(id: number, degrees: number): boolean {
    const temple = temples.find(temple => temple.id === id)
    return degrees + temple.degrees < minDistanceBetweenStartingPlaces || numberOfStartingPlaces * 2 - degrees - temple.degrees < minDistanceBetweenStartingPlaces
  }
  function newRandomInt(): number {
    return Math.floor(Math.random() * numberOfStartingPlaces)
  }
}