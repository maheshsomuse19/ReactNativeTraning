import {Text, View, Image} from 'react-native';

import React, {Component} from 'react';

import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '23973638814-90ua84701pu446c1nl2mt1hl6sqc9oad.apps.googleusercontent.com',

  offlineAccess: true,
});
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userGoogleInfo: {},
      name: '',

      loaded: false,
    };
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);

      this.setState({
        userGoogleInfo: userInfo,
        // name:userInfo.user.name,

        loaded: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  render() {
    return (
      <View>
        {/* <Text>App</Text> */}

        <GoogleSigninButton
          onPress={this._signIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          style={{width: 200, height: 100}}
        />

        {this.state.loaded ? (
          <View>
            <Text>Hello</Text>
            <Text>{this.state.userGoogleInfo.user.name}</Text>

            <Text>{this.state.userGoogleInfo.user.email}</Text>

            {/* <Text>{this.state.userGoogleInfo.user.name}</Text> */}
            <Image
              style={{width: '100', height: '100'}}
              source={{uri: this.state.userGoogleInfo.user.photo}}
            />
          </View>
        ) : (
          <Text>Not SignedIn</Text>
        )}
      </View>
    );
  }
}

export default App;
