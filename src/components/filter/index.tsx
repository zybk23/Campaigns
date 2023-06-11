import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setIsOpenFilterSide, setSelectedEndDate, setSelectedStartDate } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./style.scss";

const Filter = () => {
	const { selectedEndDate, selectedStartDate } = useAppSelector(state => state.dataSlice)
	const dispatch = useAppDispatch()
	const [startDate, setStartDate] = useState<Date | null>();
	const [endDate, setEndDate] = useState<Date | null>();

	const handleChangeStartDate = (date: null | Date) => {
		if (selectedEndDate && moment(date).unix() > selectedEndDate) {
			return alert("StartDate cannot be bigger than endDate")
		}
		dispatch(setSelectedStartDate(moment(date).unix()))
		setStartDate(date)
	}
	const handleChangeEndDate = (date: null | Date) => {
		if (selectedStartDate && moment(date).unix() < selectedStartDate) {
			return alert("StartDate cannot be bigger than endDate")
		}
		dispatch(setSelectedEndDate(moment(date).unix()))
		setEndDate(date)

	}

	const handleClick = () => {

		dispatch(setIsOpenFilterSide(false))
	}
	return (
		<div className="filter" >
			<div className="filter-title-container" >
				<img onClick={handleClick} src={require("../../assets/images/arrow.png")} alt="" />
				<span>Filter Results</span>
			</div>
			<span className="title" >Filter By Period</span>
			<div className="time-container" >
				<DatePicker className="date-picker" selected={startDate} onChange={(date) => handleChangeStartDate(date)} />
				<DatePicker className="date-picker" selected={endDate} onChange={(date) => handleChangeEndDate(date)} />
			</div>
		</div>
	)
}

export default Filter
