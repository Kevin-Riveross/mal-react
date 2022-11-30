import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import './css/styles.css'
function App(){
    return (
        <div className="home">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
export default App;