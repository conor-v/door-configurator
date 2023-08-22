import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";
import gridData from "../../../../data/doorgrid.json";

const DoorGrid = () => {
	const updateObject = useStore((state) => state.updateObject);
	const { partitionGridHor, partitionGridVer, doorGridType, gridMode } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);

	return (
		<div>
			<Toggle>
				<ToggleButton
					active={gridMode === "Design" ? 1 : 0}
					onClick={() => {
						if (gridMode !== "Design") {
							gekozendeur.partitionGridVer = [];
							gekozendeur.partitionGridHor = [];
							gekozendeur.doorGridType = "None";
							gekozendeur.gridMode = "Design";
							updateObject("door", "gekozendeur", gekozendeur);
						}
					}}>
					<p>Ontwerp</p>
				</ToggleButton>
				<ToggleButton
					active={gridMode === "Custom" ? 1 : 0}
					onClick={() => {
						if (gridMode !== "Custom") {
							gekozendeur.partitionGridVer = [];
							gekozendeur.partitionGridHor = [];
							gekozendeur.doorGridType = "None";
							gekozendeur.gridMode = "Custom";
							gekozendeur.borderSize = 0.15;
							updateObject("door", "gekozendeur", gekozendeur);
						}
					}}>
					<p>Aangepast</p>
				</ToggleButton>
			</Toggle>

			{gridMode === "Design" ? (
				<>
					<Title>Vast Scheidingsrooster</Title>
					<SelectedText>{doorGridType}</SelectedText>
					<ColorsList>
						{gridData.map((grid) => (
							<ColorItem
								key={grid.name}
								onClick={() => {
									gekozendeur.doorGridType = grid.name;
									gekozendeur.borderSize = grid.borderSize;
									updateObject("door", "gekozendeur", gekozendeur);
								}}
								active={grid.name === doorGridType ? 1 : 0}>
								<img src={grid.img} alt={grid.name} height={60} />
							</ColorItem>
						))}
					</ColorsList>
				</>
			) : (
				<>
					<Title>Aangepast horizontaal raster</Title>
					<AddButton
						onClick={() => {
							const line = { fixed: 0, pos: 0.5, size: 1, start: 0 };
							const linesArray = partitionGridHor;
							linesArray.push(line);
							gekozendeur.partitionGridHor = linesArray;
							updateObject("door", "gekozendeur", gekozendeur);
						}}>
						Horizontale lijn toevoegen
					</AddButton>
					{partitionGridHor.map((line, index) => (
						<LineItem key={index}>
							<p>{`lijn ${index}`}</p>
							<button
								onClick={() => {
									partitionGridHor.splice(index, 1);
									gekozendeur.partitionGridHor = partitionGridHor;
									updateObject("door", "gekozendeur", gekozendeur);
								}}>
								<img src="./x.svg" alt="" />
							</button>
						</LineItem>
					))}

					<Title>Aangepast verticaal raster</Title>
					<AddButton
						onClick={() => {
							const line = { fixed: 0, pos: 0.5, size: 1, start: 0 };
							const linesArray = partitionGridVer;
							linesArray.push(line);
							gekozendeur.partitionGridVer = linesArray;
							updateObject("door", "gekozendeur", gekozendeur);
						}}>
						Verticale lijn toevoegen
					</AddButton>
					{partitionGridVer.map((line, index) => (
						<LineItem key={index}>
							<p>{`lijn ${index}`}</p>
							<button
								onClick={() => {
									partitionGridVer.splice(index, 1);
									gekozendeur.partitionGridVer = partitionGridVer;
									updateObject("door", "gekozendeur", gekozendeur);
								}}>
								<img src="./x.svg" alt="" />
							</button>
						</LineItem>
					))}
				</>
			)}
		</div>
	);
};

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

const Title = styled.h2`
	color: #7d8896;
	font-size: 25px;
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

const AddButton = styled.button`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	background-color: #222221;
	color: #fff;
	border: 1px solid #222221;
	cursor: pointer;
	margin: 10px 0;
`;

const LineItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 18px;
	margin-bottom: 5px;

	button {
		background: #222221;
		border: none;
		padding: 3px 4px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default DoorGrid;
