import styled from "@emotion/styled";
import { useStore } from "../../stores/appStore";
import useGeneratePdf from "./hooks/useGeneratePdf";
import { useState } from "react";
import Popup from "./components/Popup";

const plaatsen = [
	{ value: "Schoten", ardes: "Schotenstraat 14 2658" },
	{ value: "Kontich", ardes: "Kontichstraat 67 8462" },
	{ value: "Leuven", ardes: "Leuvenstraat 95 6842" },
];

const AanvraagForm = () => {
	const [wikelAdres, setWikelAdres] = useState({
		value: "Schoten",
		ardes: "Schotenstraat 14 2658",
	});
	const updateObject = useStore((state) => state.updateObject);
	const generatePdf = useGeneratePdf();
	const { popupDowmloadPdf, optie } = useStore((state) => state.pdf);

	const handleSubmit = (e) => {
		e.preventDefault();
		let options;

		if (optie === "SAVE_OFFERTE") {
			options = { pdf: true };
		}

		generatePdf((options = { options }));
	};

	const handleCityChange = (event) => {
		const selectedPlaats = plaatsen.find((plaats) => plaats.value === event.target.value);
		setWikelAdres(selectedPlaats);
		updateObject("pdf", { winkel: selectedPlaats });
	};

	return (
		<>
			{!popupDowmloadPdf && (
				<AanvraagBox>
					<ContentBox>
						<HeaderBox>
							<p>Vul je gegevens in om de offerte op te slaan</p>
							<div onClick={() => updateObject("pdf", { aanvragen: false })}>
								<p>X</p>
							</div>
						</HeaderBox>
						<form onSubmit={(e) => handleSubmit(e)}>
							<LabelForm>
								Voornaam en achternaam
								<input
									type="text"
									name="naam"
									id="naam"
									onChange={(e) => updateObject("pdf", { naam: e.target.value })}
									required
								/>
							</LabelForm>

							<LabelForm>
								Adres (Straat en huisnummer, Postcode Stad)
								<input
									type="text"
									name="adres"
									id="adres"
									onChange={(e) => updateObject("pdf", { adres: e.target.value })}
									required
								/>
							</LabelForm>

							<LabelForm>
								Telefoonnummer
								<input
									type="tel"
									name="tel"
									id="tel"
									onChange={(e) => updateObject("pdf", { tel: e.target.value })}
									required
								/>
							</LabelForm>

							<LabelForm>
								E-mailadres
								<input
									type="email"
									name="email"
									id="email"
									onChange={(e) => updateObject("pdf", { email: e.target.value })}
									required
								/>
							</LabelForm>

							<div>
								<LabelForm htmlFor="city">
									Selecteer een winkel:
									<DropdownForm id="city" value={wikelAdres.value} onChange={handleCityChange}>
										{plaatsen.map((plaats) => (
											<option key={plaats.value} value={plaats.value}>
												{plaats.value}
											</option>
										))}
									</DropdownForm>
								</LabelForm>
							</div>

							<SubmitButton type="submit">OK</SubmitButton>
						</form>
					</ContentBox>
				</AanvraagBox>
			)}
			{popupDowmloadPdf && <Popup />}
		</>
	);
};

export const AanvraagBox = styled.div`
	z-index: 1000000;
	background-color: rgba(0, 0, 0, 0.25);
	position: absolute;
	inset: 0px;
	padding: 1rem;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ContentBox = styled.div`
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 12px 2px;
	border-radius: 4px;
	width: 100%;
	max-width: 600px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 2rem;
	margin: 3rem;
	max-height: 90vh;
	overflow: auto;
`;

export const HeaderBox = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
	align-items: center;
	gap: 8px;
	p {
		font-weight: 500;
	}
`;

export const LabelForm = styled.label`
	display: flex;
	flex-flow: column;
	gap: 5px;
	margin-bottom: 15px;
	font-size: 14px;
	line-height: 25.5px;

	input {
		padding: 13px 15px;
		border: 1px solid rgb(222, 222, 229);
		font-size: 1.1rem;
	}
`;

export const SubmitButton = styled.button`
	border: medium none;
	height: 40px;
	background-color: rgb(187, 80, 24);
	color: rgb(255, 255, 255);
	padding: 0.5rem 2rem;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const DropdownForm = styled.select`
	border: 1px solid rgb(222, 222, 229);
	padding: 10px;
	background: transparent;
`;

export default AanvraagForm;
