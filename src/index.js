import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './components/App';
import Home from './components/home/Home';
import Wikipedia from './components/wikipedia/Wikipedia';
import Youtube from './components/youtube/Youtube';
import OutsideApiRequester from './components/outsideRequester/OutsideRequester';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Navigate to="/home" replace={true} />} />
                <Route path="home" element={<Home />} />
                <Route path="wikipedia" element={<Wikipedia />} />
                <Route path="youtube" element={<Youtube />} />
                <Route path="outside-requester" element={<OutsideApiRequester />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);