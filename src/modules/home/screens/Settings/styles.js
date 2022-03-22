import config from '../../config';

export default styles = {
  Settings: {
    paddingHorizontal: 20,
  },
  TitleContainer: {
    marginBottom: 15,
  },
  CategoryTitle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
  },

  SettingsBlock: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 6,
    paddingVertical: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    position: 'relative',
  },

  SettingsIcon: {
    height: 15,
    width: 15,
  },
  SettingsName: {
    fontFamily: 'Poppins-Medium',
    flex: 1,
    color: '#fff',
    paddingLeft: 15,
    paddingTop: 3,
  },
  SettingsIcon: {
    paddingRight: 15,
  },
  Soon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: '#333',
    backgroundColor: config.colorMain,
    fontFamily: 'Poppins-Medium',
    fontSize: 10,
    textTransform: 'uppercase',
    paddingHorizontal: 5,
    borderRadius: 5,
    transform: [{rotate: '-20deg'}],
  },
};
