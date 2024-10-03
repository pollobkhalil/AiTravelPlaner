import { Colors } from '@/constants/Colors';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {

    const router=useRouter();


  return (
    <View>
      <Image
        source={require('./../assets/images/Login.jpg')}
        style={{
          width: '100%',
          height: 450,
        }}
      />

      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'outfit-Bold',
            color: 'black',
            textAlign:'center',
            marginTop:20,
           
          }}
        >
          AI Travel Planner
        </Text>

        <Text style={{
            fontFamily:'outfit',
            textAlign:'center',
            color:'gray',
            marginTop:20,
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ab beatae optio officia Architecto ab beatae opti </Text>

        <TouchableOpacity  style={styles.button}
        
        onPress={()=>router.push('auth/sign-in')}
        
        ><Text style={{
            color:Colors.white,
            textAlign:'center',
            fontFamily:'outfit',
            fontSize:17,
        }}>Get Started</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height:'100%',
    padding:25
  },

  button:{
    padding:15,
    backgroundColor:Colors.primary,
    borderRadius:99,
    marginTop:'25%'
  }
});
