import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import Home from './components/home/Home';
import Wikipedia from './components/wikipedia/Wikipedia';
import PublicApis from './components/publicApis/PublicApis';
import ShoppingList from './components/shoppingList/ShoppingList';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Navigate to="/home" replace={true} />} />
                <Route path="home" element={<Home />} />
                <Route path="wikipedia" element={<Wikipedia />} />
                <Route path="public-apis" element={<PublicApis />} />
                <Route path="shopping-list" element={<ShoppingList />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);