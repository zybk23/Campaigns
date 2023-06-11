import moment from "moment";
import { useState } from "react";
import { setClearAllState, setIsOpenFilterSide } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import Pagination from "../pagination";
import "./style.scss";



const Table = () => {
	const dispatch = useAppDispatch()
	const [currentPage, setCurrentPage] = useState(1);
	const [showFilterResult, setShowFilterResult] = useState(false)
	const [showFilteToogle, setShowFilterToggle] = useState(false)
	const [isClearMenuOpen, setIsClearMenuOpen] = useState(false)



	let itemsPerPage = 9;
	const pages = []

	const todayDate = moment(new Date()).unix()

	const { campaignsData, search, isOpenFilterSide, selectedEndDate, selectedStartDate } = useAppSelector(state => state.dataSlice)
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	let filteredData = campaignsData
	filteredData = campaignsData.filter(data => {
		if (search === "") return data
		return data.name.toLowerCase().includes(search.toLowerCase())
	})

	if (selectedEndDate) {
		filteredData = campaignsData.filter(data => {
			return moment(data.endDate, "DD-MM-YYYY").unix() < selectedEndDate
		})
	}
	if (selectedStartDate) {
		filteredData = campaignsData.filter(data => {
			return moment(data.startDate, "DD-MM-YYYY").unix() > selectedStartDate
		})
	}
	for (let i = 1; i <= Math.ceil(filteredData.length / itemsPerPage); i++) {
		pages.push(i);
	}

	filteredData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

	const handleOpenFilterSide = () => {
		dispatch(setIsOpenFilterSide(!isOpenFilterSide))
	}

	const handLeave = () => {
		setShowFilterResult(false)

	}
	const handleEnter = () => {
		setShowFilterResult(true)

	}
	const handleHideFilterToggle = () => {
		setShowFilterToggle(false)

	}
	const handleShowFilterToggle = () => {
		setShowFilterToggle(true)

	}
	const handleOpenClearMenu = () => {
		setIsClearMenuOpen(!isClearMenuOpen)
		setShowFilterToggle(false)
	}
	const handleClearAllState = () => {
		dispatch(setClearAllState())
	}
	return (
		<div className="content-container" >

			<div className="table-container" >
				<div className="table-header">
					<div onMouseLeave={handLeave} onMouseEnter={handleEnter} onClick={handleOpenFilterSide} className="filter-container" >
						<img src={require("../../assets/images/filter.png")} alt="" />
						{
							showFilterResult &&
							<span>Filter results</span>
						}
					</div>
					<div onMouseLeave={handleHideFilterToggle} onMouseEnter={handleShowFilterToggle} onClick={handleOpenClearMenu} className="filter-container" >
						<img src={require("../../assets/images/menu.png")} alt="" />
						{
							showFilteToogle &&
							<span>Filter menu</span>
						}
						{
							isClearMenuOpen &&
							<div onClick={handleClearAllState} className="clear" >Clear all filters</div>
						}
					</div>
				</div>
				<div className="table-title" >
					<span>Name</span>
					<span>Status</span>
					<span>Start date</span>
					<span>End date</span>
					<span>Badget</span>
				</div>
				<div className="table-content-container" >
					{
						filteredData.map(item => (
							<div key={item.id} className="table-content" >
								<span>{item.name}</span>
								<span> {
									todayDate < moment(item.endDate, "DD-MM-YYYY").unix()
										? <div className="status-container" >
											<img src={require("../../assets/images/accept.png")} alt="" />
											<span>Active</span>
										</div>
										: <div className="status-container" >
											<img src={require("../../assets/images/cancel.png")} alt="" />
											<span>Inactive</span>
										</div>
								} </span>
								<span>{item.startDate}</span>
								<span>{item.endDate}</span>
								<span>{item.Budget}</span>
							</div>

						))
					}

				</div>
			</div>
			<Pagination
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				pages={pages}
			/>
		</div>
	)
}

export default Table
