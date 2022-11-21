import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,

    borderRadius: 25,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#dedede',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default styles;
