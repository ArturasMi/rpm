import {Colors} from '../../configs';

export const styles = {
  // TextInput

  TextInput: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  Prefix: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 13,
    left: 10,
  },
  TextInputContainer: {
    marginTop: 20,
    position: 'relative',
  },
  // Button
  ButtonContainer: {
    backgroundColor: Colors.Primary200,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
  },
  Button: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  Flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  //Checkbox
  CheckContainer: {
    position: 'relative',
    borderWidth: 3,
    borderColor: '#181820',
    borderRadius: 40,
    overflow: 'hidden',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center', //#f3f7ff
  },
  Check: {
    width: 18,
    height: 10,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: Colors.Primary200,
    borderTopWidth: 0,
    borderRightWidth: 0,
    transform: [{rotate: '-50deg'}],
    marginTop: -5,
  },

  //Profile Picture
  ProfilePicture: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    height: 151,
    width: 151,
    borderRadius: 151,
    alignSelf: 'center',
  },
  ProfilePicBackground: {
    backgroundColor: Colors.Neutral300,
    width: 148,
    height: 148,
    borderRadius: 148,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  ProfilePictureImage: {
    width: 128,
    height: 128,
    borderRadius: 128,
    backgroundColor: Colors.Neutral300,
  },
  NoImage: {
    fontFamily: 'Poppins-Regular',
  },
  RemoveImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 3,
    backgroundColor: Colors.Neutral300,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.Primary200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RemoveImagePress: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  // Switch
  Switch: {
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.05)',
    position: 'relative',
  },

  //Error Message
  ErrorMessage: {
    fontFamily: 'Poppins-Regular',
    color: Colors.Secondary100,
    marginTop: 5,
  },
};
