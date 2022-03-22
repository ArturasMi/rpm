import {getStatusBarHeight} from 'react-native-status-bar-height';

export default styles = {
  EventDetails: {
    flex: 1,
  },
  HeaderContainer: {
    overflow: 'hidden',
  },
  EventHeader: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  EventBanner: {
    width: '100%',
    height: 250,
  },
  BannerTint: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  GoBack: {
    width: 40,
    height: 40,
    zIndex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    top: getStatusBarHeight() + 10,
    left: 20,
  },
  DetailsPart1: {
    paddingHorizontal: 20,
  },
  DetailsPart2: {
    paddingHorizontal: 20,
  },
  EventTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    paddingTop: 25,
    paddingBottom: 5,
    fontSize: 17,
    lineHeight: 24,
  },
  EventSubtitle: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.7,
  },
  JoinEvent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  OpenSeats: {
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.7,
  },
  Separator: {
    backgroundColor: '#43434e',
    height: 1,
    width: '100%',
    marginVertical: 30,
    opacity: 0.3,
  },
  DetailsTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    opacity: 0.7,
  },
  DetailsDescription: {
    lineHeight: 22,
    color: '#6d6e83',
    fontFamily: 'Poppins-Regular',
    color: '#fff',
    opacity: 0.5,
  },
  EventDetailsContainer: {
    paddingBottom: 20,
  },
};
