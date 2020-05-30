import React from 'react';
import { NativeModules, requireNativeComponent ,Platform } from 'react-native';

const { AppleAuthentication } = NativeModules;

export const RNSignInWithAppleButton = requireNativeComponent('RNCSignInWithAppleButton');

export const SignInWithAppleButton = async (buttonStyle, callBack) => {
  if(Platform.OS === 'ios'){
    return await AppleAuthentication.requestAsync({
          requestedScopes: [AppleAuthentication.Scope.FULL_NAME, AppleAuthentication.Scope.EMAIL],
        }).then((response) => {
          callBack(response) //Display response
          }, (error) => {
            callBack(error) //Display error
           
        });
  }else{
  return null

  }
   
}

export default AppleAuthentication;
