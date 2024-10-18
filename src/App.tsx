import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GPS from '@/pages/GPS';
import Demo from '@/pages/Demo';
import Page404 from '@/pages/Page404';

function App() {
	return (
		<>
			<div className="App">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<GPS />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="*" element={<Page404 />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
