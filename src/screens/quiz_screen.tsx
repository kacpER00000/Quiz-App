import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { findTest, TestSummary } from "../data/tests";
import { HomeStackParamList } from "../navigation/types";
import { View, Text, StyleSheet } from "react-native";

type Props = NativeStackScreenProps<HomeStackParamList, 'Quiz'>;

const QuizScreen = ({route}: Props) => {
    const test: TestSummary | undefined = findTest(route.params.testId);

    return(
        <View style={styles.container}>
            <Text>
                {test ? test.name : "Nie znaleziono testu."}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default QuizScreen;