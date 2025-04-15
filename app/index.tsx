import { Alert, StatusBar, View } from "react-native";
import { useVideoPlayer, VideoView } from 'expo-video';
import { BackHandler } from "react-native";


export default function Index() {
  const player = useVideoPlayer(require('@/assets/video.mp4'), player => {
    player.loop = true;
    player.allowsExternalPlayback = false;
    player.play();

    player.addListener('playToEnd', () => {
      player.pause();
      Alert.alert('', 'You Got Rickrolled Lol XD', [
        {
          text: 'Once More',
          onPress: () => {
            player.play();
          }
        },
        {
          text: 'I Quit 😔',
          onPress: () => {
            BackHandler.exitApp();
          }
        }
      ]);
    });
  });

  return (
    <View style={{
      backgroundColor: 'black'
    }}>
      <StatusBar hidden />
      <VideoView
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'black'
        }}
        nativeControls={false}
        player={player} />
    </View>
  );
}
