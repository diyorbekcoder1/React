import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';

// const text =<h1>Salom Devbek</h1>
//
// const el =(
//     <div>
//         <h1> {text}</h1>
//         <input type="text"/>
//         <button>Hello </button>
//     </div>
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)

