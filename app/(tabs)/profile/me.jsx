import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { db } from "../../../confiq/firebase";

export default function Me () {
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        async function fetchPostsByUser () {
            const receivedPosts = [];
            try {
              const q = query(collection(db,"discussions"),where("author","==",""));
              const onSnapShot = await getDocs(q);  
              onSnapShot.docs.forEach(item => receivedPosts.push({
                id: item.id,
                data: item.data()
              }));

              setPosts(receivedPosts);
            } catch (error) {
                console.log("Unable to fetch user posts data",error)
            }
        }

        fetchPostsByUser();
    },[]);

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.wrapper}>
                {/* profile info */}
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image 
                    style={{
                    width: 98,
                    height: 98,
                    resizeMode: "cover",
                    borderRadius:150,
                    }}
                    source={{ uri: "https://pixabay.com/get/g579a841f7605eeb47893e148277907e555b0091f0138b1ede3c24b0d673fc7e1f1e09dfb7aac785d040f4f45d78b6858d15a8d7da7d0cfe86d97ee64586f3c12298c8b65230282847549568bf2211b22_640.jpg" }} 
                    alt="user photo"
                    />
                    <Text style={{ fontSize: 24, fontWeight: "500" }}>Emeka Johnson</Text>
                </View>

                {/* posts by the user */}
                <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                    {posts.length > 0 &&
                    posts.map(item => (
                        <View key={item.id} style={{ width: "33.3%", }}>
                            <Image 
                            style={{
                            width: 140,
                            height: 220,
                            resizeMode: "cover",
                            }}
                            source={{ uri: item.data.imgUrl }} 
                            alt="user photo"
                            />
                        </View>
                    ))}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        // paddingHorizontal: 12,
        paddingBottom: 60,
        gap: 24
    },
})