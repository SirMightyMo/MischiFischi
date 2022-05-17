import Video from 'react-native-video';
import LayoutStyles from "../constants/LayoutStyles";

export default BackgroundVideo = () => {

return <Video
    source={require("../assets/fish/bg.mp4")}
    style={LayoutStyles.backgroundVideo}
    muted={true}
    repeat={true}
    resizeMode={"cover"}
    rate={1.0}
    ignoreSilentSwitch={"obey"}
/>; 

};