import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";
import Data from "../../../../data/glasmaterial.json";

const GlasMaterial = () => {
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<div>
			<Title>Glas</Title>
			<SelectedText>{gekozendeur.material}</SelectedText>

			<ColorsList>
				{Data.map((item) => (
					<ColorItem
						key={item.type}
						onClick={() => {
							const updatedGekozendeur = { ...gekozendeur, material: item.type };
							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
						active={item.type === gekozendeur.material ? 1 : 0}>
						<img src={item.img} alt={item.type} width={50} />
					</ColorItem>
				))}
			</ColorsList>
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
	padding: 0px;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	justify-items: center;
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
`;

export default GlasMaterial;
