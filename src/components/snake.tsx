import { Fragment, JSX } from "react"
import { Coordinates } from "../types/types"
import { StyleSheet, View } from "react-native"
import { Colors } from "../styles/color"

interface SnakeProps {
    snake : Coordinates[],

}

export default function Snake ({snake} : SnakeProps) : JSX.Element {
  
    return (
        <Fragment>
            {
                snake?.map((position : Coordinates , index : number) => {
                   
                    const positionStyle = {
                        left : position.x * 10,
                        top : position.y * 10
                    }

                   return (<View key={index} style={[styles.snake , positionStyle ]} />)
                })
            }
      
        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake: {
      width: 15,
      height: 15,
      borderRadius: 7,
      backgroundColor: 'black',
      position: "absolute",
    },
  });