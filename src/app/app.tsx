// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Route, Routes } from 'react-router-dom';
import Shop from './shop/shop';
import {RoutesCart} from "@french-blog/cart";

export function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Shop/>}></Route>
                <Route path="/cart" element={<RoutesCart/>}></Route>
            </Routes>
        </>
    );
}

export default App;
