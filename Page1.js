import * as React from 'react';
import { Button,View, Text } from 'react-native';
import styles from './App'


function Page1({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{marginBottom:20, fontSize:20,fontWeight:'bold'}}>Mateus Moraes</Text>
        <View style={{marginBottom:20}}>
          <Button 
          title="Mateus"
          onPress={() => navigation.push('Magrao')}
          />
        </View>
      </View>
    );
    
  }

  export default Page1;