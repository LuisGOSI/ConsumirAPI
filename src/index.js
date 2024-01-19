import React from 'react';
import ReactDOM from 'react-dom';
import { Contador} from './components/Contador';
import { Texto }from './components/Texto';
import { Lista } from './components/Lista';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Contador/>
        <Texto/>
        <Lista/>
    </>
)