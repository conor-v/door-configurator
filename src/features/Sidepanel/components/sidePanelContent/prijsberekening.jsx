import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";

const PrijsBerekening = () => {
	const { greep, slot, scharnier } = useStore((state) => state.door.gekozendeur.door);
	const [totaal, setTotaal] = useState(0);

	useEffect(() => {
		const Totaal = parseFloat(
			parseFloat(greep?.prijs) + parseFloat(slot?.prijs) + parseFloat(scharnier?.prijs)
		).toFixed(2);

		setTotaal(Totaal);
	}, [greep, slot]);

	return (
		<DataContainer>
			<Title>PrijsBerekening</Title>
			<DataBox>
				<DataText>greep</DataText>
				<DataText>€{greep?.prijs ? greep.prijs : 0}</DataText>
			</DataBox>
			<DataBox>
				<DataText>Slot</DataText>
				<DataText>€{slot?.prijs ? slot.prijs : 0}</DataText>
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
				<DataText>€{scharnier?.prijs ? scharnier.prijs : 0}</DataText>
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
				<DataText>€{totaal}</DataText>
			</DataBoxTotaal>
		</DataContainer>
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

export default PrijsBerekening;
