import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MyStackNavigator from "./config/MyStackNavigator";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  username: 'GAunins',
  password: 'test12345#',
  date: null,
  selectedProject: 'Select Project...',
  selectedProject2: 'Select Project...',
  selectedTask: 'Select Task...',
  timerStopped: 0,
  timerPaused: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'USERNAME_ENTERED':
      return {...state, username: action.payload.input};
    case 'PASSWORD_ENTERED':
      return {...state, password: action.payload.input};
    case 'DATE_SELECTED':
      return {...state, date: action.payload.date};
    case 'PROJECT_SELECTED':
      return {...state, selectedProject: action.payload.project};
    case 'PROJECT_SELECTED2':
      return {...state, selectedProject2: action.payload.project};
    case 'CLEAR_PROJECT':
      return {...state, selectedProject: 'Select Project...'};
    case 'CLEAR_PROJECT_TASK':
      return {...state, selectedProject2: 'Select Project...', selectedTask: 'Select Task...'};
    case 'TASK_SELECTED':
      return {...state, selectedTask: action.payload.task};
    case 'TIMER_STOPPED':
      return {...state, timerStopped: action.payload.counter};
    case 'TIMER_PAUSED':
      return {...state, timerPaused: action.payload.counter};
    default:
      return state;
  }
}
const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <MyStackNavigator/>
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });










// App entry point
// import React from 'react';
// import MyStackNavigator from "./config/MyStackNavigator";

// import {createStore} from 'redux';
// import {Provider} from 'react-redux';

// const initialState = {
//     username: 'GAunins',
//     password: 'test12345#',
//     date: null,
//     selectedProject: 'Select Project...',
//     selectedProject2: 'Select Project...',
//     selectedTask: 'Select Task...',
//     timerStopped: 0,
//     timerPaused: 0,
// }
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case 'USERNAME_ENTERED':
//             return {...state, username: action.payload.input};
//         case 'PASSWORD_ENTERED':
//             return {...state, password: action.payload.input};
//         case 'DATE_SELECTED':
//             return {...state, date: action.payload.date};
//         case 'PROJECT_SELECTED':
//             return {...state, selectedProject: action.payload.project};
//         case 'PROJECT_SELECTED2':
//             return {...state, selectedProject2: action.payload.project};
//         case 'CLEAR_PROJECT':
//             return {...state, selectedProject: 'Select Project...'};
//         case 'CLEAR_PROJECT_TASK':
//             return {...state, selectedProject2: 'Select Project...', selectedTask: 'Select Task...'};
//         case 'TASK_SELECTED':
//             return {...state, selectedTask: action.payload.task};
//         case 'TIMER_STOPPED':
//             return {...state, timerStopped: action.payload.counter};
//         case 'TIMER_PAUSED':
//             return {...state, timerPaused: action.payload.counter};
//         default:
//             return state;
//     }
// }
// const store = createStore(reducer);



// class App extends React.Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <MyStackNavigator/>
//             </Provider>
//         );
//     }
// }

// export default App;