// import { StatusBar } from "expo-status-bar";
// import { Button, View, Text } from "react-native-web";
// export default function HomeScreen({ navigation }) {
//   return (
//     <View>
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigation.navigate("Profile", { name: "Jane" })}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-web";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["rgba(0, 204, 249, 0.359978)", "#00CCF9"]}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <View style={styles.circle}></View>

        <Text style={styles.text1}>GROW YOUR BUSINESS</Text>

        <Text style={styles.text}>
          We will help you to grow your business using online server
        </Text>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            // Xử lý sự kiện khi nút được nhấn
            navigation.navigate("LoginScreen");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    alignItems: "center",

    width: 360,
    height: 640,
  },
  circle: {
    // position: "absolute",
    top: 105,
    // left: 120,
    width: 140,
    height: 140,
    borderRadius: 70, // Để tạo hình tròn
    borderWidth: 15, // Độ rộng của viền
    borderColor: "#000000", // Màu của viền
  },
  text: {
    position: "absolute",
    width: 320,
    height: 36,
    top: 417,
    // left: 29,
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
    // left: 99,
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

    flex: 1,
    width: "100%",
    height: "100%",
  },

  button1: {
    // position: 'relative',
    width: 119,
    height: 48,
    position: "absolute",
    top: 498,
    left: 50,
    borderRadius: 10,
    backgroundColor: "#f1c300", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    // position: 'relative',
    width: 119,
    height: 48,
    position: "absolute",
    top: 498,
    left: 204,
    borderRadius: 10,
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
