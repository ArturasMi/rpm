import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  StatusBar,
  Linking,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

import {ScreenTitle} from '../../../../components';
import Google from '../../../../assets/icons/Google';
import Facebook from '../../../../assets/icons/Facebook';
import PaperPlane from '../../../../assets/icons/PaperPlane';
import FadeIn from '../../../../components/Animate/FadeIn';
import {Colors} from '../../../../configs';

const style = EStyleSheet.create(styles);

export const FAQ = ({navigation}) => {
  const [currentFAQ, changeCurrent] = useState(0);
  const [faqs, updateFaqs] = useState([
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      question: 'What is Lorem Ipsum?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ]);

  const SectionTitle = (opts, index) => {
    return (
      <TouchableOpacity onPress={() => changeCurrent(index)}>
        <Text style={style.Question}>{opts.question}</Text>
      </TouchableOpacity>
    );
  };

  const SectionContent = opts => {
    return (
      <FadeIn delay={100}>
        <View>
          <Text style={style.Answer}>{opts.answer}</Text>
        </View>
      </FadeIn>
    );
  };

  const openGg = async () => {
    const ggApp = 'fb://page/MazeikiuSkelbimai';
    const ggWeb = 'https://www.gogle.com/';

    const available = await Linking.canOpenURL(ggApp);
    Linking.openURL(available ? ggApp : ggWeb);
  };

  const openFb = async () => {
    const fbApp = 'fb://page/undefined';
    const fbWeb = 'https://www.facebook.com/groups/Undefined/';

    const available = await Linking.canOpenURL(fbApp);
    Linking.openURL(available ? fbApp : fbWeb);
  };

  return (
    <ScrollView style={style.FAQ}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ScreenTitle title="Help" />

      <Text style={style.Undertitle}>
        Something cool to fill up a gap. Might even put a random tip?
      </Text>

      <FadeIn delay={400}>
        <Text style={style.CategoryTitle}>Select an issue</Text>

        <View style={style.Block}>
          <Accordion
            activeSections={[currentFAQ]}
            sections={faqs}
            renderSectionTitle={SectionTitle}
            renderHeader={() => <View />}
            renderContent={SectionContent}
            onChange={() => {}}
          />
        </View>
        <Text style={style.CategoryTitle}>Send a letter to us</Text>
        <View style={style.Wrapper}>
          <FadeIn delay={100}>
            <View style={style.Block}>
              <View style={style.BlockIcon}>
                <PaperPlane size={15} color={Colors.Primary200} />
              </View>
              <Text style={style.BlockName}>Send a letter</Text>
              <View style={style.ChevronHolder}></View>
            </View>
          </FadeIn>
        </View>

        <Text style={style.CategoryTitle}>Follow us</Text>
        <TouchableOpacity onPress={openGg}>
          <View style={style.Block}>
            <View style={style.SettingsIcon}>
              <Google size={15} />
            </View>
            <Text style={style.BlockName}>Google</Text>
            <View style={style.ChevronHolder}></View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={openFb}>
          <View style={style.Block}>
            <View style={style.BlockIcon}>
              <Facebook size={15} />
            </View>
            <Text style={style.BlockName}>Facebook</Text>
            <View style={style.ChevronHolder}></View>
          </View>
        </TouchableOpacity>
      </FadeIn>

      <View style={{height: 90}} />
    </ScrollView>
  );
};
