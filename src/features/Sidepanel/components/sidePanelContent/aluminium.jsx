import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";
import colors from "../../../../data/aluminium.json";

const Aluminium = () => {
	const { aluminium, aluminiumCustomColor, uitzicht, doortype, doorcolor } = useStore(
		(state) => state.door.gekozendeur
	);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<div>
			<Title>Materiaal</Title>
			{doortype !== "Enkele deur" && (
				<Toggle>
					<ToggleButton
						active={uitzicht === "Mastiek" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = { ...gekozendeur, uitzicht: "Mastiek" };
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Mastiek</p>
					</ToggleButton>
					<ToggleButton
						active={uitzicht === "Strak" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = { ...gekozendeur, uitzicht: "Strak" };
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Strak</p>
					</ToggleButton>
				</Toggle>
			)}

			{doortype === "Enkele deur" && (
				<Toggle>
					<ToggleButton
						active={uitzicht === "Frame" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = { ...gekozendeur, uitzicht: "Frame" };
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Frame</p>
					</ToggleButton>
					<ToggleButton
						active={uitzicht === "Deur" ? 1 : 0}
						onClick={() => {
							const updatedGekozendeur = { ...gekozendeur, uitzicht: "Deur" };
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}>
						<p>Deur</p>
					</ToggleButton>
				</Toggle>
			)}
			{doortype !== "Enkele deur" && <SelectedText>{aluminium}</SelectedText>}
			{doortype === "Enkele deur" && <SelectedText>{uitzicht === "Frame" ? aluminium : doorcolor}</SelectedText>}
			{/* <input
				type="color"
				name="aluminiumCustomColor"
				id="aluminiumCustomColor"
				value={aluminiumCustomColor}
				onChange={(e) => {
					const updatedGekozendeur = { ...gekozendeur, aluminium: "Custom", aluminiumCustomColor: e.target.value };
					updateObject("door", { gekozendeur: updatedGekozendeur });
				}}
			/> */}
			{doortype !== "Enkele deur" && (
				<ColorsList>
					{colors.map((color) => {
						if (color.color !== "Custom") {
							return (
								<ColorItem
									key={color.color}
									onClick={() => {
										const updatedGekozendeur = { ...gekozendeur, aluminium: color.color };
										updateObject("door", { gekozendeur: updatedGekozendeur });
									}}
									active={color.color === aluminium ? 1 : 0}>
									<img src={color.img} alt={color.color} width={50} />
								</ColorItem>
							);
						}
					})}
				</ColorsList>
			)}

			{doortype === "Enkele deur" && (
				<ColorsList>
					{colors.map((color) => {
						if (color.color !== "Custom") {
							return (
								<ColorItem
									key={color.color}
									onClick={() => {
										if (uitzicht === "Frame") {
											const updatedGekozendeur = { ...gekozendeur, aluminium: color.color };
											updateObject("door", { gekozendeur: updatedGekozendeur });
										} else {
											const updatedGekozendeur = { ...gekozendeur, doorcolor: color.color };
											updateObject("door", { gekozendeur: updatedGekozendeur });
										}
									}}
									active={
										uitzicht === "Frame" ? (color.color === aluminium ? 1 : 0) : color.color === doorcolor ? 1 : 0
									}>
									<img src={color.img} alt={color.color} width={50} />
								</ColorItem>
							);
						}
					})}
				</ColorsList>
			)}
		</div>
	);
};

const Title = styled.h2`
	color: #7d8896;
	font-size: 27px;
	text-align: center;
	font-weight: 900;
	margin-bottom: 30px;
	line-height: 26px;
`;

const SelectedText = styled.p`
	font-size: 16px;
	font-weight: 400;
	line-height: 23px;
	margin-top: 0;
`;

const ColorsList = styled.ul`
	padding: 0;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	justify-items: center;

	@media (max-width: 479px) {
		grid-template-columns: 1fr;
	}
`;

const ColorItem = styled.li`
	display: flex;
	align-items: center;
	padding: 10px;
	border: none;
	background: #f7f7f7;
	color: #7d8996;
	font-size: 15px;
	line-height: 26px;
	width: 107.5px;
	height: 107.5px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	border-radius: 15px;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%) scale(0.5);
		opacity: ${({ active }) => (active ? 1 : 0)};
		width: 15px;
		height: 15px;
		background-color: #222221;
		border-radius: 50%;
		transition: transform 0.2s ease, opacity 0.2s ease;
	}

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 479px) {
		width: 150px;
		height: 150px;
	}
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

export default Aluminium;
