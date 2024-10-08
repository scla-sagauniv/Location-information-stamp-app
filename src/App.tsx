import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GPS from '@/pages/GPS';
import Page404 from '@/pages/Page404';

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<GPS />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
