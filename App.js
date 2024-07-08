import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "lightblue",
        flex: 10,
        padding: 10,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 500,
          backgroundColor: "white",
          borderRadius: 22,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flex: 4,
            backgroundColor: "red",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "green",
              width: "100%",
              height: "100%",
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvIE3ZShzKdfa7YBENxJUvyh13tQPMyweCg&s",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              width: "100%",
              height: "100%",
              borderBottomColor: "gray",
              borderBottomWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                Ali Alsarraf
              </Text>
              <Text>50</Text>
            </View>
            <Text>Kuwait</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "yellow",
              position: "absolute",
              borderRadius: 50,
              overflow: "hidden",
              elevation: 50,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: "100%",
              }}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4iKihS75MSXBFERMe23vTk-UbwWMZ8cAtQ&s",
              }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, backgroundColor: "white", flexDirection: "row" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Follwers</Text>
            <Text>50K</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Likes</Text>
            <Text>4000</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Photos</Text>
            <Text>6</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
