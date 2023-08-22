import { useStore } from "../../../../stores/appStore";
import styled from "@emotion/styled";

const Layout = () => {
	const { door, hingedDoor, floorPump, pumpInDoor, slidingDoor, doortype } = useStore(
		(state) => state.door.gekozendeur
	);
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
							max="1200"
							step="1"
							onChange={(e) => {
								const updatedGekozendeur = { ...gekozendeur, doorWidth: e.target.valueAsNumber };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
						/>

						<MinMax>
							<p>800</p>
							<p>1200</p>
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

			<div>
				<Title>Keuze systeem</Title>
				<div>
					<DataContianer>
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
					</DataContianer>
					<DataContianer>
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
					</DataContianer>
					<DataContianer>
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
					</DataContianer>
					<DataContianer>
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
					</DataContianer>
				</div>
			</div>

			<div>
				<Title>Keuze zijpaneel</Title>
				<Toggle>
					<ToggleButton
						active={door.sidepanel.type === "None" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, type: "None" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Geen</p>
					</ToggleButton>
					<ToggleButton
						active={door.sidepanel.type === "Right" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, type: "Right" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Rechts</p>
					</ToggleButton>
					<ToggleButton
						active={door.sidepanel.type === "Left" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, type: "Left" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Links</p>
					</ToggleButton>
					<ToggleButton
						active={door.sidepanel.type === "Both" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, type: "Both" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Bijde</p>
					</ToggleButton>
				</Toggle>
				<InputComp>
					<h3>Zijpaneel breedte</h3>
					<DisplayBox>
						<button
							disabled={door.sidepanel.Width === 100}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, Width: gekozendeur.door.sidepanel.Width - 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.sidepanel.Width}mm`}</p>
						<button
							disabled={door.sidepanel.Width === 500}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, Width: gekozendeur.door.sidepanel.Width + 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name="sidepanelWidth"
						id="sidepanelWidth"
						value={door.sidepanel.Width}
						min="100"
						max="500"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, Width: e.target.valueAsNumber },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>100</p>
						<p>500</p>
					</MinMax>
				</InputComp>
			</div>
			<div>
				<Title>Bovenlicht</Title>
				<Toggle>
					<ToggleButton
						active={door.fanlight.position === "right" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									fanlight: { ...gekozendeur.door.fanlight, position: "right" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Rechts</p>
					</ToggleButton>
					<ToggleButton
						active={door.fanlight.position === "left" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									fanlight: { ...gekozendeur.door.fanlight, position: "left" },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Links</p>
					</ToggleButton>
				</Toggle>

				<InputComp>
					<h3>Bovenlicht breedte</h3>
					<DisplayBox>
						<button
							disabled={door.fanlight.fanlightWidth === 100}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											fanlightWidth: gekozendeur.door.fanlight.fanlightWidth - 1,
										},
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.fanlight.fanlightWidth}mm`}</p>
						<button
							disabled={door.fanlight.fanlightWidth === 1000}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											fanlightWidth: gekozendeur.door.fanlight.fanlightWidth + 1,
										},
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name="fanlightWidth"
						id="fanlightWidth"
						value={gekozendeur.door.fanlight.fanlightWidth}
						min="100"
						max="1000"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									fanlight: { ...gekozendeur.door.fanlight, fanlightWidth: e.target.valueAsNumber },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>100</p>
						<p>1000</p>
					</MinMax>
				</InputComp>
			</div>
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

const Toggle = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

const ToggleButton = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	background-color: ${({ active }) => (active ? "#222221" : "#f7f7f7")};
	border: ${({ active }) => (active ? "1px solid #222221" : "1px solid #f7f7f7")};
	color: ${({ active }) => (active ? "#fff" : "#7D8896")};
	cursor: pointer;

	p {
		color: ${({ active }) => (active ? "#fff" : "#7D8896")};
	}
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

const DataContianer = styled.div`
	display: flex;
	justify-content: space-between;
	border-width: 0px 0px thin;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin: 20px 0;
	padding-bottom: 20px;
`;

export default Layout;
