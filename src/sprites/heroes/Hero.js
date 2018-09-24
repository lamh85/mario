import Sprite from '../Sprite.js'

const Hero = class extends Sprite {
  constructor(options){
    super(options)

    this.name = options.name
    this.health = options.health
    this.jumpHeight = options.jumpHeight
  }

  healthChange(increment) {
    this.healthChange += increment
  }

  livesChange(increment){
    this.livesChange += increment
  }

  // Client-controller actions ===========

  jump(){
  }

  squat(){
  }

  advance(){

  }
}

export default Hero