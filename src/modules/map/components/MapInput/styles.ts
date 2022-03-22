import {Colors, Constants} from '../../../../configs';

export const styles = {
  MapSearch: {
    position: 'absolute',
    left: 20,
    right: 20,
    top: Constants.statusbarHeight + 30,
    zIndex: 10,
    marginTop: -20,
  },

  MapSearchIcon: {
    position: 'absolute',
    top: 35,
    left: 13,
    zIndex: 11,
    opacity: 0.6,
  },
  MapInput: {
    backgroundColor: Colors.Neutral200,
    borderRadius: 10,
    color: Colors.Light100,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
    marginTop: 0,
    fontFamily: 'Poppins-Regular',
  },
};
