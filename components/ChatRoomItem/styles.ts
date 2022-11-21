import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  badgeContainer: {
    backgroundColor: '#3777f0',
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 55,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3,
  },
  text: {
    color: 'gray',
    fontSize: 14,
  },
});

export default styles;
