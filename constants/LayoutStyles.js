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
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildContainer: {
    flex: 1,
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasContainer:
  {
    flex: 1,
    width: windowWidth,
    backgroundColor: Colors.background_light,
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
    padding:10
  },
  toolButton:{
    flex:1,
    width:'100%',
    backgroundColor: 'transparent',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 3,
    marginTop:10
  },
  toolRow:{
    flex:1,
    width: '100%',
     flexDirection: 'row', 

     borderColor: 'red',
     borderWidth: 1,
  },
  toolColumn:{
    flex:1,
    width: '100%',
     flexDirection: 'column', 

     borderColor: 'red',
     borderWidth: 1,
  },
  shareContainer: {
    flex: 1,
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
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