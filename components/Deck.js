import React from 'react'
import {View, Text} from 'react-native'
import { connect } from 'react-redux'
import { receiveEntries } from '../actions'
import { getEntries } from '../utils/api'
import {handleInitialData} from '../actions'

class Deck extends React.Component{
    componentDidMount(){
        // const {dispatch} = this.props
        // getEntries()
        // .then((entries) => {
        //     dispatch(receiveEntries(entries))
        // })
        this.props.dispatch(handleInitialData())
    }
    render(){
        const {entries} = this.props
        console.log("inside render" + typeof entries)
        return (
            <View>
                <Text>krjfhjjjjjjjjjjjj</Text>
                {Object.values(entries).map((entry) => {
                    return (
                    <View key={entry.title}>
                        <Text>{entry.title}</Text>
                        <Text>{entry.questions.length}</Text>
                    </View>
                    )
                })}
            </View> 
        )
    }
}
function mapStateToProps(entries){
    return {
        entries
    };
}
export default connect(mapStateToProps)(Deck)