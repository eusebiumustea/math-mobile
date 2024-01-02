import React, {useState, useRef, useMemo} from 'react';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Appearance,
} from 'react-native';

export default function Matrics4x() {
  const defTheme = Appearance.getColorScheme();

  const [x1, setNumber1] = useState(0);
  function onNumber1Changed(e) {
    setNumber1(Number(e));
  }
  const [x2, setNumber2] = useState(0);
  function onNumber2Changed(e) {
    setNumber2(Number(e));
  }
  const [x3, setNumber3] = useState(0);
  function onNumber3Changed(e) {
    setNumber3(Number(e));
  }
  const [x4, setNumber4] = useState(0);
  function onNumber4Changed(e) {
    setNumber4(Number(e));
  }

  const [y1, setNumber5] = useState(0);

  function onNumber5Changed(e) {
    setNumber5(Number(e));
  }
  const [y2, setNumber6] = useState(0);

  function onNumber6Changed(e) {
    setNumber6(Number(e));
  }
  const [y3, setNumber7] = useState(0);

  function onNumber7Changed(e) {
    setNumber7(Number(e));
  }
  const [y4, setNumber8] = useState(0);

  function onNumber8Changed(e) {
    setNumber8(Number(e));
  }

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);

  function calc() {
    setResult1(x1 * y1 + x2 * y3);
    setResult2(x3 * y1 + x4 * y3);
    setResult3(x1 * y2 + x2 * y4);
    setResult4(x3 * y2 + x4 * y4);
  }

  const solutionsplit1 = [`${x1} x ${y1} + ${x2} x ${y3}`];
  const solutionsplit2 = [`${x3} x ${y1} + ${x4} x ${y3}`];
  const solutionsplit3 = [`${x1} x ${y2} + ${x2} x ${y4}`];
  const solutionsplit4 = [`${x3} x ${y2} + ${x4} x ${y4}`];
  const orientation = useDeviceOrientation();

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: orientation.landscape ? 'row' : 'column',
        top: orientation.portrait ? 50 : 0,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.matrics}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber1Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber3Changed}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.matrics2}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber2Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber4Changed}
            keyboardType={'numeric'}
          />
        </View>
        <Text
          style={{
            fontSize: 40,
            paddingLeft: 20,
            paddingRight: 20,
            color: defTheme == 'dark' ? 'white' : 'black',
            alignSelf: 'center',
          }}>
          <Text style={{color: defTheme == 'dark' ? 'yellow' : 'blue'}}>X</Text>
        </Text>
        <View style={styles.matrics}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber5Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber7Changed}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.matrics2}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber6Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber8Changed}
            keyboardType={'numeric'}
          />
        </View>
        <TouchableHighlight
          underlayColor={'lightblue'}
          style={{
            backgroundColor: 'blue',
            justifyContent: 'center',
            borderRadius: 25,
            elevation: 3,
            top: 20,
            marginLeft: 20,
          }}
          onPress={() => calc()}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              color: 'white',
              fontStyle: 'italic',
            }}>
            Equal
          </Text>
        </TouchableHighlight>
      </View>
      <View style={{top: 30}}>
        <Text style={{color: 'limegreen', fontSize: 30}}>Solve: </Text>
        <Text
          style={{fontSize: 25, fontStyle: 'italic', color: 'darkslategrey'}}>
          {solutionsplit1}
        </Text>
        <Text
          style={{fontSize: 25, fontStyle: 'italic', color: 'darkslategrey'}}>
          {solutionsplit3}
        </Text>
        <Text
          style={{fontSize: 25, fontStyle: 'italic', color: 'darkslategrey'}}>
          {solutionsplit2}
        </Text>
        <Text
          style={{fontSize: 25, fontStyle: 'italic', color: 'darkslategrey'}}>
          {solutionsplit4}
        </Text>
      </View>
      <View style={{flexDirection: 'row', top: 55}}>
        <Text style={{fontSize: 30, color: 'teal'}}>Result: </Text>
        <View>
          <Text style={{fontSize: 45, color: 'green', paddingRight: 20}}>
            {result1}
          </Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result2}</Text>
        </View>
        <View>
          <Text style={{fontSize: 45, color: 'green'}}>{result3}</Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result4}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  matric: {
    borderColor: 'rgb(0, 51, 77)',
    borderWidth: 1,
    height: 40,
    fontSize: 18,
  },
  matrics: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  matrics2: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
