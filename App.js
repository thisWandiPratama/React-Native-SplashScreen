import React from 'react'
import { View , Image, StylesSheet} from 'react-native'

class App extends React.Component{
    state={
        position:true
    }
    splash=()=>{
        if (this.state.position){
            return(
                <View style={styles.MainContainer}>
                    <Image
                    source={require('./src/assets/logo.png')}
                    style={styles.logoSplash}
                    />
                </View>
            )
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({
                position:false
            })
        } ,5000)
        return(
            <View style={styles.ContainerView}>
                {this.splash()}
            </View>
        )
    }
}
const styles = StyleSheet.create({
  MainContainer:{
    height:'100%', 
    width:'100%', 
    justifyContent:'center', 
    alignItems:'center', 
    backgroundColor:'blue'
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
