import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";

const Doors = () => {
	const deuren = useStore((state) => state.door.deuren);
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<div>
			<Title>Deuren</Title>
			<Button onClick={() => updateObject("door", { popup: true })}>Deur toevoegen</Button>
			<List>
				{deuren.map((item) => (
					<ListItem
						key={item.id}
						onClick={() => {
							const indexTeVervangen = deuren.findIndex((deur) => deur.id === gekozendeur.id);

							if (indexTeVervangen !== -1) {
								deuren[indexTeVervangen] = gekozendeur;
							}
							updateObject("door", { gekozendeur: { ...item } });
						}}
						active={item.id === gekozendeur.id ? 1 : 0}>
						<img src="" alt={item.name} />
						<p>deur {item.id}</p>
					</ListItem>
				))}
			</List>
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

const List = styled.ul`
	padding-top: 16px;
	margin-bottom: 16px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;
	justify-items: center;
	padding: 0;
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

const Button = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	background-color: #222221;
	color: #fff;
	border: 1px solid #222221;
	cursor: pointer;
	margin-top: 10px;
`;

export default Doors;
