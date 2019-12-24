    import {createAppContainer, createSwitchNavigator} from 'react-navigation'
    import List from './pages/List'
    import Insert from './pages/Insert'
    const Routes = createAppContainer(
        createSwitchNavigator({
            List,
            Insert
        })
    )
    export default Routes
