import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useFormik } from 'formik';
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const screenWidth = Dimensions.get("window").width;

export default function DiscussionPostCard({ postData }) {
    const [currentUser,setCurrentUser] = useState("yyyewjw");
    const [showCommentArea,setShowCommentArea] = useState(false);

    const { handleChange,handleBlur,errors,values,touched,handleSubmit } = useFormik({
        initialValues: { text: "" },
        onSubmit: () => {

        }
    });

    return (
        <View style={{ flexDirection: "column", gap: 4}}>
            <Image 
            style={{
            width: screenWidth - 24,
            height: 400,
            resizeMode: "cover",
            borderRadius:6,
            }}
            source={{ uri: postData.data.imgUrl }} 
            alt="event photo"
            />
            <Text style={{fontWeight: "bold"}}>{postData.data.title}</Text>
            <Text>{postData.data.text}</Text>

            {/* reactions */}
            <View style={{ flexDirection: "row", gap: 16 }}>
                {/* likes */}
                <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text style={{ fontSize: 11 }}>{1003}</Text>
                    <TouchableOpacity>
                        {currentUser == "me" ? 
                        <Feather name="heart" size={18} color="black" />
                        : 
                        <FontAwesome name="heart" size={18} color="black" />}
                    </TouchableOpacity>
                </View>

                {/* comments */}
                <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text style={{ fontSize: 11 }}>{7}</Text>
                    <TouchableOpacity onPress={() => setShowCommentArea(!showCommentArea)}>
                        <FontAwesome6 name="comment" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* write a comment */}
            <View>
                {showCommentArea && <TextInput 
                keyboardType="default"
                placeholder="what do you think?"
                multiline={true}
                style={styles.input}
                value={values.body}
                onChangeText={handleChange("text")}
                onBlur={handleBlur("text")}/>}

                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: "brown",
        borderRadius: 4,
        fontSize: 16,
        paddingHorizontal: 6,
    },
});