// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {
//   LoginManager,
//   AccessToken,
//   GraphRequest,
//   GraphRequestManager,
//   Settings,
// } from 'react-native-fbsdk-next';
// import {appleAuth} from '@invertase/react-native-apple-authentication';
// import {Config} from '@instances';

// export const loginGoogle = async callback => {
//   try {
//     await GoogleSignin.hasPlayServices({
//       showPlayServicesUpdateDialog: true,
//     });
//     await GoogleSignin.configure({
//       iosClientId:
//         '1005997260772-umbbecb620lkrv84444eg1h08osula5u.apps.googleusercontent.com',
//       scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//       webClientId:
//         '1005997260772-mq968p2v71lsuonk7s3gr8fh33v6nb0r.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//       offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     });
//     let result = await GoogleSignin.signIn();
//     callback(result);
//   } catch (error) {}
// };

// export const logOutGoogle = async () => {
//   try {
//     await GoogleSignin.revokeAccess();
//     await GoogleSignin.signOut();
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const loginFacebook = async callback => {
//   try {
//     Settings.initializeSDK();
//     let result = await LoginManager.logInWithPermissions([
//       'public_profile',
//       'email',
//     ]);
//     if (!result.isCancelled) {
//       AccessToken.getCurrentAccessToken().then(data => {
//         const infoRequest = new GraphRequest(
//           '/me?fields=name,first_name,last_name,picture.width(400),email',
//           null,
//           callback,
//         );
//         new GraphRequestManager().addRequest(infoRequest).start();
//       });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const logOutFacebook = async (callback?: any) => {
//   try {
//     await LoginManager.logOut();
//     callback !== undefined && callback();
//   } catch (error) {}
// };

// export const loginApple = async callback => {
//   try {
//     const appleAuthRequestResponse: any = await appleAuth.performRequest({
//       requestedOperation: appleAuth.Operation.LOGIN,
//       requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//     });

//     // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
//     const credentialState = await appleAuth.getCredentialStateForUser(
//       appleAuthRequestResponse.user,
//     );
//     if (credentialState === appleAuth.State.AUTHORIZED) {
//       // user is authenticated
//       callback(appleAuthRequestResponse);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const logOutApple = async (callback?: any) => {
//   return appleAuth.onCredentialRevoked(
//     async () => callback !== undefined && callback(),
//   );
// };

// export const logOutSocial = () => {
//   switch (Config.oauth_provider) {
//     case 'Apple':
//       logOutApple();
//       break;
//     case 'Facebook':
//       logOutFacebook();
//       break;
//     case 'Google':
//       logOutGoogle();
//       break;
//   }
// };
