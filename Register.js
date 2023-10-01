import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>REGISTER</Text>

      <TextInput style={styles.textInput1} placeholder="Name" />

      <TextInput style={styles.textInput2} placeholder="Phone" />

      <TextInput style={styles.textInput3} placeholder="Email" />

      <TextInput style={styles.textInput4} placeholder="Password" />

      <TextInput style={styles.textInput5} placeholder="Birthday" />

      <View style={styles.radio1}>
        <input style={styles.radio} type="radio"></input>
        <Text style={styles.radio2}>Male</Text>
      </View>

      <View style={styles.radio3}>
        <input style={styles.radio4} type="radio"></input>
        <Text style={styles.radio5}>Male</Text>
      </View>

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          // Xử lý sự kiện khi nút 2 được nhấn
        }}
      >
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>

      <Text style={styles.text}>When you agree to terms and conditions</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "#d8efdf",
    backgroundColor: "#31AA5230",
  },
  radio: {
    position: "absolute",
    width: 23,
    height: 23,
  },
  radio4: {
    position: "absolute",
    width: 23,
    height: 23,
  },
  radio1: {
    position: "absolute",
    // alignItems: "center",
    top: 453,
    left: 36,
  },
  radio3: {
    position: "absolute",
    // alignItems: "center",
    top: 453,
    left: 143,
  },
  radio2: {
    position: "absolute",
    top: 5,
    // textAlign: "center",
    left: 36,
  },
  radio5: {
    position: "absolute",
    top: 5,
    // textAlign: "center",
    left: 36,
  },

  // button: {
  //   position: "absolute",
  //   // with: 200,
  //   // height: 200,
  //   // top: 800,

  //   borderRadius: 10, // Tăng độ cong viền
  //   paddingVertical: 100, // Tăng khoảng cách dọc
  //   paddingHorizontal: 200, // Tăng khoảng cách ngang
  //   paddingLeft,
  // },

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
  textInput1: {
    paddingLeft: 20,
    position: "absolute",
    width: 330,
    height: 54,
    top: 97,
    alignItems: "center",
    backgroundColor: "#cae1d1",
  },
  textInput2: {
    position: "absolute",
    width: 330,
    height: 54,
    top: 167,
    backgroundColor: "#cae1d1",

    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textInput3: {
    // flex: 1,
    // marginLeft: 35,
    paddingLeft: 20,
    position: "absolute",
    width: 330,
    height: 54,
    top: 237,
    alignItems: "center",

    backgroundColor: "#cae1d1",
  },
  textInput4: {
    position: "absolute",
    width: 330,
    height: 54,
    top: 307,
    backgroundColor: "#cae1d1",

    paddingHorizontal: 8,
    marginBottom: 16,
  },
  textInput5: {
    position: "absolute",
    width: 330,
    height: 54,
    top: 377,
    backgroundColor: "#cae1d1",

    paddingHorizontal: 8,
    marginBottom: 16,
  },

  text: {
    position: "absolute",
    // color: "#5D25FA",
    width: 260,
    height: 20,
    top: 561,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 16, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
  },

  text1: {
    position: "absolute",
    width: 150,
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
    top: 502,
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
