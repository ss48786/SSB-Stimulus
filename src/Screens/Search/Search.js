import React, { Component } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Textinput from "../../Components/Textinput";
import actions from "../../redux/actions";
import types from "../../redux/types";
import colors from "../../styles/colors";
import Button from "../../Components/Button";
import { connect } from "react-redux";
import { showMessage, errorMessage } from "react-native-flash-message";
import { color } from "react-native-reanimated";
import imagePath from "../../constants/imagePath";
import Geolocation from 'react-native-geolocation-service';
import { locationPermission } from "../../utils/permission"







export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      checkarray: '',
      testarray: ''

    }

  }






  
  



renderItem = ({ item }) => {


  return (
    <View style={styles.searchview}>

      



    </View>
  );
};







render() {
  const { username, checkarray } = this.state;
  // const { data } = this.props;

  return (
    <View style={styles.viewsearchreturn}>
      <View style={{ flexDirection: 'column', margin: 20 }}>

        <Text style={{ fontSize: 40, fontWeight: '700' }}>Hi, Sahil </Text>
        <Text style={{ fontSize: 40, fontWeight: '700' }}>Find your friends </Text>
      </View>
     
      

      <View>


      </View>
      <View style={styles.viewflatlist}>
        <FlatList
          data={checkarray}
          onEndReachedThreshold={0.8}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={this.renderItem}

          bounces={false}
        />
        
      </View>
    </View>

  );
}
}


// const mapStateToProps = state => {

//   return {

//     // usersearch: state.reducer.usersearch,
//     data: state.reducer.userData,


//   }

// }
//  console.log("data at search page ",data);
// export default connect(mapStateToProps)(Search);

const styles = StyleSheet.create({
  stylesearch: {
    // borderBottomColor: colors.themeColor,

    // borderTopColor: colors.themeColor,
    // borderLeftColor: colors.themeColor,
    // borderRightColor: colors.themeColor,
    borderBottomColor: colors.searchcardcolor,
    marginTop: 30,
    backgroundColor: colors.searchcardcolor,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  card: {
    height: 80,
    width: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    margin: 10
  },
  viewlatestdealscard: {
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    // justifyContent: "space-between", 
    margin: 10,
    backgroundColor: colors.searchcardcolor,
    margin: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  searchview: {
    backgroundColor: colors.searchbackgroundcolor
  },
  viewsearchreturn: {
    backgroundColor: colors.searchbackgroundcolor
  },
  viewflatlist: {
    backgroundColor: colors.searchbackgroundcolor
  }
})
