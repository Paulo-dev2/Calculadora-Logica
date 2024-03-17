import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    margin: 6,
    color: 'blue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    margin: 6,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
});
