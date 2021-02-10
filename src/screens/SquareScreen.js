// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ColorCounter from '../components/ColorCounter';
// const COLOR_INCREMENT = 15;

// const SquareScreen = () => {
//     const k=0;
//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);
//     const setColor = (color,change) => {
//     switch(color){
//         case 'red':
//             red + change>255 ||red+change<0 ? null : setRed(red+change);
//             return ; 

//         case 'green':
//             green + change>255 ||green+change<0 ? null : setGreen(green+change);
//             return ; 

//         case 'blue':
//             blue + change>255 ||blue+change<0 ? null : setBlue(blue+change);
//             return ; 
//          default:
//          return ;

//         }


//     }





//     return (


//         <View>
//             <ColorCounter
//                 onIncrease={() => setColor('red',  COLOR_INCREMENT)}
//                 onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
//                 color="Red" />
//             <ColorCounter
//                 onIncrease={() => setColor('blue' ,COLOR_INCREMENT)}
//                 onDecrease={() => setColor('blue' ,-1* COLOR_INCREMENT)}
//                 color="Blue" />
//             <ColorCounter
//                 onIncrease={() => setColor('green', COLOR_INCREMENT)}
//                 onDecrease={() => setColor('green' -1* COLOR_INCREMENT)}
//                 color="Green" />
//             <View style={{
//                 height: 150,
//                 width: 150,
//                 backgroundColor: `rgb( ${red}, ${green}, ${blue})`
//             }} />  </View>
//     );
// };

// const styles = StyleSheet.create({});
// export default SquareScreen;
import React, {useReducer} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';
const COLOR_INCREMENT = 15;
const reducer = (state, action) => {

    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount>255||state.red+action.amount<0 ? state :
                {...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount>255||state.green+action.amount<0 ? state
              : { ...state, green: state.green + action.amount  };
        case 'blue':
            return state.blue + action.amount>255||state.blue+action.amount<0 ? state
             :  { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (

        <View>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                 />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                 />
            <View style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb( ${state.red},${state.green},${state.blue} )`
                }}
            />
        </View>

    );
};
const styles = StyleSheet.create({});
export default SquareScreen;