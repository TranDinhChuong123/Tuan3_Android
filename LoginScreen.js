import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LOGIN</Text>

      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput1} placeholder="Password" />

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          // Xử lý sự kiện khi nút 2 được nhấn
        }}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>When you agree to terms and conditions</Text>

      {/* <Text style={styles.link}>For got your password?</Text> */}
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          // Xử lý sự kiện khi nút được nhấn
          console.log("aaa");
          navigation.navigate("ForgetPassword");
        }}
      >
        <Text style={styles.text}>For got your password?</Text>
      </TouchableOpacity>

      <Text style={styles.text3}>Or login with</Text>

      <View style={styles.inputContainer}>
        {/* <Image
          source={require("./facebook_174848.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        /> */}
        <Image
          source={require("./image/facebook_174848.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        />
      </View>
      <View style={styles.inputContainer1}>
        {/* <Image
          source={require("./facebook_174848.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        /> */}
        <Image
          source={require("./image/letter-z_6819301.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon1}
        />
      </View>
      <View style={styles.inputContainer2}>
        {/* <Image
          source={require("./facebook_174848.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon}
        /> */}
        <Image
          source={require("./image/google_300221.png")} // Đường dẫn đến biểu tượng của bạn
          style={styles.icon1}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "#d8efdf",
    backgroundColor: "#31AA5230",
  },

  passIcon: {
    position: "absolute",
    backgroundColor: null,
    top: 76,
    left: 128,
    height: 117,
    width: 105,
  },
  inputContainer: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#475993",
    width: 110,
    height: 45,
    top: 527,
    left: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer1: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#00b2ff",
    width: 110,
    height: 45,
    top: 527,
    left: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer2: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#ffffff",
    width: 110,
    height: 45,
    top: 527,
    left: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    // flex: 1,
    // marginLeft: 35,
    paddingLeft: 20,
    position: "absolute",
    width: 330,
    height: 54,
    top: 131,
    alignItems: "center",

    backgroundColor: "#cae1d1",
  },
  textInput1: {
    paddingLeft: 20,
    position: "absolute",
    width: 330,
    height: 54,
    top: 218,

    alignItems: "center",
    backgroundColor: "#cae1d1",
  },
  // icon: {
  //   position:'absolute',
  //   left: -160,
  //   width: 48,
  //   height: 45,

  // },

  // textInput: {
  //   position: 'absolute',
  //   width: 305,
  //   height: 45,
  //   top: 385,
  //   left: 100,
  //   backgroundColor:'#c4c4c4',
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   paddingHorizontal: 8,
  //   marginBottom: 16,
  // },
  link: {
    // textDecorationLine: "none", // Loại bỏ gạch chân
    color: "blue", // Màu của liên kết
    position: "absolute",
    // color: "#5D25FA",
    width: 300,
    height: 50,
    top: 425,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    color: "#5D25FA",
    top: 5,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 16, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
  },

  text1: {
    position: "absolute",
    width: 89,
    height: 29,
    top: 40,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 25, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 29, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 260,
    height: 29,
    top: 397,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 17, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text3: {
    position: "absolute",
    width: 260,
    height: 20,
    top: 464,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 17, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },

  gradient: {
    position: "relative",
    width: 360,
    height: 640,
    flex: 1,
    width: "100%",
    height: "100%",
  },

  button2: {
    // position: 'relative',
    width: 330,
    height: 45,
    position: "absolute",
    top: 334,
    borderRadius: 2,

    backgroundColor: "#E53935", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    // position: 'absolute',
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23,
    color: "white", // Màu văn bản
    alignItems: "center",
  },
});
