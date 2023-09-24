import * as LocalAuthentication from 'expo-local-authentication';

//Check hardware compatibility
async function checkHardware() {
  try {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    return compatible;
  } catch (e) {
    console.log(e);
  }
}
//Active expo-auth
function onAuthenticate(): Promise<boolean> {
  const auth = LocalAuthentication.authenticateAsync({
    promptMessage: 'Please type your PIN code',
    fallbackLabel: 'Enter Password',
  });
  return auth
    .then(result => {
      return result?.success || false;
    })
    .catch(e => {
      console.log(e);
      return false;
    });
}

export { onAuthenticate, checkHardware };
