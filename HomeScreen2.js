import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#C7F4F7", "#D1F4F6", "#E5F4F5", "#00CCF9"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.circle}></View>
        {/* <View style={styles.ellipse}>
            <View style={styles.innerShape}></View>
        </View> */}

        <Text style={styles.text1}>GROW YOUR BUSINESS</Text>

        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            // Xử lý sự kiện khi nút được nhấn
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            // Xử lý sự kiện khi nút 2 được nhấn
          }}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.text2}>HOW WE WORK?</Text>

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
  circle: {
    position: "absolute",
    top: 105,
    left: 120,
    width: 140,
    height: 140,
    borderRadius: 70, // Để tạo hình tròn
    borderWidth: 15, // Độ rộng của viền
    borderColor: "#000000", // Màu của viền
  },
  // gradient: {
  //   position: 'relative',
  //   width: '100%',
  //   height: '100%',
  //   flex: 1,
  // },
  text: {
    position: "absolute",
    width: 320,
    height: 36,
    top: 417,
    left: 29,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 15, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 18, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
  },
  text1: {
    position: "absolute",
    width: 189,
    height: 58,
    top: 297,
    left: 99,
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

    width: 302,
    height: 53,
    top: 537,
    left: 30,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 18, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 21, // Chiều cao dòng
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

  button1: {
    // position: 'relative',
    width: 125,
    height: 45,
    position: "absolute",
    top: 471,
    left: 30,
    backgroundColor: "#E3C000", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    // position: 'relative',
    width: 125,
    height: 45,
    position: "absolute",
    top: 471,
    left: 210,

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
