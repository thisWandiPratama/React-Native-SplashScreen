import React from 'react'
import { View , Image, StylesSheet} from 'react-native'

class App extends React.Component{
    state={
        role:true
    }
   
    render(){
          setTimeout(()=>{
      this.setState({
          role:false
      })
  } ,5000)
    if (this.state.role) {
      return (
        <View style={styles.MainSplash}>
          <Image
                source={require('../../iconSMA.png')}
                style={styles.logoSplash}
          />
          <ActivityIndicator size='large' />
          <View style={styles.copyright} >
                <Text style={styles.textcopyright}>SMA NEGERI 2 PRABUMULIH</Text>
                <Text style = {styles.textcopyright}>Developer by Pabrik Coding</Text>
          </View>
        </View>
      );
      
    }
        return(
            <View style={styles.ContainerView}>
                <Text> Dashboard Aplikasi</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
 MainSplash:{
    flex:1,
    justifyContent:'center', 
    alignItems:'center'
  },
  
  ContainerView:{
    flex:1
  },
  
  LogoSplash:{
    height:110, 
    width:110
  }
})
export default App
