import styled from "@emotion/styled";
import Data from "../../../../data/sloten.json";
import { useStore } from "../../../../stores/appStore";

const Sloten = () => {
	const { slot } = useStore((state) => state.door.gekozendeur.door);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<>
			<div>
				<Title>Sloten</Title>
				<List>
					{Data.map((item) => (
						<ListItem
							key={item.name}
							onClick={() => {
								const updatedGekozendeur = { ...gekozendeur, door: { ...gekozendeur.door, slot: item } };
								updateObject("door", { gekozendeur: updatedGekozendeur });
							}}
							active={item.name === slot.name ? 1 : 0}>
							<p>{item.name}</p>
						</ListItem>
					))}
				</List>
			</div>
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

const List = styled.ul`
	padding: 0;
	margin-bottom: 40px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	justify-items: center;
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
`;

export default Sloten;
