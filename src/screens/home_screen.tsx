import { useNavigation } from "@react-navigation/native";
import { HomeNavigation } from "../navigation/types";
import { StyleSheet, View,Text, Pressable } from "react-native";
import { TESTS, TestSummary } from "../data/tests";

const HomeScreen = () => {
    const navigation = useNavigation<HomeNavigation>();

    return(
        <View style={styles.container}>
            <View style={styles.cards}>
                {TESTS.map( (test: TestSummary, index: number) => 
                    <Pressable style={styles.quizCard} key={index} onPress={() => navigation.navigate('Quiz', {testId: test.id})}>
                        <Text style={styles.testName}>{test.name}</Text>
                        <Text style={styles.cardContent}>{test.description}</Text>
                        <Text style={styles.cardContent}>{test.numberOfTasks} pytań</Text>
                    </Pressable>
                )}
            </View>
            <Pressable style={styles.resultsButton}>
                <Text style={styles.resultsText}>Wyniki</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    cards: {
        flexDirection: 'column',
        gap:5
    },
    quizCard: {
        padding: 20,
        backgroundColor: '#e7eaf6',
        borderRadius: 10,
        flexDirection: 'column',
        gap: 3
    },
    testName: {
        fontSize: 20,
        color: '#0c1244',
        fontWeight: 'bold'
    },
    cardContent: {
        color:'#3a3838',
        fontWeight: '400'
    },

    resultsButton: {
        backgroundColor: '#0c1244',
        alignItems: 'center',
        padding: 10
    },
    resultsText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default HomeScreen;