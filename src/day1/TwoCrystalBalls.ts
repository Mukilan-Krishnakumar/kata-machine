export default function two_crystal_balls(breaks: boolean[]): number {

  let first_ball: number = 0;
  let second_ball: number = 0;
  while(breaks[first_ball] === false){
    second_ball = first_ball;
    first_ball += Math.floor(Math.sqrt(breaks.length));
  }
  while (second_ball < first_ball){
    if(breaks[second_ball] === true){
      return second_ball
    }
    second_ball += 1
  }
  return -1;
}
