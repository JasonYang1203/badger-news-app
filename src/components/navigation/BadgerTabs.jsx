import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import BadgerPreferencesScreen from '../screens/BadgerPreferencesScreen';
import BadgerNewsStack from "./BadgerNewsStack";

const Tab = createBottomTabNavigator();

function BadgerTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    // Define the icon name based on the route name
                    if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    }else if (route.name === 'Preferences') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="News" component={BadgerNewsStack} options={{ headerShown: false}} />
            <Tab.Screen name="Preferences" component={BadgerPreferencesScreen} />
            
        </Tab.Navigator>
    );
}

export default BadgerTabs;