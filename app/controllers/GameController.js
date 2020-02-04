import GameService from "../services/GameService.js"

// NOTE Private stuff

let _gameService = new GameService()


function _draw() {
  let target = _gameService.Target
  document.getElementById("health").innerText = target.health
}


// NOTE Public
export default class GameController {
  constructor() {
    console.log("The controller works")
    _draw()
  }

  slap() {
    _gameService.slap()
    _draw()
  }


}



