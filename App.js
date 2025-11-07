import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ProfileCard
          name="Ada Lovelace"
          role="Mathematician"
          imageSource={require('./assets/ada.png')}
        />
        <ProfileCard
          name="Grace Hopper"
          role="Computer Scientist"
          imageSource={require('./assets/grace.png')}
        />
        <ProfileCard
          name="Hedy Lamarr"
          role="Inventor & Actress"
          imageSource={require('./assets/hedy.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scroll: {
    padding: 20,
  },
});