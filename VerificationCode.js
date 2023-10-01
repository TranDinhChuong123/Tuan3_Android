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

export default function VerificationCode({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.text2}>CODE</Text>

        <Text style={styles.text1}>VERIFICATION</Text>

        <Text style={styles.text}>
          Enter ontime password sent on ++849092605798
        </Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput0} />
          <TextInput style={styles.textInput1} />
          <TextInput style={styles.textInput2} />
          <TextInput style={styles.textInput3} />
          <TextInput style={styles.textInput4} />
          <TextInput style={styles.textInput5} />
        </View>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            // Xử lý sự kiện khi nút 2 được nhấn
          }}
        >
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
    width: 360,
    height: 640,
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
    flexDirection: "row",
    alignItems: "center",

    // borderColor: "gray",

    // backgroundColor: "#c4c4c4",
    width: 300,
    height: 45,
  },

  textInput0: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    // borderColor: "red",

    borderWidth: 1,
    paddingHorizontal: 8,
    top: 387,
    left: 32,
  },
  textInput1: {
    flex: 1,
    position: "absolute",

    width: 50,
    height: 50,
    top: 387,
    left: 82,
    borderWidth: 1,
    paddingHorizontal: 8,

    // top: 387,
    // left: 32,
    // backgroundColor: null,
  },
  textInput2: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    top: 387,
    left: 132,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  textInput3: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    top: 387,
    left: 182,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  textInput4: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    top: 387,
    left: 232,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  textInput5: {
    flex: 1,
    position: "absolute",
    width: 50,
    height: 50,
    top: 387,
    left: 282,
    borderWidth: 1,
    paddingHorizontal: 8,
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

  text: {
    position: "absolute",
    width: 302,
    height: 53,
    top: 320,
    left: 39,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 15, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 18, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
  },

  text1: {
    position: "absolute",
    width: 302,
    height: 53,
    top: 245,
    left: 28,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 20, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 23, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 180,
    height: 70,
    top: 113,
    left: 102,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 60, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 70, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",

    color: " #FFFFFF",
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
    width: 305,
    height: 45,
    position: "absolute",
    top: 471,
    left: 30,

    backgroundColor: "#f1c300", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    // position: 'absolute',
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "900",
    color: "#0a0905", // Màu văn bản
  },
});
