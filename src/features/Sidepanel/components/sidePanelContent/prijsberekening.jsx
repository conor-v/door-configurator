import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";

const PrijsBerekening = () => {
	const gekozendeur = useStore((state) => state.door.gekozendeur);
	const deurenArray = useStore((state) => state.door.deuren);
	const updateObject = useStore((state) => state.updateObject);
	const [deuren, setDeuren] = useState([deurenArray[0]]);
	const [totaalAll, setTotaalAll] = useState(0);

	useEffect(() => {
		let totaal = 0;
		for (let i = 0; i < deurenArray.length; i++) {
			const totaalCalc = parseFloat(
				parseFloat(deurenArray[i].door.greep?.prijs) +
					parseFloat(deurenArray[i].door.slot?.prijs) +
					parseFloat(deurenArray[i].door.scharnier?.prijs)
			).toFixed(2);

			console.log(
				parseFloat(
					parseFloat(deurenArray[i].door.greep?.prijs) +
						parseFloat(deurenArray[i].door.slot?.prijs) +
						parseFloat(deurenArray[i].door.scharnier?.prijs)
				).toFixed(2),
				"test"
			);
			totaal += parseFloat(totaalCalc);
		}

		console.log(totaal);
		setTotaalAll(totaal);
	}, [deurenArray]);

	return (
		<DataContainer>
			<Title>Offerte</Title>

			<RaamButtons>
				{deurenArray.map((deur, i) => (
					<RaamButton
						onClick={() => {
							setDeuren([deurenArray[i]]);
							updateObject("door", { gekozendeur: deurenArray[i] });
						}}
						active={deurenArray[i].id === gekozendeur.id ? 1 : 0}
						key={deur.id}>
						deur {i + 1}
					</RaamButton>
				))}
			</RaamButtons>

			{deuren.map((deur) => (
				<div key={deur.id}>
					<DataBox>
						<DataText>greep</DataText>
						<DataText>€{deur.door.greep?.prijs ? deur.door.greep.prijs : Number(0).toFixed(2)}</DataText>
					</DataBox>
					<DataBox>
						<DataText>Slot</DataText>
						<DataText>€{deur.door.slot?.prijs ? deur.door.slot.prijs : Number(0).toFixed(2)}</DataText>
					</DataBox>
					<DataBox>
						<DataText>Variant</DataText>
						<DataText>€0.00</DataText>
					</DataBox>
					<DataBox>
						<DataText>Omlijsting</DataText>
						<DataText>€0.00</DataText>
					</DataBox>
					<DataBox>
						<DataText>Scharnier</DataText>
						<DataText>€{deur.door.scharnier?.prijs ? deur.door.scharnier.prijs : Number(0).toFixed(2)}</DataText>
					</DataBox>
					<DataBox>
						<DataText>Kassement</DataText>
						<DataText>€0.00</DataText>
					</DataBox>
					<DataBox>
						<DataText>Glas type</DataText>
						<DataText>€0.00</DataText>
					</DataBox>

					<DataBoxTotaal>
						<DataText>Totaal</DataText>
						<DataText>
							€
							{parseFloat(
								parseFloat(deur.door.greep?.prijs) +
									parseFloat(deur.door.slot?.prijs) +
									parseFloat(deur.door.scharnier?.prijs)
							).toFixed(2)}
						</DataText>
					</DataBoxTotaal>
					<DataBoxTotaal>
						<DataText>Totaal al de deuren</DataText>
						<DataText>€{totaalAll.toFixed(2)}</DataText>
					</DataBoxTotaal>
				</div>
			))}

			<OfferteBtn
				onClick={() => {
					updateObject("sidepanel", { sidePanelType: "doors" });
					updateObject("raam", { popup: true });
				}}>
				Nog een deur configureren
			</OfferteBtn>

			<OfferteBtn
				onClick={() => {
					updateObject("pdf", { aanvragen: true });
					updateObject("pdf", { optie: "SAVE_OFFERTE" });
				}}>
				Offerte maken
			</OfferteBtn>
		</DataContainer>
	);
};

const OfferteBtn = styled.button`
	border: none;
	background: black;
	color: white;
	padding: 16px;
	width: 100%;
	font-size: 16px;
	text-transform: capitalize;
	margin-bottom: 10px;
	cursor: pointer;
`;

const Title = styled.h2`
	color: #7d8896;
	font-size: 27px;
	text-align: center;
	font-weight: 900;
	margin-bottom: 30px;
	line-height: 26px;
`;

const DataContainer = styled.div`
	position: relative;
`;

const DataBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

const DataBoxTotaal = styled.div`
	display: flex;
	justify-content: space-between;
	border-width: thin 0px 0px;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin-top: 10px;
	padding-top: 5px;
`;

const DataText = styled.p`
	font-family: "Roboto", "Helvetica", "Arial", sans-serif;
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: 0.00938em;
`;

const RaamButtons = styled.div`
	display: flex;
	flex-flow: wrap;
	gap: 8px;
`;

const RaamButton = styled.button`
	background: ${({ active }) => (active ? "#222221" : "white")};
	color: ${({ active }) => (active ? "white" : "#222221")};
	border: 1px solid #222221;
	padding: 8px;
	font-size: 16px;
	cursor: pointer;
`;

export default PrijsBerekening;
