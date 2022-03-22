import {Colors} from '../../../../configs';

const containerPadding = 20;

export const styles = {
  Register: {
    flex: 1,
    paddingHorizontal: containerPadding,
    backgroundColor: Colors.colorBlack,
  },
  RegisterInfo: {
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
    color: '#fff',
  },
  SubmitContainer: {
    paddingVertical: 20,
  },
  CenteredBottom: {
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  Rule: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.6,
  },
  Terms: {
    paddingLeft: 15,
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.6,
  },
  Title: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins-Regular',
  },
  Form: {
    marginBottom: 20,
  },
  Separator: {
    backgroundColor: '#43434e',
    height: 1,
    width: '100%',
    marginVertical: 10,
    opacity: 0.3,
  },
};
