import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";

const PartitionGrid = () => {
	const updateObject = useStore((state) => state.updateObject);
	const { doorWidth, doorHeight, partitionGridHor, partitionGridVer } = useStore((state) => state.door.gekozendeur);
	const gekozendeur = useStore((state) => state.door.gekozendeur);

	return (
		<div>
			{partitionGridHor.length === 0 && partitionGridVer.length === 0 && <DataText>Geen scheidingsroosterd</DataText>}

			{partitionGridHor.map((line, index) => (
				<InputComp key={index}>
					<h3>Horizontale dwarsligger {index + 1}</h3>
					<DisplayBox>
						<button
							onClick={() => {
								if (Math.round(((doorHeight * line.pos) / 100) * 100) > 57) {
									const updatedPartitionGridHor = [...gekozendeur.partitionGridHor];
									updatedPartitionGridHor[index] = {
										...updatedPartitionGridHor[index],
										pos: line.pos - (1 * 100) / doorHeight / 100,
									};

									const updatedGekozendeur = {
										...gekozendeur,
										partitionGridHor: updatedPartitionGridHor,
									};

									updateObject("door", { gekozendeur: updatedGekozendeur });
								}
							}}>
							-
						</button>
						<p>{Math.round(((doorHeight * line.pos) / 100) * 100)}</p>
						<button
							onClick={() => {
								if (Math.round(((doorHeight * line.pos) / 100) * 100) < doorHeight - 57) {
									const updatedPartitionGridHor = [...gekozendeur.partitionGridHor];
									updatedPartitionGridHor[index] = {
										...updatedPartitionGridHor[index],
										pos: line.pos + (1 * 100) / doorHeight / 100,
									};

									const updatedGekozendeur = {
										...gekozendeur,
										partitionGridHor: updatedPartitionGridHor,
									};

									updateObject("door", { gekozendeur: updatedGekozendeur });
								}
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name={`Horizontale dwarsligger ${index + 1}`}
						id={`Horizontale dwarsligger ${index + 1}`}
						value={((doorHeight * line.pos) / 100) * 100}
						min="0"
						max={doorHeight}
						step="1"
						onChange={(e) => {
							const updatedPartitionGridHor = [...gekozendeur.partitionGridHor];
							updatedPartitionGridHor[index] = {
								...updatedPartitionGridHor[index],
								pos: e.target.value / doorHeight,
							};

							const updatedGekozendeur = {
								...gekozendeur,
								partitionGridHor: updatedPartitionGridHor,
							};

							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>0</p>
						<p>{doorHeight}</p>
					</MinMax>
				</InputComp>
			))}

			{partitionGridVer.map((line, index) => (
				<InputComp key={index}>
					<h3>Verticale dwarsligger {index + 1}</h3>
					<DisplayBox>
						<button
							onClick={() => {
								if (Math.round(((doorWidth * line.pos) / 100) * 100) > 13) {
									const updatedPartitionGridVer = [...gekozendeur.partitionGridVer];
									updatedPartitionGridVer[index] = {
										...updatedPartitionGridVer[index],
										pos: line.pos - (1 * 100) / doorWidth / 100,
									};

									const updatedGekozendeur = {
										...gekozendeur,
										partitionGridVer: updatedPartitionGridVer,
									};

									updateObject("door", { gekozendeur: updatedGekozendeur });
								}
							}}>
							-
						</button>
						<p>{Math.round(((doorWidth * line.pos) / 100) * 100)}</p>
						<button
							onClick={() => {
								if (Math.round(((doorWidth * line.pos) / 100) * 100) < doorWidth - 32) {
									const updatedPartitionGridVer = [...gekozendeur.partitionGridVer];
									updatedPartitionGridVer[index] = {
										...updatedPartitionGridVer[index],
										pos: line.pos + (1 * 100) / doorWidth / 100,
									};

									const updatedGekozendeur = {
										...gekozendeur,
										partitionGridVer: updatedPartitionGridVer,
									};

									updateObject("door", { gekozendeur: updatedGekozendeur });
								}
							}}>
							+
						</button>
					</DisplayBox>

					<input
						type="range"
						name={`Verticale dwarsligger ${index + 1}`}
						id={`Verticale dwarsligger ${index + 1}`}
						value={((doorWidth * (line.pos * 100)) / 100 / 100 + line.fixed) * 100}
						min="0"
						max={doorWidth}
						step="1"
						onChange={(e) => {
							const updatedPartitionGridVer = [...gekozendeur.partitionGridVer];
							updatedPartitionGridVer[index] = {
								...updatedPartitionGridVer[index],
								pos: e.target.value / doorWidth,
							};

							const updatedGekozendeur = {
								...gekozendeur,
								partitionGridVer: updatedPartitionGridVer,
							};

							updateObject("door", { gekozendeur: updatedGekozendeur });
						}}
					/>

					<MinMax>
						<p>0</p>
						<p>{doorWidth}</p>
					</MinMax>
				</InputComp>
			))}
		</div>
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

const DataText = styled.p`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: 0.00938em;
`;

export default PartitionGrid;
