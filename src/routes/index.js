import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import { Home } from '../pages/Home'
import banner1 from '../pages/Products/promoBanner/Banner1'
import banner2 from '../pages/Products/promoBanner/Banner2'
import banner3 from '../pages/Products/promoBanner/Banner3'
import banner4 from '../pages/Products/promoBanner/Banner4'
import banner5 from '../pages/Products/promoBanner/Banner5'
import SeeAll from '../pages/Products/Categories/SeeAll'
import Feminine from '../pages/Products/Categories/Feminine'
import Masculine from '../pages/Products/Categories/Masculine'
import Eletronics from '../pages/Products/Categories/Eletronics'
import Acessories from '../pages/Products/Categories/Acessories'
import ProductDetails from '../pages/Details/ProductsDetails'
import ProductDetails2 from '../pages/Details/ProductsDetails2'
import Cart from '../pages/Cart/Cart'
import Register from '../pages/Register'


const Stack = createNativeStackNavigator()

export default function Routes(){
    return(

        <Stack.Navigator >
            <Stack.Screen
                name='Welcome'
                component={Welcome}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='banner1'
                component={banner1}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='banner2'
                component={banner2}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='banner3'
                component={banner3}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='banner4'
                component={banner4}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='banner5'
                component={banner5}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='SeeAll'
                component={SeeAll}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Feminine'
                component={Feminine}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Masculine'
                component={Masculine}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Eletronics'
                component={Eletronics}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Acessories'
                component={Acessories}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='ProductDetails'
                component={ProductDetails}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='ProductDetails2'
                component={ProductDetails2}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='Cart'
                component={Cart}
                options={{ headerTitle: 'Meu Carrinho'}}
            />

            <Stack.Screen
                name='Register'
                component={Register}
                options={{ headerShown: false}}
            />

            
                
        </Stack.Navigator>
        
    )
}