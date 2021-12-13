
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const googleLogin = async () => {
    try {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    } catch (error) {
        console.error(error);
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("user cancelled the login flow");
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log(" operation (e.g. sign in) is in progress already");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log(" play services not available or outdated");
        } else {
            // some other error happened
        }
    }
};

const facebookSignIn = async () => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
        throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
        throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
}

// signup handling
const signUp = (fullName, email, password) => {
    if (!fullName || !email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            const { uid } = cred.user;

            auth().currentUser.updateProfile({
                displayName: fullName
            })

            return uid
        })
        .then(() => { })
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}

const signIn = (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
        .then(() => { })
        .catch(
            err => Alert.alert(err.code, err.message)
        )
}

const signOut = () => {
    return auth().signOut()
}


const forgetPassword = (email) => {
    if (!email) {
        Alert.alert('Error', 'Please enter email')
    }

    return auth().sendPasswordResetEmail(email)
}



const Auth = {
    signUp,
    signIn,
    signOut,
    forgetPassword,
    googleLogin,
    facebookSignIn,
}

export default Auth