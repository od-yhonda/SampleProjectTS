import React, { Component } from "react";
import {
  AppRegistry,
  SectionList,
  StyleSheet,
  Text,
  View,
  FlatList,
  VirtualizedListProps,
  SafeAreaView,
  StatusBar
} from "react-native";

import { Button } from "react-native-elements";

export default class SampleComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <SectionList
            sections={[
              { title: "D", data: ["Devin"] },
              {
                title: "J",
                data: [
                  "Jackson",
                  "James",
                  "Jillian",
                  "Jimmy",
                  "Joel",
                  "John",
                  "Julie"
                ]
              }
            ]}
            keyExtractor={(item, index) => index}
            renderSectionHeader={({ section }) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            // renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderItem={({ item }) => <Button title={item} />}
            // renderItem={({ item }) => (
            //   <FlatList
            //     data={[
            //       { key: { item } },
            //       { key: "Jackson" },
            //       { key: "J" },
            //       { key: "James" },
            //       { key: "Joel" }
            //     ]}
            //     renderItem={({ item }) => (
            //       <View style={styles.item}>
            //         <Text style={styles.item}>{item.key}</Text>
            //       </View>
            //     )}
            //     // horizontal={true}
            //     // numColumns={5}
            //     //   contentContainerStyle={styles.list}
            //   />
            // )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

// export default class SampleComponent extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList
//           data={[
//             { key: "Devin" },
//             { key: "Jackson" },
//             { key: "J" },
//             { key: "James" },
//             { key: "Joel" },
//             { key: "John" },
//             { key: "poooooooooooooooool" },
//             { key: "Jillian" },
//             { key: "Jimmy" },
//             { key: "Julie" }
//           ]}
//           renderItem={({ item }) => (
//             <View style={styles.item}>
//               <Text style={styles.itemText}>{item.key}</Text>
//             </View>
//           )}
//           // horizontal={true}
//           // numColumns={5}
//           contentContainerStyle={styles.list}
//         />
//         {/* <VirtualizedList /> */}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 36,
//     backgroundColor: "#8fbc8f"
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//     backgroundColor: "#6495ed"
//   },
//   itemText: {
//     flex: 1,
//     padding: 10,
//     // paddingTop: 10,
//     // paddingBottom: 10,
//     fontSize: 18,
//     height: 44,
//     color: "blue",
//     backgroundColor: "#40e0d0"
//   },
//   list: {
//     backgroundColor: "#ffd700",
//     // flex: 1,
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     flexWrap: "wrap"
//   }
// });

/**
 * `flexWrap: `wrap`` is not supported with the `VirtualizedList` components.
 * Consider using `numColumns` with `FlatList` instead.
 */
