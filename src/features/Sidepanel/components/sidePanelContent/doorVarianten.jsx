import { useStore } from "../../../../stores/appStore";
import DoorVariantenData from "../../../../data/doorVariants.json";
import styled from "@emotion/styled";

const DoorVarianten = () => {
	const updateObject = useStore((state) => state.updateObject);
	const gekozendeur = useStore((state) => state.door.gekozendeur);

	return (
		<>
			<Title>Deur varianten</Title>
			<SelectedText>{gekozendeur.doorVariant.value}</SelectedText>

			<List>
				{DoorVariantenData.map((door) => {
					if (door.type === gekozendeur.doortype) {
						return (
							<ListItem
								key={door.titel}
								onClick={() => {
									const updatedGekozendeur = { ...gekozendeur, doorVariant: door };
									updateObject("door", { gekozendeur: updatedGekozendeur });
								}}
								active={gekozendeur.doorVariant.value === door.value ? 1 : 0}>
								<img src={door.url} alt={door.titel} height={60} />
							</ListItem>
						);
					}
				})}
			</List>
		</>
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

const List = styled.ul`
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	justify-items: center;
	padding: 0;

	@media (max-width: 479px) {
		grid-template-columns: 1fr;
	}
`;

const ListItem = styled.li`
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

export default DoorVarianten;
