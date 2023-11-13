import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

// initial state of the store
const inititalState = {
	door: {
		doorWidth: 1100,
		doorHeight: 2380,
		gekozendeur: {},
		deuren: [],
		popup: false,
		floorTexture: "tiles",
	},
	sidepanel: {
		sideOpen: true,
		sidePanelType: "doors",
		doorOpen: 0,
		drawingplan: false,
	},
	pdf: {
		data: [],
		aanvragen: false,
		offerte: "",
		popupDowmloadPdf: false,
		screenshot: false,
		naam: "",
		adres: "",
		tel: "",
		email: "",
	},
};

export const useStore = create((set) => ({
	...inititalState,

	// function to update the different objects and fields inside the state
	updateObject: (object, options) =>
		set((state) => ({
			[object]: { ...state[object], ...options },
		})),
}));

// download the react devtools extension to debug your store
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
	mountStoreDevtool("Store", useStore);
}
