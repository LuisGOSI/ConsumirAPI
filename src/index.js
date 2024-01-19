import React from 'react';
import ReactDOM from 'react-dom';
import { Contador} from './components/Contador';
import { Texto }from './components/Texto';
import { Lista } from './components/Lista';
import { Puerta } from './components/Puerta';

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <Contador/>
        <Texto/>
        <Lista/>
        <Puerta/>
    </>
)