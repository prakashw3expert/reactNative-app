// @flow

import React, { Component } from 'react'
import { ScrollView, Image, BackAndroid, Text, View } from 'react-native'
import styles from './Styles/DrawerContentStyle'
import { Images } from '../Themes'
import DrawerButton from '../Components/DrawerButton'
import SearchBar from '../Components/SearchBar'
import { Actions as NavigationActions } from 'react-native-router-flux'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePresentation = () => {
    this.toggleDrawer()
    NavigationActions.PresentationScreen()
  }

  handleInbox = () => {
    this.toggleDrawer()
    NavigationActions.inbox()
  }

  handleSearch = () => {
    this.toggleDrawer()
    NavigationActions.listviewSearchingExample()
  }

  handlePressAPI = () => {
    this.toggleDrawer()
    NavigationActions.apiTesting()
  }

  handlePressTheme = () => {
    this.toggleDrawer()
    NavigationActions.theme()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.listviewExample()
  }
  handleSettings = () => {
    this.toggleDrawer()
    NavigationActions.listviewGridExample()
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.info}>
        <Image source={Images.iconUser} style={styles.logo} />
        <Text style={styles.name}>Ellen Wood{"\n"}
        <Text style={styles.possition}>Personal Trainer</Text>
        </Text>
        </View>
        <View style={styles.container}>
          <DrawerButton text='Home' onPress={this.handlePresentation} />
          <DrawerButton text='Inbox' onPress={this.handleInbox} />
          <DrawerButton text='Search' onPress={this.handleSearch} />
          <DrawerButton text='Sessions' onPress={this.handlePressDevice} />
          <DrawerButton text='Availability' onPress={this.handlePressDevice} />
          <DrawerButton text='Settings' onPress={this.handleSettings} />
        </View>
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
