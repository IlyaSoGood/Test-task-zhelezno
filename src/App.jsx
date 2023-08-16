import './styles/App.scss';

import AppRouter from './components/AppRouter';
import { ListContext } from './context';

const App = () => {
    return (
        <ListContext.Provider value={[]}>
            <AppRouter/>
        </ListContext.Provider>
    );
};

export default App;