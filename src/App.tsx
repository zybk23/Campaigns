import './App.scss';
import Filter from './components/filter';
import Header from './components/header';
import Table from './components/table';
import { useAppSelector } from "./store/hooks";

function App() {
	const { isOpenFilterSide } = useAppSelector(state => state.dataSlice)

	return (
		<div className="app">
			<div className='main-container' >
				<Header />
				<div className='content'>
					<Table />
				</div>
			</div>
			<div className={`${isOpenFilterSide ? "open-filter" : ""} filter-container`}>
				<Filter />
			</div>

		</div>
	);
}

export default App;
