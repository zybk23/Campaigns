import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { campaignsData, campaignsDataType } from "../../assets/constants/data";


export interface stateType {
	campaignsData: campaignsDataType[],
	search: string,
	isOpenFilterSide: boolean,
	selectedStartDate: number | null,
	selectedEndDate: number | null,
}

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		campaignsData,
		search: "",
		isOpenFilterSide: false,
		selectedStartDate: null,
		selectedEndDate: null
	},
	reducers: {
		setSearch: (state: stateType, action: PayloadAction<string>) => {
			state.search = action.payload
		},
		setIsOpenFilterSide: (state: stateType, action: PayloadAction<boolean>) => {
			state.isOpenFilterSide = action.payload
		},
		setSelectedStartDate: (state: stateType, action: PayloadAction<number | null>) => {
			state.selectedStartDate = action.payload
		},
		setSelectedEndDate: (state: stateType, action: PayloadAction<number | null>) => {
			state.selectedEndDate = action.payload
		},
		setClearAllState: (state: stateType) => {
			state.selectedEndDate = null
			state.selectedStartDate = null
			state.isOpenFilterSide = false
			state.search = ""

		},
	},

});

export const {
	setSearch, setIsOpenFilterSide, setSelectedStartDate, setSelectedEndDate, setClearAllState
} = dataSlice.actions;

export default dataSlice.reducer;
