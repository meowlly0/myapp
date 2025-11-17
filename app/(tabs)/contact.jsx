import { IconSymbol } from '@/components/ui/icon-symbol'
import React from 'react'
import { ImageBackground, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import coffee from "../../assets/images/1coffee.png"


// import { ThemedText } from '@/components/themed-text'

const contact = () => {
  return (
    <View style = {styles.container} >
      <ImageBackground source= {coffee} resizeMode= 'cover' style = {styles.image}> 
        <Text style = {styles.title}>Contact Us</Text>

    <View style={styles.contacts}>
    <View style={styles.row}>
    <IconSymbol name="phone.down.fill" size={22} color="#d9b382" />
    <Pressable onPress={() => Linking.openURL('tel:+10veu2')  } >
      {({ pressed }) =>( 
     <Text style={[styles.text, pressed && styles.underline]} > +207733</Text>
      )}
    </Pressable>

   </View>

    <View style={styles.row}>
    <IconSymbol name="hare.fill" size={20} color="#d9b382" />
    <Pressable onPress={ () => Linking.openURL('mailto:coffeeshop@example.com')}>
      {({ pressed }) =>(
      <Text style={[styles.text, pressed && styles.underline]}> coffeeshop@example.com</Text>
      )}
      </Pressable>
    </View>

    <View style={styles.row}>
    <IconSymbol name="pawprint.fill" size={20} color="#d9b382" />
    <Pressable onPress={ () => Linking.openURL('https://www.google.com/maps/search/?api=1&query=123+Coffee+St')}> 
      {({ pressed }) =>(
      <Text style={[styles.text, pressed && styles.underline]}> 123 Coffee St, Caffeine City</Text>
      )}
      </Pressable>
     </View>
     
    </View>

    </ImageBackground>    
    </View>
  )
}
export default contact

const styles = StyleSheet.create({

    container:{
    flex: 1,
    flexDirection: 'column',
  },
    title:{
    color: '#6f4e37',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 75,
  }, 
  image:{
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  contacts:{
    alignItems: 'middle',
    backgroundColor: 'rgba(244,237,227,0.7)',
    padding: 50,
    paddingTop: 30, 
    paddingBottom: 30,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  text:{
    fontSize: 18,
    color: '#6f4e37',
    marginVertical: 5,
   
  },
  underline: {
  textDecorationLine: 'underline',
},
})
