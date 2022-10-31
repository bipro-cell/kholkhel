import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Game from "../screens/game";
import Home from "../screens/home";
const screens={

    Home:{

        screen:Home
    },
    Game:{

        screen:Game
    },

}
const HomeStack=createStackNavigator(screens);

export default HomeStack;
