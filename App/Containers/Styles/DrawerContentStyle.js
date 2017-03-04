// @flow
import {Colors} from '../../Themes/'

export default {
  container: {
    flex: 1,
    padding: 20,

  },
  logo: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor:'#68a0cf',
    borderRadius:20,
    borderWidth: 1,
    borderColor: '#fff'

  },
  name: {
    marginTop: 15,
    color: Colors.snow,
    fontSize: 12,
    flexWrap: 'wrap',

  },
  possition: {
    color: Colors.snow,
    fontSize: 10,
    paddingTop: 15,
    color : '#d285f9',
    marginTop: 15,
  },
  info: {
    paddingTop: 50,
    backgroundColor:Colors.background,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 15,
    paddingLeft: 20,
  },

}
