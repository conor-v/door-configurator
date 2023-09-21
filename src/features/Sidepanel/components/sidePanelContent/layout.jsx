import Bovenlicht from "@/components/Layout/BovenLicht";
import { useStore } from "../../../../stores/appStore";
import styled from "@emotion/styled";
import ZijPaneel from "@/components/Layout/ZijPaneel";

const Layout = () => {
	const { hingedDoor, floorPump, pumpInDoor, slidingDoor, doortype } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<div>
			{doortype === "Vast raam" && (
				<>
					<InputComp>
						<h3>Deur opening breedte</h3>
						<DisplayBox>
							<button
								disabled={gekozendeur.doorWidth === 800}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorWidth: gekozendeur.doorWidth - 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								-
							</button>
							<p>{`${gekozendeur.doorWidth}mm`}</p>
							<button
								disabled={gekozendeur.doorWidth === 1200}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorWidth: gekozendeur.doorWidth + 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								+
							</button>
						</DisplayBox>

						<input
							type="range"
							name="doorWidth"
							id="doorWidth"
							value={gekozendeur.doorWidth}
							min="800"
							max="2200"
							step="1"
							onChange={(e) => {
								const updatedGekozendeur = { ...gekozendeur, doorWidth: e.target.valueAsNumber };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
						/>

						<MinMax>
							<p>800</p>
							<p>2200</p>
						</MinMax>
					</InputComp>

					<InputComp>
						<h3>Deur opening hoogte</h3>
						<DisplayBox>
							<button
								disabled={gekozendeur.doorHeight === 1800}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorHeight: gekozendeur.doorHeight - 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								-
							</button>
							<p>{`${gekozendeur.doorHeight}mm`}</p>
							<button
								disabled={gekozendeur.doorHeight === 2520}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorHeight: gekozendeur.doorHeight + 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								+
							</button>
						</DisplayBox>

						<input
							type="range"
							name="doorHeight"
							id="doorHeight"
							value={gekozendeur.doorHeight}
							min="1800"
							max="2520"
							step="1"
							onChange={(e) => {
								const updatedGekozendeur = { ...gekozendeur, doorHeight: e.target.valueAsNumber };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
						/>

						<MinMax>
							<p>1800</p>
							<p>2520</p>
						</MinMax>
					</InputComp>
				</>
			)}

			{doortype === "Raam" && (
				<>
					<InputComp>
						<h3>Deur opening breedte</h3>
						<DisplayBox>
							<button
								disabled={gekozendeur.doorWidth === gekozendeur.minwidth}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorWidth: gekozendeur.doorWidth - 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								-
							</button>
							<p>{`${gekozendeur.doorWidth}mm`}</p>
							<button
								disabled={gekozendeur.doorWidth === gekozendeur.maxwidth}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorWidth: gekozendeur.doorWidth + 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								+
							</button>
						</DisplayBox>

						<input
							type="range"
							name="doorWidth"
							id="doorWidth"
							value={gekozendeur.doorWidth}
							min={gekozendeur.minwidth}
							max={gekozendeur.maxwidth}
							step="1"
							onChange={(e) => {
								const updatedGekozendeur = { ...gekozendeur, doorWidth: e.target.valueAsNumber };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
						/>

						<MinMax>
							<p>{gekozendeur.minwidth}</p>
							<p>{gekozendeur.maxwidth}</p>
						</MinMax>
					</InputComp>

					<InputComp>
						<h3>Deur opening hoogte</h3>
						<DisplayBox>
							<button
								disabled={gekozendeur.doorHeight === gekozendeur.minheight}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorHeight: gekozendeur.doorHeight - 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								-
							</button>
							<p>{`${gekozendeur.doorHeight}mm`}</p>
							<button
								disabled={gekozendeur.doorHeight === gekozendeur.maxheight}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorHeight: gekozendeur.doorHeight + 1 };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}>
								+
							</button>
						</DisplayBox>

						<input
							type="range"
							name="doorHeight"
							id="doorHeight"
							value={gekozendeur.doorHeight}
							min={gekozendeur.minheight}
							max={gekozendeur.maxheight}
							step="1"
							onChange={(e) => {
								const updatedGekozendeur = { ...gekozendeur, doorHeight: e.target.valueAsNumber };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
						/>

						<MinMax>
							<p>{gekozendeur.minheight}</p>
							<p>{gekozendeur.maxheight}</p>
						</MinMax>
					</InputComp>
				</>
			)}

			<div>
				<Title>Keuze systeem</Title>
				<div>
					<DataContainer>
						<label>Scharnierende deur</label>
						<input
							type="checkbox"
							name="HingedDoor"
							id="HingedDoor"
							onChange={() => {
								const updatedGekozendeur = { ...gekozendeur, hingedDoor: !hingedDoor };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
							checked={hingedDoor}
						/>
					</DataContainer>
					<DataContainer>
						<label>Vloer pomp</label>
						<input
							type="checkbox"
							name="FloorPump"
							id="FloorPump"
							onChange={() => {
								const updatedGekozendeur = { ...gekozendeur, floorPump: !floorPump };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
							checked={floorPump}
						/>
					</DataContainer>
					<DataContainer>
						<label>Pomp in de deur</label>
						<input
							type="checkbox"
							name="PumpInDoor"
							id="PumpInDoor"
							onChange={() => {
								const updatedGekozendeur = { ...gekozendeur, pumpInDoor: !pumpInDoor };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
							checked={pumpInDoor}
						/>
					</DataContainer>
					<DataContainer>
						<label>Schuifdeur</label>
						<input
							type="checkbox"
							name="SlidingDoor"
							id="SlidingDoor"
							onChange={() => {
								const updatedGekozendeur = { ...gekozendeur, slidingDoor: !slidingDoor };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
							checked={slidingDoor}
						/>
					</DataContainer>
				</div>
			</div>
			{(doortype === "Vast raam" || doortype === "Dubbele deur") && <ZijPaneel />}
			<Bovenlicht />
		</div>
	);
};

const Title = styled.h2`
	color: #7d8896;
	font-size: 18px;
	text-align: center;
	font-weight: 900;
	margin-bottom: 30px;
	line-height: 26px;
`;

const InputComp = styled.div`
	margin-bottom: 20px;

	h3 {
		font-size: 16px;
		font-weight: 700;
		line-height: 26px;
	}

	input {
		width: 100%;
		margin: 10px 0;
	}
`;

const DisplayBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 10px;

	p {
		color: #7d8896;
		font-size: 14px;
		font-weight: 400;
		line-height: 23px;
	}

	button {
		width: 35px;
		height: 35px;
		display: inline-block;
		font-size: 26px;
		color: #7d8896;
		border: none;
		border-radius: 100%;
		background: transparent;

		&:hover {
			background-color: rgba(0, 0, 0, 0.04);
			color: #222221;
		}
	}
`;

const MinMax = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 10px;
	font-weight: 600;
	line-height: 1.66;
	color: #495057;
`;

const DataContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-width: 0px 0px thin;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin: 20px 0;
	padding-bottom: 20px;
`;

export default Layout;
