import {Colors} from '../../../../configs';

export const styles = {
  MemberInfo: {
    position: 'absolute',
    bottom: 0,
    zIndex: 20,
    backgroundColor: '#181820',
    left: 0,
    right: 0,
    padding: 20,
    borderRadius: 8,
    paddingBottom: 90,
  },
  MemberImage: {
    width: 150,
    height: 150,
    borderRadius: 150,
    marginTop: -75,
    borderWidth: 4,
    borderColor: Colors.Neutral300,
    backgroundColor: Colors.Neutral300,
  },
  MemberName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'white',
    marginTop: 20,
  },
  MemberStatus: {
    color: 'white',
    fontSize: 12,
    marginTop: -5,
    opacity: 0.6,
  },
  MemberNameContainer: {
    paddingLeft: 20,
  },
  CarDetails: {
    flexDirection: 'row',
  },
  CarDetailsContainer: {
    paddingLeft: 20,
  },
  CarIcon: {
    height: 40,
    width: 40,
    opacity: 0.3,
  },
  CarMake: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Medium',
  },
  CarModel: {
    textTransform: 'capitalize',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  MoreBtn: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingHorizontal: 15,
    marginLeft: 5,
  },
  CloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 30,
    height: 30,
  },
};
