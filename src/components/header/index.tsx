import { useState } from "react";
import { setSearch } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./style.scss";

const Header = () => {
	const { search } = useAppSelector(state => state.dataSlice)

	const [isFocused, setIsFocused] = useState(false)
	const handleFocus = () => {
		setIsFocused(true)
	}
	const handleBlur = () => {
		setIsFocused(false)
	}

	const dispatch = useAppDispatch()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		dispatch(setSearch(value))
	}
	return (
		<div className="header-container" >
			<span className="header-title" >Campaigns</span>
			<div className={`${isFocused ? "search-focused" : ""} search-area`}>
				<img src={require("../../assets/images/search.png")} alt="" />
				<input value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)} onBlur={handleBlur} onFocus={handleFocus} type="text" placeholder="Search" />
			</div>
		</div>
	)
}

export default Header
