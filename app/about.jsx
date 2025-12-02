import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function notify () {
    return (
        Alert.alert(
            "Information",
            "Welcome to Unichat! Take advantage of all the features by creating an account.",
            [
                {text: "Okay"},
                {text: "Create account",onPress: () => {}}
            ]
        )
    )
}

export default function About () {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.main}>
                    <Text style={styles.heading}>About unichat</Text>
                    <Pressable onPress={() => notify()}>
                        <Text style={styles.action}>Press for more</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingHorizontal: 12
    },
    heading: {
        fontSize: 24
    },
    action: {
        fontSize: 16,
        text: "brown"
    }
})