import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./components/App";
import Wikipedia from './components/wikipedia/Wikipedia';
import Youtube from './components/youtube/Youtube';
import OutsideApiRequester from './components/outsideRequester/OutsideRequester';



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="wikipedia" element={<Wikipedia />} />
                <Route path="youtube" element={<Wikipedia />} />
                <Route path="outside-requester" element={<OutsideApiRequester />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.querySelector('#root')
);