import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function App() {
  return (
    <View>
       <YoutubePlayer 
            height={300}
            play={true}
            videoId={'cQcTQWJbhDY'}
          /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
