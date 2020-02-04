import Target from "../models/Target.js"


let _target = new Target({ name: "Bob", health: 100, attacks: { slap: 1, kick: 10, punch: 5 } })

export default class GameService {
  slap() {
    _target.health -= _target.attacks.slap
    console.log(_target)
  }
  constructor() {
    console.log("Game service works!")
  }

  get Target() {
    return new Target(_target)
  }
}