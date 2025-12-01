import { FlatList, Text, View } from "react-native";
import { schedules } from "../assets/local-data/schedules";

export default function Schedules () {
    return (
        <View style={{ flex: 1, padding: 16}}>
            <Text style={{ fontSize: 24,marginBottom: 8}}>Upcoming Schedules</Text>

            <FlatList
            data={schedules}
            keyExtractor={(item) => item.title}
            renderItem={({item}) => {
                return (
                    <View style={{
                        padding: 8,
                        borderRadius: 6,
                        backgroundColor: "brown"
                    }}>
                        <Text style={{ fontSize: 16, color: "white"}}>{item.title}</Text>
                        <Text style={{ fontSize: 12, color: "oldlace"}}>{item.desc}</Text>
                    </View>
                )
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ height: 12 }}></View>
                )
            }}
            />
        </View>
    )
}