import ReactDOM from "react-dom"
import Header from "./header"

const App = () => {
    return (
        <div>
            <Header />
        </div>
    )
};

ReactDOM.render(<App/>, document.getElementById("app"));