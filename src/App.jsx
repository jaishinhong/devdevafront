import UserContextProvider from "./context/UserContextProvider";
import Router from "./router/Router";

function App() {
    return (
        <>
            <UserContextProvider>
                <Router />
            </UserContextProvider>
        </>
    );
}

export default App;
