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

export default function ForgetPassword({ navigation }) {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Image
          source={require("./image/PASS.jpg")} // Đường dẫn đến biểu tượng của bạn
          style={styles.passIcon}
        />

        <Text style={styles.text1}>FORGET PASSWORD</Text>

        <View style={styles.inputContainer}>
          <Image
            source={require("./image/mail_3494619.png")} // Đường dẫn đến biểu tượng của bạn
            style={styles.icon}
          />
          <TextInput style={styles.textInput} placeholder=" Email" />
        </View>

        <Text style={styles.text}>
          Provide your account’s email for which you want to reset your password
        </Text>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            console.log("aaa");
            // Xử lý sự kiện khi nút 2 được nhấn
            navigation.navigate("111");
          }}
        >
          <Text style={styles.buttonText}>NEXT</Text>
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
    alignItems: "center",
    justifyContent: "center",
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
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    // paddingHorizontal: 8,
    backgroundColor: "#c4c4c4",
    width: 300,
    height: 45,
  },
  icon: {
    width: 48,
    height: 45,
    marginRight: 7,
    backgroundColor: "#c4c4c4",
  },
  textInput: {
    // flex: 1,
    position: "absolute",
    width: "100%",
    height: 45,
    paddingLeft: 48,
    // top: 385,

    backgroundColor: null,
  },

  text: {
    position: "absolute",
    width: 320,
    height: 36,
    top: 320,
    left: 30,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 15, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 18, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
  },

  text1: {
    position: "absolute",
    width: 140,
    height: 58,
    top: 230,
    left: 113,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 25, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 29, // Chiều cao dòng
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
