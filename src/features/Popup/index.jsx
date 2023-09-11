import { useStore } from "../../stores/appStore";
import styled from "@emotion/styled";
import shortId from "shortid";
import VasteRaamDefault from "../../data/deurenDefault/vastraamDefault.json";
import EnkeleDeurDefault from "../../data/deurenDefault/enkeledeurDefault.json";
import DubbeleDeurDefault from "../../data/deurenDefault/dubbeledeurDefault.json";
// import Slag3DeurDefault from "../../data/deurenDefault/3slagdeurDefault.json";
// import Slag4DeurDefault from "../../data/deurenDefault/4slagdeurDefault.json";

const Popup = () => {
	const updateObject = useStore((state) => state.updateObject);
	const deuren = useStore((state) => state.door.deuren);

	return (
		<PopupBox>
			<PopupContent>
				<Backbutton onClick={() => updateObject("door", { popup: false })}>
					<img src="./x.svg" alt="" />
				</Backbutton>
				<div
					onClick={() => {
						const deurenArray = [...deuren];
						const deurObj = { ...VasteRaamDefault };
						deurObj.id = shortId.generate();
						deurenArray.push(deurObj);
						updateObject("door", { deuren: deurenArray });
						updateObject("door", { popup: false });
					}}>
					<img src="./doortypes/vast_raam.jpg" alt="glazen deur" />
					<p>Vast raam</p>
				</div>

				<div
					onClick={() => {
						const deurenArray = [...deuren];
						const deurObj = { ...EnkeleDeurDefault };
						deurObj.id = shortId.generate();
						deurenArray.push(deurObj);
						updateObject("door", { deuren: deurenArray });
						updateObject("door", { popup: false });
					}}>
					<img src="./doortypes/enkele_deur.jpg" alt="enkele deur" />
					<p>Enkele deur</p>
				</div>

				<div
					onClick={() => {
						const deurenArray = [...deuren];
						const deurObj = { ...DubbeleDeurDefault };
						deurObj.id = shortId.generate();
						deurenArray.push(deurObj);
						updateObject("door", { deuren: deurenArray });
						updateObject("door", { popup: false });
					}}>
					<img src="./doortypes/dubbele_deur.jpg" alt="dubbele deur" />
					<p>Dubbele deur</p>
				</div>

				{/* <div
					onClick={() => {
						const deurenArray = [...deuren];
						const deurObj = { ...Slag3DeurDefault };
						deurObj.id = shortId.generate();
						deurenArray.push(deurObj);
						updateObject("door", { deuren: deurenArray });
						updateObject("door", { popup: false });
					}}>
					<img src="./doortypes/3_slagdeur.jpg" alt="3 slagdeur" />
					<p>3 slagdeur</p>
				</div>

				<div
					onClick={() => {
						const deurenArray = [...deuren];
						const deurObj = { ...Slag4DeurDefault };
						deurObj.id = shortId.generate();
						deurenArray.push(deurObj);
						updateObject("door", { deuren: deurenArray });
						updateObject("door", { popup: false });
					}}>
					<img src="./doortypes/4_slagdeur.jpg" alt="4 slagdeur" />
					<p>4 slagdeur</p>
				</div> */}
			</PopupContent>
		</PopupBox>
	);
};

const PopupBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.4);
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10;
`;

const PopupContent = styled.div`
	height: 300px;
	width: 600px;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: wrap;
	position: absolute;
	padding: 30px;
	gap: 30px;
	padding-top: 60px;

	div {
		cursor: pointer;
		width: 150px;
		background: #f7f7f7;
		border-radius: 10px;
		overflow: hidden;

		img {
			vertical-align: middle;
			width: 100%;
		}

		p {
			text-align: center;
			padding: 10px;
			color: #7d8896;
			font-size: 16px;
		}

		&:hover p {
			color: #222221;
		}
	}
`;

const Backbutton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: #222221;
	border: none;
	padding: 8px;
	cursor: pointer;

	img {
		border: none;
		&:hover {
			border: none;
		}
	}
`;

export default Popup;
