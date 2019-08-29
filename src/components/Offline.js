import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from '../actions/index';
import NetInfo from "@react-native-community/netinfo";
import { responsiveWidth, responsiveHeight, responsiveFontSize } from '../utils/Dimensions';

class Offline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: null
    }
  }
  componentDidMount() {
    this.subscription()
    this.isConnectedFetchInterval()
  }

  componentWillUnmount() {
    if (this.subscription && typeof this.subscription.remove === 'function') {
      this.subscription.remove()
      clearInterval(this.isConnectedFetchInterval)
    }
  }

  isConnectedFetchInterval = () =>
    setInterval(async () => {
      await NetInfo.isConnected.fetch()
    }, 100)

  subscription = () =>
    NetInfo.isConnected.addEventListener(
      'connectionChange',
      this.handleConnectionChange
    )

  handleConnectionChange = isConnected => {
    this.props.actions.checkNetwork(isConnected);
  }

  render() {
    return (
      !this.props.isConnected &&
      <View style={styles.container}>
        <Image source={require('../assets/images/network.png')} width={100} height={100}/>
        <TouchableHighlight onPress={()=>this.subscription()} style={styles.tryButton}>
          <Text style={styles.tryText}>
            Try Again
          </Text>
        </TouchableHighlight>
      </View>
    )

  }
}
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryButton:{
    backgroundColor: 'black',
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(2)
  },
  tryText:{
    color: '#fff',
    fontSize: responsiveFontSize(1.8)
  }
});

const mapStateToProps = (state) => {
  return {
    isConnected: state.network.isConnected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Offline);