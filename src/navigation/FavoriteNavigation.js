import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import FavoriteScreen from "../screens/Favorite"

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={FavoriteScreen}
            options={{title:"Favoritos"}}  
           />            
        </Stack.Navigator>
  )
}   