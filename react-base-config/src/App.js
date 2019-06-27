import React,{Fragment} from 'react';
import {BrowserRouter} from "react-router-dom"
import {renderRoutes} from "react-router-config"
import Routers from "./router"
import BaseHeader from "./components/baseHeader/baseHeader"
import './css/base.less'
function App() {
	return (
		<BrowserRouter>
			<Fragment>
				<BaseHeader/>
				<div className="content">
					{renderRoutes(Routers)}
				</div>
			</Fragment>
		</BrowserRouter>
	);
}

export default App;
