import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redbox}></View>
      <View style={styles.bluebox}></View>
      <View style={styles.blackbox}></View>
      <View style={styles.yellowbox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 700
  },

redbox:{
  width:100,
  height: 100,
  backgroundColor: 'red',
  borderRadius: 100
},

bluebox:{
  width:200,
  height: 100,
  backgroundColor: 'blue'
},

blackbox:{
  width:100,
  height: 150,
  backgroundColor: 'black'
},

yellowbox:{
  width:500,
  height: 100,
  backgroundColor: 'yellow'
},

});
