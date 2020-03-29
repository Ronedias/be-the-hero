import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';


//exportando componetente Routes que retorna as rotas
export default function Routes(){
    return (
        <NavigationContainer>

             {/* screenOptions  desabilita o cabeçario da aplicação */}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Incidents' component={Incidents} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    );
}