'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Animation,
  Text,
  TouchableHighlight,
  View,
  DeviceEventEmitter
} = React;

var WebViewApp = React.createClass({
    componentDidMount() {
        console.log('Mounted');
        var subscription = DeviceEventEmitter.addListener(
            'MyCustomEvent',
            () => console.log('Incoming', arguments)
        );
    },


    render() {
        return <Text style={{backgroundColor: 'white', padding: 20}}>hi</Text>
    }
});



AppRegistry.registerComponent('RCTTest', () => WebViewApp);