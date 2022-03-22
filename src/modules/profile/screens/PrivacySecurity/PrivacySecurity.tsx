import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StatusBar} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';

import {ScreenTitle} from '../../../../components';

const style = EStyleSheet.create(styles);

export const PrivacySecurity = ({navigation}) => {
  const lastEdit =
    'Published March 16, 2020. Effective as of April 16, 2020. These Terms replace and supersede all prior versions.';
  return (
    <ScrollView style={style.PrivacySecurity}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ScreenTitle title="Privacy and Security" />

      <Text style={style.LastEdit}>{lastEdit}</Text>

      <Text style={style.Privacy}>
        These General Terms of Use (“General Terms”), along with any applicable
        Additional Terms (see section 1.2 (Additional Terms) below)
        (collectively, the “Terms”) govern your use of and access to our
        website, customer support, discussion forums or other interactive areas
        or services, and services such as Creative Cloud (collectively, the
        “Services”) and software that we include as part of the Services, as
        well as any applications, including mobile applications, Sample Files
        and Content Files (defined below), scripts, instruction sets, and
        related documentation (collectively, the “Software”). If you have agreed
        to the Subscription and Cancellation Terms, then such terms are also
        considered part of the Terms. If you are using and accessing the
        Services and Software through Adobe’s Value Incentive Plan (“VIP”)
        program, then the Subscription and Cancellation Terms do not apply to
        you, but the remainder of these Terms will govern your use of and access
        to the Services and Software. If you have entered into another agreement
        with us concerning specific Services or Software, then the terms of that
        agreement control where it conflicts with the Terms. You must be 13 or
        older to register for an individual Adobe ID. Schools that participate
        in the primary and secondary education named user offering may issue a
        child under 13 an enterprise-level Adobe ID, consistent with the Primary
        and Secondary Education Additional Terms. 1. Your Agreement with Adobe.
        1.1 Choice of Law and Contracting Entity. If you reside in North America
        (inclusive of United States, Canada, Mexico, United States territories
        and possessions, and United States military bases wherever located),
        your relationship is with Adobe Inc., a United States company, and the
        Terms are governed by the law of California, U.S.A., unless preempted by
        U.S. federal law, without regard to conflict of law rules. If you reside
        outside of North America, your relationship is with Adobe Systems
        Software Ireland Limited, and the Terms are governed by the law of
        Ireland. For customers in Australia, Adobe Systems Software Ireland
        Limited is acting as an authorized agent of Adobe Systems Pty Ltd. and
        is entering into this contract in its capacity as agent for Adobe
        Systems Pty Ltd. You may have additional rights under your local law. We
        do not seek to limit those rights where it is prohibited to do so by
        law. 1.2 Additional Terms. Our Services and Software are licensed, not
        sold, to you, and may also be subject to one or more of the additional
        terms below (“Additional Terms”). If there is any conflict between the
        terms in the General Terms and the Additional Terms, then the Additional
        Terms govern in relation to that Service or Software. The Additional
        Terms are subject to change as described in section 1.6 (Updates to
        Terms) below.
      </Text>
    </ScrollView>
  );
};
