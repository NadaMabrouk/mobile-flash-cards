import * as React from "react";
import { View, Text } from "react-native";
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import Deck from "./components/Deck";
import reducer from './reducers'
import middleware from './middleware'

class App extends React.Component{
  render(){
    return (
      <Provider store={createStore(reducer,middleware)}>
          <View>
            <Deck />
          </View>
      </Provider>
    )
  }
}

export default App
