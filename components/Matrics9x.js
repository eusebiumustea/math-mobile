import React, {useState} from 'react';
import {useDeviceOrientation} from '@react-native-community/hooks';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default function Matrics9x() {
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
  const [x5, setNumber5] = useState(0);
  function onNumber5Changed(e) {
    setNumber5(Number(e));
  }
  const [x6, setNumber6] = useState(0);
  function onNumber6Changed(e) {
    setNumber6(Number(e));
  }
  const [x7, setNumber7] = useState(0);
  function onNumber7Changed(e) {
    setNumber7(Number(e));
  }
  const [x8, setNumber8] = useState(0);
  function onNumber8Changed(e) {
    setNumber8(Number(e));
  }
  const [x9, setNumber9] = useState(0);
  function onNumber9Changed(e) {
    setNumber9(Number(e));
  }

  const [y1, setNumber10] = useState(0);

  function onNumber10Changed(e) {
    setNumber10(Number(e));
  }
  const [y2, setNumber11] = useState(0);

  function onNumber11Changed(e) {
    setNumber11(Number(e));
  }
  const [y3, setNumber12] = useState(0);

  function onNumber12Changed(e) {
    setNumber12(Number(e));
  }
  const [y4, setNumber13] = useState(0);

  function onNumber13Changed(e) {
    setNumber13(Number(e));
  }
  const [y5, setNumber14] = useState(0);

  function onNumber14Changed(e) {
    setNumber14(Number(e));
  }
  const [y6, setNumber15] = useState(0);

  function onNumber15Changed(e) {
    setNumber15(Number(e));
  }
  const [y7, setNumber16] = useState(0);

  function onNumber16Changed(e) {
    setNumber16(Number(e));
  }
  const [y8, setNumber17] = useState(0);

  function onNumber17Changed(e) {
    setNumber17(Number(e));
  }
  const [y9, setNumber18] = useState(0);

  function onNumber18Changed(e) {
    setNumber18(Number(e));
  }

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);
  const [result5, setResult5] = useState(0);
  const [result6, setResult6] = useState(0);
  const [result7, setResult7] = useState(0);
  const [result8, setResult8] = useState(0);
  const [result9, setResult9] = useState(0);

  function calc() {
    setResult1(x1 * y1 + x2 * y4 + x3 * y7);
    setResult2(x1 * y2 + x2 * y5 + x3 * y8);
    setResult3(x1 * y3 + x2 * y6 + x3 * y9);
    setResult4(x4 * y1 + x5 * y4 + x6 * y7);
    setResult5(x4 * y2 + x5 * y5 + x6 * y8);
    setResult6(x4 * y3 + x5 * y6 + x6 * y9);
    setResult7(x7 * y1 + x8 * y4 + x9 * y7);
    setResult8(x7 * y2 + x8 * y5 + x9 * y8);
    setResult9(x7 * y3 + x8 * y6 + x9 * y9);
  }

  const solutionsplit1 = [`${x1} x ${y1} + ${x2} x ${y4} + ${x3} x ${y7}`];
  const solutionsplit2 = [`${x1} x ${y2} + ${x2} x ${y5} + ${x3} x ${y8}`];
  const solutionsplit3 = [`${x1} x ${y3} + ${x2} x ${y6} + ${x3} x ${y9}`];
  const solutionsplit4 = [`${x4} x ${y1} + ${x5} x ${y4} + ${x6} x ${y7}`];
  const solutionsplit5 = [`${x4} x ${y2} + ${x5} x ${y5} + ${x6} x ${y8}`];
  const solutionsplit6 = [`${x4} x ${y3} + ${x5} x ${y6} + ${x6} x ${y9}`];
  const solutionsplit7 = [`${x7} x ${y1} + ${x8} x ${y4} + ${x9} x ${y7}`];
  const solutionsplit8 = [`${x7} x ${y2} + ${x8} x ${y5} + ${x9} x ${y8}`];
  const solutionsplit9 = [`${x7} x ${y3} + ${x8} x ${y6} + ${x9} x ${y9}`];
  const orientation = useDeviceOrientation();
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: orientation.landscape ? 'row' : 'column',
        top: orientation.landscape ? 0 : 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          top: orientation.landscape ? -50 : 0,
          left: orientation.landscape ? 10 : 0,
        }}>
        <View style={styles.matrics}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber1Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber4Changed}
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
            onChangeText={onNumber2Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber5Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber8Changed}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.matrics3}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber3Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber6Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber9Changed}
            keyboardType={'numeric'}
          />
        </View>
        <Text
          style={{
            fontSize: 40,
            paddingLeft: 10,
            paddingRight: 10,
            color: 'green',
            alignSelf: 'center',
          }}>
          X
        </Text>
        <View style={styles.matrics}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber10Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber13Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber16Changed}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.matrics2}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber11Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber14Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber17Changed}
            keyboardType={'numeric'}
          />
        </View>
        <View style={styles.matrics3}>
          <TextInput
            style={styles.matric}
            onChangeText={onNumber12Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber15Changed}
            keyboardType={'numeric'}
          />
          <TextInput
            style={styles.matric}
            onChangeText={onNumber18Changed}
            keyboardType={'numeric'}
          />
        </View>
        <TouchableHighlight
          underlayColor={'lightblue'}
          style={styles.button}
          onPress={calc}>
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
      <View>
        <Text style={{color: 'limegreen', fontSize: 20}}>Solve: </Text>
        <Text style={styles.solutions}>{solutionsplit1}</Text>
        <Text style={styles.solutions}>{solutionsplit3}</Text>
        <Text style={styles.solutions}>{solutionsplit2}</Text>
        <Text style={styles.solutions}>{solutionsplit5}</Text>
        <Text style={styles.solutions}>{solutionsplit4}</Text>
        <Text style={styles.solutions}>{solutionsplit7}</Text>
        <Text style={styles.solutions}>{solutionsplit6}</Text>
        <Text style={styles.solutions}>{solutionsplit8}</Text>
        <Text style={styles.solutions}>{solutionsplit9}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'flex-start'}}>
        <Text style={{fontSize: 30, color: 'teal'}}>Result: </Text>
        <View>
          <Text style={{fontSize: 45, color: 'green', paddingRight: 20}}>
            {result1}
          </Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result4}</Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result7}</Text>
        </View>
        <View>
          <Text style={{fontSize: 45, color: 'green', paddingRight: 20}}>
            {result2}
          </Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result5}</Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result8}</Text>
        </View>
        <View>
          <Text style={{fontSize: 45, color: 'green', paddingRight: 20}}>
            {result3}
          </Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result6}</Text>
          <Text style={{fontSize: 45, color: 'green'}}>{result9}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  solutions: {
    fontSize: 19,
    fontStyle: 'italic',
    color: 'rgb(0, 53, 102)',
  },
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
  matrics3: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: 80,
    height: 50,
    borderRadius: 25,
    elevation: 3,
    top: 20,
    left: 15,
  },
});
