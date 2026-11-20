import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { TESTS } from "../data/tests";

export default function DrawerContent(props: DrawerContentComponentProps){
    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            {TESTS.map((test) => 
                <DrawerItem
                    key={test.id}
                    label={test.name}
                    onPress={() => 
                        props.navigation.navigate('Main', {
                            screen: 'Quiz',
                            params: {testId: test.id}
                        })
                    }
                >
                </DrawerItem>
            )}
        </DrawerContentScrollView>
    )
}