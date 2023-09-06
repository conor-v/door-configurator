import { useStore } from "../../../stores/appStore";
import styled from "@emotion/styled";

const ZijPaneel = () => {
	const { door } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<div>
			<Title>Keuze zijpaneel</Title>
			<Toggle>
				<ToggleButton
					active={door.sidepanel.type === "none" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								sidepanel: { ...gekozendeur.door.sidepanel, type: "none" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Geen</p>
				</ToggleButton>
				<ToggleButton
					active={door.sidepanel.type === "right" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								sidepanel: { ...gekozendeur.door.sidepanel, type: "right" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Rechts</p>
				</ToggleButton>
				<ToggleButton
					active={door.sidepanel.type === "left" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								sidepanel: { ...gekozendeur.door.sidepanel, type: "left" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Links</p>
				</ToggleButton>
				<ToggleButton
					active={door.sidepanel.type === "both" ? 1 : 0}
					onClick={() => {
						const updatedGekozendeur = {
							...gekozendeur,
							door: {
								...gekozendeur.door,
								sidepanel: { ...gekozendeur.door.sidepanel, type: "both" },
							},
						};
						updateObject("door", { gekozendeur: updatedGekozendeur });
					}}>
					<p>Bijde</p>
				</ToggleButton>
			</Toggle>

			{(door.sidepanel.type === "both" || door.sidepanel.type === "right") && (
				<InputComp>
					<h3>Zijpaneel rechter breedte</h3>
					<DisplayBox>
						<button
							disabled={door.sidepanel.widthRight === 150}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, widthRight: gekozendeur.door.sidepanel.widthRight - 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.sidepanel.widthRight}mm`}</p>
						<button
							disabled={door.sidepanel.widthRight === 800}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, widthRight: gekozendeur.door.sidepanel.widthRight + 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name="sidepanelwidthRight"
						id="sidepanelwidthRight"
						value={door.sidepanel.widthRight}
						min="150"
						max="800"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, widthRight: e.target.valueAsNumber },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>150</p>
						<p>800</p>
					</MinMax>
				</InputComp>
			)}

			{(door.sidepanel.type === "both" || door.sidepanel.type === "left") && (
				<InputComp>
					<h3>Zijpaneel linker breedte</h3>
					<DisplayBox>
						<button
							disabled={door.sidepanel.widthLeft === 150}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, widthLeft: gekozendeur.door.sidepanel.widthLeft - 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							-
						</button>
						<p>{`${door.sidepanel.widthLeft}mm`}</p>
						<button
							disabled={door.sidepanel.widthLeft === 800}
							onClick={() => {
								const updatedGekozendeur = {
									...gekozendeur,
									door: {
										...gekozendeur.door,
										sidepanel: { ...gekozendeur.door.sidepanel, widthLeft: gekozendeur.door.sidepanel.widthLeft + 1 },
									},
								};
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name="sidepanelwidthLeft"
						id="sidepanelwidthLeft"
						value={door.sidepanel.widthLeft}
						min="150"
						max="800"
						step="1"
						onChange={(e) => {
							const updatedGekozendeur = {
								...gekozendeur,
								door: {
									...gekozendeur.door,
									sidepanel: { ...gekozendeur.door.sidepanel, widthLeft: e.target.valueAsNumber },
								},
							};
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>150</p>
						<p>800</p>
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

export default ZijPaneel;
