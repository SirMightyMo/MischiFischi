import Colors from "./Colors"
import { Dimensions } from "react-native";
import { setStatusBarHidden } from "expo-status-bar";
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
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  buildContainerVertical: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvasContainer:
  {
    flex: 1,
    width: windowWidth,
    /* backgroundColor: Colors.background_dark, */
    /* alignItems: 'center', */
    /* justifyContent: 'center', */
    /* borderWidth: 1, */
    /* borderColor: 'black', */
  },
  svgCanvas: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: 'transparent'
  },
  toolsContainer:
  {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 60,
    overflow: 'hidden'
  },
  toolRow:{
    flex:1,
    width: '100%',
     flexDirection: 'row',
     marginTop:5,
     marginBottom:5,
  },
  toolRowCointainer:{
    height: '100%',
  },
  toolButton:{
    flex:1,
    width:'100%',
    height: '100%',
    backgroundColor: Colors.buttonBackground ,
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.5)',
    borderWidth: 2,
    overflow: 'hidden',
    marginRight:10,
    elevation:20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
  },
  collectionScreen: {
    flex: 1,
    width:'100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 0,
  },
  collectionContainer: {
    flex: 1,
    width:'90%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'blue',
    borderWidth: 0,
  },
  collectionTile:{
    flex:1,
    maxWidth:'45%',
    height:100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    //borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1,
    margin:10,
  },
  text: {
    margin: 10,
    color: Colors.text,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center',
  },
  titleText: {
    margin: 10,
    color: Colors.text,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign:'center'
  },
  textContainer: {
    margin: 10,
    marginTop:50,
    backgroundColor:'rgba(255, 255, 255, 0.3)',
    borderRadius:10,
  },
  modalShareView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    /* padding: 35, */
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  modalHelpView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2
  },
  modalGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    borderRadius: 20,
    /* padding: 35, */
  },
  buildGradient: {
    width: '100%',
    paddingTop:20,
    paddingHorizontal: 20
  },
  overlayButton: {
    width: 25,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    elevation: 2,
    backgroundColor: "#00000015",
  },
  videoStyles: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
  normalButton: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    elevation: 2,
  },
  normalButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  btnShadow: {
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
  }

}