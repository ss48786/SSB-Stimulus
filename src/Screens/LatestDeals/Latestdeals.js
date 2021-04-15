import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationString';
import Button from '../../Components/Button';
import actions from '../../redux/actions';
import {showMessage, errorMessage} from 'react-native-flash-message';
import {connect} from 'react-redux';
import MyLoader from '../../Components/MyLoader';
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import Textinput from '../../Components/Textinput';

export default class Latestdeals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: '',
      limit: '',
      skip: '',
      iscorrect: true,
      isloadingMore: false,
      isNoMoreData: false,
      refreshing: false,
      profiles: [],
      islistEnd: false,
      refreshing: false,
      skipcount: 0,
      username: '',
    };
  }

  renderItem = ({item}) => {
    // console.log("RENDER ITEM" , item) ;

    return <View></View>;
  };
  render() {
    const {infinitearray} = this.props;
    const {iscorrect, refreshing, username} = this.state;

    return (
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'column'}}>
              <Text
                style={{fontWeight: 'bold', marginTop: 30, marginLeft: 100}}>
                Air Force Fighter Jets
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.rafale} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>Rafale</Text>
              <Text>
                India had signed an inter-governmental agreement with France in
                September 2016 for procurement of 36 Rafale fighter jets at a
                cost of around Rs 58,000 crore. The aircraft is capable of
                carrying a range of potent weapons and missiles and the first
                squadron of the aircraft will be deployed at Ambala air force
                station, considered one of the most strategically located bases
                of the IAF. The Indo-Pak border is around 220 km from there. The
                second squadron of Rafale will be stationed at Hasimara base in
                West Bengal. The Rafale is a modern fighter jet known for its
                agility, speed, weapon holding capacity and attack capability.
                The Dassault Rafale has a delta wing design and is capable of
                g-forces as high as 11g (in case of emergency). The Rafale is
                available in both single and dual seating cabin (India ordered
                28 single and 8 dual seater Rafale).
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.miorage2000} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>Mirage-2000</Text>
              <Text>
                The Mirage-2000 is undoubtedly one of the Indian Air Force's
                (IAF) most versatile and deadliest aircraft and it was first
                commissioned in 1985. Soon after inducting the Mirage, IAF gave
                it the name – Vajra – meaning lightning thunderbolt in Sanskrit.
                The Mirage-2000 is developed by Dassault Aviation and took its
                first flight in 1978 and was inducted in the French Air Force in
                1984. India placed an initial order of 36 single-seater
                Mirage-2000 and 4 twin-seater Mirage 2000 in 1982 as an answer
                to Pakistan buying the US-made F-16 fighter jets by Lockheed
                Martin. The Mirage-2000 played a decisive role in the 1999 war
                of Kargil and seeing the success of the jets, the government in
                India placed an additional order of 10 Mirage-2000 planes in
                2004, taking the total tally to 50 jets.
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.tejas} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>HAL Tejas LCA</Text>
              <Text>
                India has long borrowed its fighter jets from countries like
                Russia, France and Britain under a license agreement to
                manufacture it locally by Hindustan Aeronautics Limited.
                However, back in the 1980s the HAL started the Light Combat
                Aircraft (LCA) programme to replace the ageing Soviet sourced
                MiG-21. With India’s former Prime Minister giving the LCA its
                name – Tejas – the 1st indigenously built fighter aircraft was
                inducted in the Indian Air Force with the IAF placing a 20 jet
                order initially and the 1st Tejas Squadron was formed in 2016
                called the Flying Daggers. Till now IAF has placed an order of
                40 Tejas Mk 1, including 32 single-seat aircraft and eight
                twin-seat trainers. IAF has also initiated procurement of a
                further 73 single-seat fighters in Mk 1A configuration.
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.mig21} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>HAL Tejas LCA</Text>
              <Text>
                India has long borrowed its fighter jets from countries like
                Russia, France and Britain under a license agreement to
                manufacture it locally by Hindustan Aeronautics Limited.
                However, back in the 1980s the HAL started the Light Combat
                Aircraft (LCA) programme to replace the ageing Soviet sourced
                MiG-21. With India’s former Prime Minister giving the LCA its
                name – Tejas – the 1st indigenously built fighter aircraft was
                inducted in the Indian Air Force with the IAF placing a 20 jet
                order initially and the 1st Tejas Squadron was formed in 2016
                called the Flying Daggers. Till now IAF has placed an order of
                40 Tejas Mk 1, including 32 single-seat aircraft and eight
                twin-seat trainers. IAF has also initiated procurement of a
                further 73 single-seat fighters in Mk 1A configuration.
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.sukhoi} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>MiG 21</Text>
              <Text>
                The first supersonic jet aircraft in aviation history, the MiG
                21 is one of the most known fighter jets on Earth. Having served
                60 countries over a course of 60 years, the MiG 21 is still in
                service in many countries, including India. In 1961, IAF opted
                for the Mikoyan-Gurevich Design Bureau made MiG 21 and since
                then has bought more than 250 estimated units of this incredibly
                competent planes. While the 21s played a pivotal role in the
                1971 India Pakistan War, they are currently being used only as
                Interceptors with a limited role as fighter jets and IAF will
                soon replace the remaining units of the MiG21 Bison with the
                Tejas LCA. The MiG 21 has a single-seater cockpit with a maximum
                speed of 1.05 mach (1300 kmph).
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.mig27} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>Sukhoi Su-30MKI</Text>
              <Text>
                The Sukhoi Su-30MKI is the most advanced fighter jet in
                operation with the Indian Air Force and is the primary air to
                air and air to ground strike machine. Also known as Flanker
                (NATO), the Su-30 MKI is built in India by HAL under a license
                agreement with Russia’s Sukhoi. The Su-30MKI is exclusively used
                by India and there’s an estimate that IAF has 290 operational
                units of 30MKI till now. The first unit was inducted in 2002.
                The Sukhoi Su-30MKI has a top speed of Mach 2 (2120 kmph) and
                has a maximum takeoff weight of 38,800 kg. The jet can carry a
                wide range of equipment from radars to missiles, bombs and event
                rockets.
              </Text>
            </View>
          </View>
          <View>
            <Image source={imagePath.mig29} style={styles.card} />
            <View style={{flexDirection: 'column', margin: 10}}>
              <Text>Mikoyan MiG-27</Text>
              <Text>
                The MiG 27 is again Soviet sourced ground-attack aircraft
                designed by Mikoyan-Gurevich Design Bureau from the Soviet Union
                and manufactured by HAL under a license agreement. The MiG27 is
                known as ‘Bahadur’ (meaning Valiant in English) in India and the
                IAF retired the last 27 ML squadron in 2017. India is only among
                a handful of countries who still operates the updated MiG-27 UPG
                ground attack aircraft. The 27s are based on the MiG23 with a
                redesigned nose and flies low altitude.
              </Text>
            </View>
          </View>

          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={this._onRefresh}
              />
            }
            data={infinitearray}
            onEndReachedThreshold={0.8}
            showsVerticalScrollIndicator={false}
            numColumns={1}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => <View style={{marginBottom: 10}} />}
            renderItem={this.renderItem}
            onEndReached={this.onEndReach}
            bounces={false}
          />
          {/* <Text>{infinitearray[0].bio}</Text> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  forFlex: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ajioLogo: {
    width: 80,
    height: 80,
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  forForm: {
    flex: 0.6,
    alignItems: 'center',
  },
  orThing: {
    flexDirection: 'row',
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fbbuttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  googlebuttonStyle: {
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
  card: {
    height: 250,
    width: 340,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10,
    resizeMode: 'contain',
  },
  textsize: {
    fontFamily: fontFamily.new,
  },

  viewlatestdealscard: {
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // justifyContent: "space-between",
    margin: 10,
    backgroundColor: colors.cardcolor,
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  dp: {
    height: 80,

    width: 80,
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  myimage: {
    height: 300,
    width: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginRight: 10,
  },
  stylesearch: {
    borderBottomColor: colors.themeColor,

    borderTopColor: colors.themeColor,
    borderLeftColor: colors.themeColor,
    borderRightColor: colors.themeColor,
  },
});
