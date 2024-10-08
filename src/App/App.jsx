import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "../pages/Home";
import Layout from "../components/Layout";

function App() {
	return (
		<HelmetProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route
							index
							element={<Home />}
						/>
					</Route>
				</Routes>
			</Router>
		</HelmetProvider>
	);
}

export default App;
