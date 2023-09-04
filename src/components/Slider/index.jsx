import styled from "@emotion/styled";
import { useStore } from "../../stores/appStore";

const Slider = () => {
	const { door } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
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
	);
};

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

export default Slider;
