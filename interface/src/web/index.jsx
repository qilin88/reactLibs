import {createRoot} from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
const App = () => {
    return (
        <> 
            return <h1>你好</h1>
        </>
    )
}


root.render(<App />)