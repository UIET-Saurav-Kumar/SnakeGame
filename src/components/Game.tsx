import * as React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../styles/color'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Coordinates, Direction, GestureEventType } from '../types/types'
import Snake from './snake'
import { checkGameOver } from '../utils/checkGameOver'
import Food from './Food'
import { checkEatsFood } from '../utils/checkEatsFood'
import { randomFoodPosition } from '../utils/randomFoodGenerator'
import Header from './Header'

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 } , { x: 4, y: 5 }, { x: 3, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 73 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 1;

export default function Game () : React.JSX.Element {


  const [direction , setDirection]  = React.useState<Direction>(Direction.Right)
  const [food , setFood]  = React.useState<Coordinates>(FOOD_INITIAL_POSITION)
  const [snake , setSnake]  = React.useState<Coordinates[]>(SNAKE_INITIAL_POSITION)
  const [score , setScore]  = React.useState<number>(0)
  const [gameOver , setGameOver] = React.useState<boolean>(false)
  const [isPaused , setIsPaused] = React.useState<boolean>(false)
  
  console.log("direction", direction)

  React.useEffect(() => {
   
    if(!gameOver && !isPaused) {

    const intervalId = setInterval(() => {
      console.log("yes sanke is running")
      snakeMovemet()
    } , 200)
    
 console.log(intervalId , "outside")
    return () =>
      { console.log(intervalId , "inside")
        clearInterval(intervalId) }
  }
  
  } , [snake , gameOver , isPaused ])

  const snakeMovemet = () => {
    const head = snake[0]

    const copyData = {...head}

    if(checkGameOver(copyData , GAME_BOUNDS )){
      setGameOver(true)
      return ;
    }

    switch (direction) {
      case  Direction.Right :
        copyData.x = copyData.x + 1
        break;
      case  Direction.Left :
        copyData.x = copyData.x - 1
        break;
      case  Direction.Down :
        copyData.y = copyData.y + 1
        break;
      case  Direction.Up :
        copyData.y = copyData.y - 1
        break;
      default : 
      break;
    }

    if(checkEatsFood(copyData , food , 2)){
      setSnake([copyData , ...snake ])
      setScore((pre) => pre+SCORE_INCREMENT)
      setFood(randomFoodPosition(GAME_BOUNDS.xMax , GAME_BOUNDS.yMax))
    }
    else{
        setSnake([copyData , ...snake ].slice(0, -1))
    }
   
  }

    const handleGesture = (event : GestureEventType) => {
      const {translationX , translationY}  = event.nativeEvent
      // console.log(translationX , translationY)

      if(Math.abs(translationX) >Math.abs(translationY) )
      {
        if(translationX > 0)
        {
          setDirection(Direction.Right)
        }else{
          setDirection(Direction.Left)
        }
      }else{
        if(translationY > 0)
          {
            setDirection(Direction.Down)
          }else{
            setDirection(Direction.Up)
          }
      }
    }

    const reloadGame = () => {
      setFood(FOOD_INITIAL_POSITION)
      setSnake(SNAKE_INITIAL_POSITION)
      setDirection(Direction.Right)
      setGameOver(false)
      setScore(0)
    }
    const pauseGame = () => {
      setIsPaused((pre) => !pre)
    }

    return (
        <PanGestureHandler onGestureEvent={handleGesture}>
        <SafeAreaView style={styles.container} >
          <Header reloadGame={reloadGame} pauseGame={pauseGame} isPaused={isPaused} score={score}/>
          <View style={styles.boundaries}>
            
            <Snake snake={snake} />
            <Food x={food.x} y={food.y} />
          </View>
        </SafeAreaView>
        </PanGestureHandler>
    )
}

const styles = StyleSheet.create({
 container : {
    flex : 1,
    backgroundColor : Colors.primary,
 },
 boundaries: {
  flex: 1,
  borderColor: Colors.primary,
  borderWidth: 12,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  backgroundColor: Colors.background,
  // marginTop : 10
},
})