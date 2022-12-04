import NoneLayout from "./layouts/NoneLayout";

import HomePage from "./pages/HomePage";

import 'bootstrap/dist/css/bootstrap.min.css'; // important!
function App() {
    return (
        <>
            <NoneLayout>
                <HomePage />
            </NoneLayout>
            
        </>
    );
}

export default App;
