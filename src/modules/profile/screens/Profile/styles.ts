import {Dimensions} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Colors} from '../../../../configs';

export const styles = {
  Profile: {
    flex: 1,
    backgroundColor: Colors.Neutral300,
  },
  Name: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Medium',
  },
  ScrollView: {
    flex: 1,
  },
  ProfileHeadContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30 + getStatusBarHeight(),
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 10,
  },
  ProfileHasPremium: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ProfileCrownContainer: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  NumberPlate: {
    color: '#fff',
    opacity: 0.5,
    fontFamily: 'Poppins-Regular',
  },
  ScreenTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginTop: 30,
    opacity: 0.5,
    color: '#fff',
    paddingLeft: 20,
  },

  // Promotion

  Promotion: {
    height: 120,
    backgroundColor: '#92b0f6',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 12,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    position: 'relative',
  },

  PromotionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  PromotionTitleText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
  },

  ReadPromotion: {
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff',
  },

  CrownContainer: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: -5,
  },

  PromotionBgContainer: {
    position: 'absolute',
    bottom: -5,
    right: 80,
    height: 150,
  },

  // End premium

  MenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  IconContainer: {
    width: 40,
    height: 40,
    borderRadius: 14,
    marginRight: 15,
  },

  MenuText: {
    fontSize: 14,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  Chevron: {
    opacity: 0.7,
  },
};
