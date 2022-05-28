import Colors from "./Colors"
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default {
  mainContainerVertical: { // unused
    flex: 1,
    backgroundColor: Colors.background_light,
    //alignItems: 'center',
    //justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin: 0,
  },
  mainContainerHorizonatal: { // unused
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.background_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildContainerHorizonatal: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: Colors.background_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buildContainerVertical: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: Colors.background_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasContainer:
  {
    flex: 1,
    width: windowWidth,
    backgroundColor: Colors.background_dark,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  toolsContainer:
  {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 60,
    borderWidth:1,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
  },
  toolButton:{
    flex:1,
    width:'100%',
    height: '100%',
    backgroundColor: Colors.buttonBackground ,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    marginRight:10,
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    
  },
  toolRowCointainer:{
    height: '100%',
  },
  toolRow:{
    flex:1,
    width: '100%',
     flexDirection: 'row',
     borderColor: 'transparent',
     borderWidth: 1,
     marginTop:5,
     marginBottom:5,
  },
  toolColumn:{
    flex:1,
    width: '100%',
     flexDirection: 'column', 
     borderColor: 'transparent',
     borderWidth: 1,
  },
  collectionScreen: {
    flex: 1,
    width:'100%',
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 1,
  },
  collectionContainer: {
    flex: 1,
    width:'90%',
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 1,
  },
  collectionTile:{
    flex:1,
    maxWidth:'45%',
    height:100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 3,
    margin:10
  },
  text: {
    margin: 10,
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  backgroundVideo: {
    height: windowHeight,
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "stretch",
    bottom: 0,
    right: 0
  }

}