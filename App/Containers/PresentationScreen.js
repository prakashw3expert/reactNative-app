// @flow

import React from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Images } from '../Themes'


import RoundedButton from '../Components/RoundedButton'

import { Actions as NavigationActions } from 'react-native-router-flux'

import { Container, Content, Card, CardItem, Left, Body, Right, Thumbnail, Button, Icon ,ListItem, Separator} from 'native-base'

// Styles
import styles from './Styles/PresentationScreenStyle'

export default class PresentationScreen extends React.Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Container>
              <Content>
              <Separator>
                    <Text>Today Schedules</Text>
              </Separator>

                <ListItem avatar>
                      <Left>
                          <Thumbnail source={Images.iconUser} />
                      </Left>
                      <Body>
                          <Text>Kumar Pratik</Text>
                          <Text note>Doing what you like will always keep you happy . .</Text>
                      </Body>
                      <Right>
                          <Text note>3:43 pm</Text>
                      </Right>
                  </ListItem>

                  <ListItem avatar>
                        <Left>
                            <Thumbnail source={Images.iconUser} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Doing what you like will always keep you happy . .</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>

                  <Separator>
                        <Text>Health Feed</Text>
                  </Separator>
                  <Card >
                      <CardItem>
                          <Left>
                              <Thumbnail source={Images.iconUser} />
                              <Body>
                                  <Text>NativeBase</Text>
                                  <Text note>GeekyAnts</Text>
                              </Body>
                          </Left>
                          <Right>
                               <Icon name="arrow-forward" />
                          </Right>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={Images.article} style={styles.articleImage} />
                        </CardItem>
                        <CardItem content>
                            <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                            Are you telling me that you built a time machine... out of a DeLorean?!
                            Whoa. This is heavy.</Text>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                          <Body>
                              <Button transparent>
                                  <Icon active name="chatbubbles" />
                                  <Text>4 Comments</Text>
                              </Button>
                          </Body>
                          <Right>
                              <Text>11h ago</Text>
                          </Right>
                      </CardItem>
                 </Card>
                 <Card >
                     <CardItem>
                         <Left>
                             <Thumbnail source={Images.iconUser} />
                             <Body>
                                 <Text>NativeBase</Text>
                                 <Text note>GeekyAnts</Text>
                             </Body>
                         </Left>
                         <Right>
                              <Icon name="arrow-forward" />
                         </Right>
                       </CardItem>
                       <CardItem cardBody>
                           <Image source={Images.article} style={styles.articleImage} />
                       </CardItem>
                       <CardItem content>
                           <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                           Are you telling me that you built a time machine... out of a DeLorean?!
                           Whoa. This is heavy.</Text>
                       </CardItem>
                       <CardItem>
                           <Left>
                               <Button transparent>
                                   <Icon active name="thumbs-up" />
                                   <Text>12 Likes</Text>
                               </Button>
                           </Left>
                         <Body>
                             <Button transparent>
                                 <Icon active name="chatbubbles" />
                                 <Text>4 Comments</Text>
                             </Button>
                         </Body>
                         <Right>
                             <Text>11h ago</Text>
                         </Right>
                     </CardItem>
                </Card>
                <Card >
                    <CardItem>
                        <Left>
                            <Thumbnail source={Images.iconUser} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                        <Right>
                             <Icon name="arrow-forward" />
                        </Right>
                      </CardItem>
                      <CardItem cardBody>
                          <Image source={Images.article} style={styles.articleImage} />
                      </CardItem>
                      <CardItem content>
                          <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                          Are you telling me that you built a time machine... out of a DeLorean?!
                          Whoa. This is heavy.</Text>
                      </CardItem>
                      <CardItem>
                          <Left>
                              <Button transparent>
                                  <Icon active name="thumbs-up" />
                                  <Text>12 Likes</Text>
                              </Button>
                          </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
               </Card>
              </Content>
          </Container>



        </ScrollView>
      </View>
    )
  }
}
