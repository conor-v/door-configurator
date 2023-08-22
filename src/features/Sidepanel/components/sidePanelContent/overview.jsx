import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";
import aluminiumData from "../../../../data/aluminium.json";
import gridData from "../../../../data/doorgrid.json";
import materiaalData from "../../../../data/glasmaterial.json";
import DoortypeData from "../../../../data/doortype.json";

const Overview = () => {
	const {
		doorWidth,
		doorHeight,
		aluminium,
		material,
		partitionGridHor,
		partitionGridVer,
		doorPartitions,
		doortype,
		hingedDoor,
		floorPump,
		pumpInDoor,
		slidingDoor,
		doorGridType,
	} = useStore((state) => state.door.gekozendeur);
	const { sidepanel, fanlight } = useStore((state) => state.door.gekozendeur.door);
	const [aluminiumImg, setAluminiumImg] = useState("");
	const [gridImg, setGridImg] = useState("");
	const [materialImg, setMaterialImg] = useState("");
	const [doortypeImg, setDoortypeImg] = useState("");

	useEffect(() => {
		const aluminiumArray = aluminiumData.filter((item) => {
			return item.color === aluminium;
		});
		const gridArray = gridData.filter((item) => {
			return item.name === doorGridType;
		});
		const materiaalArray = materiaalData.filter((item) => {
			return item.type === material;
		});
		const doortypeArray = DoortypeData.filter((item) => {
			return item.type === doortype;
		});

		setAluminiumImg(aluminiumArray[0].img);
		setGridImg(gridArray[0].img);
		setMaterialImg(materiaalArray[0].img);
		setDoortypeImg(doortypeArray[0].img);
	}, [material, doorGridType, aluminium, doortype]);

	return (
		<>
			<DownloadButton>
				<img src={""} />
				Downloaden als PDF
			</DownloadButton>
			{/* div border top */}
			<DataContainer>
				<Title>Afmetingen en indeling</Title>
				<DataBox>
					<DataText>Vast partitiebedrag</DataText>
					<DataText>{doorPartitions}</DataText>
				</DataBox>
				<DataBox>
					<DataText>Hoogte deuropening</DataText>
					<DataText>{parseInt(doorHeight)} mm</DataText>
				</DataBox>
				<DataBox>
					<DataText>Breedte deuropening</DataText>
					<DataText>{parseInt(doorWidth)} mm</DataText>
				</DataBox>
				<DataBox>
					<DataText>Zijpaneel zijde</DataText>
					<DataText>{sidepanel.type}</DataText>
				</DataBox>
				{sidepanel.type !== "None" && (
					<DataBox>
						<DataText>Zijpaneel breedte</DataText>
						<DataText>{parseInt(sidepanel.Width)} mm</DataText>
					</DataBox>
				)}
				<DataBox>
					<DataText>Bovenlicht zijde</DataText>
					<DataText>{fanlight.position}</DataText>
				</DataBox>
				<DataBox>
					<DataText>Bovenlicht breedte</DataText>
					<DataText>{parseInt(fanlight.fanlightWidth)} mm</DataText>
				</DataBox>
				<DataBox>
					<DataText>Scharnierende deur</DataText>
					<DataText>{hingedDoor ? "True" : "False"}</DataText>
				</DataBox>
				<DataBox>
					<DataText>Vloer pomp</DataText>
					<DataText>{floorPump ? "True" : "False"}</DataText>
				</DataBox>
				<DataBox>
					<DataText>Pomp in de deur</DataText>
					<DataText>{pumpInDoor ? "True" : "False"}</DataText>
				</DataBox>
				<DataBox>
					<DataText>Schuifdeur</DataText>
					<DataText>{slidingDoor ? "True" : "False"}</DataText>
				</DataBox>
			</DataContainer>

			<DataContainer>
				<Title>Deurtype</Title>
				<DataText>{doortype}</DataText>
				<DataImg src={doortypeImg} alt="Doortype" width={60} />
			</DataContainer>

			<DataContainer>
				<Title>Materiaal</Title>
				<DataText>{aluminium}</DataText>
				<DataImg src={aluminiumImg} alt="Color aluminium" width={60} />
			</DataContainer>

			<DataContainer>
				<Title>deur grid</Title>
				<DataText>{doorGridType}</DataText>
				<DataImg src={gridImg} alt="Door grid icon" width={50} />
			</DataContainer>

			<DataContainer>
				<Title>Scheidingsrooster</Title>
				{partitionGridHor.map((line, index) => (
					<DataBox key={index}>
						<DataText>Horizontale dwarsligger {index + 1}</DataText>
						<DataText>{parseInt(line.pos * 100)} mm</DataText>
					</DataBox>
				))}
				{partitionGridVer.map((line, index) => (
					<DataBox key={index}>
						<DataText>Verticale dwarsligger {index + 1}</DataText>
						<DataText>{parseInt(line.pos * 100)} mm</DataText>
					</DataBox>
				))}
			</DataContainer>

			<DataContainer>
				<Title>Glas materiaal</Title>
				<DataText>{material}</DataText>
				<DataImg src={materialImg} alt="Local material icon" width={60} />
			</DataContainer>
		</>
	);
};

const DownloadButton = styled.button`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: 0.00938em;
	background: transparent;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 10px;
`;

const DataContainer = styled.div`
	border-width: thin 0px 0px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin: 20px 0;
	padding-top: 20px;
	position: relative;
`;

const Title = styled.h4`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: bold;
	font-size: 14px;
	line-height: 1.43;
	letter-spacing: 0.01071em;
	color: #7d8896;
`;

const DataBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DataText = styled.p`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: 0.00938em;
`;

const DataImg = styled.img`
	position: absolute;
	right: 0;
	top: 11px;
`;

export default Overview;
