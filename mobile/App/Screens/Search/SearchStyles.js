import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    filterIcon: {
        height: 30,
        width: 20,
        resizeMode: 'contain',
      },
      filtersContainer: {
        height: 60,
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#70CDAC',
      },
      searchIcon: {
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
      },
      searchBar: {
        color: '#9E9E9E',
      },
      filterText: {
        color: 'white',
        paddingLeft: 3,
        fontSize: 17,
      },
      button: {
        borderColor: 'white',
        paddingVertical: 5,
        alignItems: 'center',
        height: 40,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
      },
      searchBarContainer: {
        height: 40,
        width: '90%',
        borderRadius: 9,
        borderColor: '#70CDAC',
        flexDirection: 'row',
        borderWidth: 1,
      },
      header: {
        height: 60,
        width: '88%',
        flexDirection: 'row',
        alignItems: 'center',
      },
      logoText: {
        width: 85,
        fontWeight: 'bold',
        marginLeft: 10,
        color:'black'
      },
})

export default styles;