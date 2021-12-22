import ReactDOM from "react-dom"
import Header from "./Header"
import {useEffect, useState} from "react";
import {ApiRoutes} from "./utils/api-routes"
import Acfs from "./Acfs";

const $appContainer = document.getElementById("app"),
    siteUrl = $appContainer.dataset.siteUrl,
    pageId = $appContainer.dataset.pageId;

const App = () => {
    const [acfs, setAcfs] = useState([]);

    useEffect(() => {
        requestPageContent()
    }, []);

    async function requestPageContent() {
        const rest = await fetch(ApiRoutes.page(siteUrl, pageId))
        const json = await rest.json();
        setAcfs(json.acf);
    }

    return (
        <div>
            <Header/>
            <Acfs acfs={Object.entries(acfs)} />
        </div>
    )
};

ReactDOM.render(<App/>, $appContainer);