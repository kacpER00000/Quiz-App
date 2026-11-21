import { StyleSheet, View,Text, Pressable } from "react-native";

type TermsProps = {
    onAccept: () => void
}

const Terms = ({onAccept}: TermsProps) => {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>Zanim zaczniemy</Text>
                <Text style={styles.contentText}>Aplikacja przechowuje wyniki quizów wyłącznie na tym urządzeniu. Wynik zawiera podany pseudonim, liczbę punktów i nazwę testu.</Text>
                <Text style={styles.contentText}>Ten ekran pojawia się tylko przy pierwszym uruchomieniu.</Text>
            </View>
            <Pressable style={styles.acceptButton} onPress={onAccept}>
                <Text style={styles.acceptText}>Akceptuję</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20
    },
    content: {
        flexDirection: 'column',
        gap: 10
    },
    header: {
        fontSize: 30,
        color: '#0c1244',
        fontWeight: 'bold',
    },
    contentText: {
        fontSize: 17,
        color: '#3a3838',
        fontWeight: '400',
        lineHeight: 25,
    },
    acceptButton: {
        backgroundColor: '#0c1244',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10
    },
    acceptText: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Terms;