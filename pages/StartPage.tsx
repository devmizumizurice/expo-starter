import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import StartMessage from '../components/start/StartMessage';

const StartPage = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <StartMessage />
      <StatusBar style='auto' />
    </View>
  );
};

export default StartPage;
