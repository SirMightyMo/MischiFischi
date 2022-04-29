import Colors from "./Colors"
export default {
  mainContainerVertical: { // unbenutzt
    flex: 1,  
    backgroundColor: Colors.background_light,
    //alignItems: 'center',
    //justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin:0,
  },
  mainContainerHorizonatal: { // unbenutzt
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
    backgroundColor: Colors.background_light,
    alignItems: 'center',
    justifyContent: 'center',
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
  }
}