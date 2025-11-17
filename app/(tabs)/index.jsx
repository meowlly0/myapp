import { Link } from 'expo-router'
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import icedcoffee from "../../assets/images/2coffee.png"


const app = () => {
  return (
    <View style={styles.container}>

      <ImageBackground source={icedcoffee} resizeMode='cover' style={styles.image}>

      <Text style={styles.title}>Coffee Shop</Text>

      <Link href='/contact' style={{marginHorizontal: 'auto'}} asChild>
      <Pressable style={ styles.button}>
        <Text style={styles.buttontext}>Contact Us</Text>
        </Pressable>
        </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f4ede3',
  },
  title:{
    color: '#f4ede3',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(111,78,55,0.5)',
    marginBottom: 120,
  }, 

  button:{

    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: '#1e1c1c',
    padding: 5,
  },

  buttontext:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})