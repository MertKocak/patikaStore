import React from "react";
import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions, TextInput } from "react-native";
import data from "./data.json";
import ProductsCard from "./components/ProductsCard";


function App(){
  return(
    <SafeAreaView style={styles.container}>
      <View>
        <Text style = {styles.navbarText}>PATİKA STORE</Text>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 100}}
          ListHeaderComponent={
            <View style={styles.container}>
              <TextInput placeholder="Ara..." textAlign="center" style={styles.input}/>
            </View>
          }
          numColumns={2}
          data={data}
          renderItem={({item}) => <ProductsCard data = {item} />}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "white",
  },
  searchBar: {
    marginLeft: 10,
    marginRight:10,
    marginTop: 6,
    height: 44,
    width: Dimensions.get("window").width / 1 - 20,
    backgroundColor: "#eceff1",
    borderRadius: 12,
  },
  searchBarText: {
    marginTop: 8,
    marginLeft: 16,
    fontSize: 18,
    color: "gray",
  },
  navbarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "purple",
    textAlign: "center",
    marginTop: 4
  },
  input: {
    backgroundColor: "#eceff1",
    width: Dimensions.get("window").width - 20,
    marginLeft:10,
    marginTop: 6,
    marginRight:10,
    height: 44,
    borderRadius: 12,
  }
})

export default App;
