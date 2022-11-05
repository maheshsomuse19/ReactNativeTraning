import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    backgroundColor: '#293462',
    height: 0.1 * height,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
