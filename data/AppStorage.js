import AsyncStorage from "@react-native-async-storage/async-storage";

/* AsyncStorage.clear(); */

export const storeData = (data) => {
  try {
    AsyncStorage.setItem('APPDATA', JSON.stringify(data));
    //console.log('AppStorage' ,JSON.stringify(data))
  }
  catch (e) {
    throw e;
  }

}
export const getData = () => {
  return new Promise((resolve,reject) => {
    AsyncStorage.getItem('APPDATA').then(value =>{
      if (value !== null){
        resolve(value)
      }
      else{
        reject(Error('Something went wrong in AppStorage'))
      }
    })

  })
}