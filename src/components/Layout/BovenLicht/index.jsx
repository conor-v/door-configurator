import { useStore } from "../../../stores/appStore";
import styled from "@emotion/styled";

const Bovenlicht = () => {
	const { door } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);
	return (
		<div>
			<Title>Bovenlicht</Title>
			<Toggle>
				<ToggleButton
					active={door.fanlight.type === "none" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								fanlight: { ...gekozendeur.door.fanlight, type: "none" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Geen</p>
				</ToggleButton>
				<ToggleButton
					active={door.fanlight.type === "right" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								fanlight: { ...gekozendeur.door.fanlight, type: "right" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Rechts</p>
				</ToggleButton>
				<ToggleButton
					active={door.fanlight.type === "left" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								fanlight: { ...gekozendeur.door.fanlight, type: "left" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Links</p>
				</ToggleButton>
				<ToggleButton
					active={door.fanlight.type === "both" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								fanlight: { ...gekozendeur.door.fanlight, type: "both" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Beide</p>
				</ToggleButton>
			</Toggle>

			{(door.fanlight.type === "both" || door.fanlight.type === "right") && (
				<InputComp>
					<h3>Bovenlicht rechter breedte</h3>
					<DisplayBox>
						<button
							disabled={door.fanlight.widthRight === 100}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											widthRight: gekozendeur.door.fanlight.widthRight - 1,
										},
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.fanlight.widthRight}mm`}</p>
						<button
							disabled={door.fanlight.widthRight === 1000}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											widthRight: gekozendeur.door.fanlight.widthRight + 1,
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
						name="widthRight"
						id="widthRight"
						value={gekozendeur.door.fanlight.widthRight}
						min="100"
						max="1000"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									fanlight: { ...gekozendeur.door.fanlight, widthRight: e.target.valueAsNumber },
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
			)}

			{(door.fanlight.type === "both" || door.fanlight.type === "left") && (
				<InputComp>
					<h3>Bovenlicht linker breedte</h3>
					<DisplayBox>
						<button
							disabled={door.fanlight.widthLeft === 100}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											widthLeft: gekozendeur.door.fanlight.widthLeft - 1,
										},
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.fanlight.widthLeft}mm`}</p>
						<button
							disabled={door.fanlight.widthLeft === 1000}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										fanlight: {
											...gekozendeur.door.fanlight,
											widthLeft: gekozendeur.door.fanlight.widthLeft + 1,
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
						name="widthLeft"
						id="widthLeft"
						value={gekozendeur.door.fanlight.widthLeft}
						min="100"
						max="1000"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									fanlight: { ...gekozendeur.door.fanlight, widthLeft: e.target.valueAsNumber },
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
			)}
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

export default Bovenlicht;
