import styled from "@emotion/styled";
import { useStore } from "../../../../stores/appStore";

const Display = () => {
	const floorTexture = useStore((state) => state.door.floorTexture);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<>
			<DataContianer>
				<label>Menselijke referentie</label>
				<input type="checkbox" name="Human" id="Human" />
			</DataContianer>
			<DataContianer>
				<label>Houten vloer</label>
				<input
					type="checkbox"
					name="wooden floor"
					id="wooden floor"
					checked={floorTexture === "wood"}
					onChange={() => {
						if (floorTexture === "tiles") {
							updateObject("door", { floorTexture: "wood" });
						} else {
							updateObject("door", { floorTexture: "tiles" });
						}
					}}
				/>
			</DataContianer>

			<Button>
				<img src={""} />
				Afbeelding exporteren
			</Button>

			<Button>
				<img src={""} />
				Downloaden als PDF
			</Button>

			<Button>
				<img src={""} />
				Weergave vernieuwen
			</Button>
		</>
	);
};

const DataContianer = styled.div`
	display: flex;
	justify-content: space-between;
	border-width: 0px 0px thin;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin: 20px 0;
	padding-bottom: 20px;
`;

const Button = styled.button`
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
	border-width: 0px 0px thin;
	border-style: solid;
	border-color: rgba(0, 0, 0, 0.12);
	margin: 20px 0;
	padding-bottom: 20px;
	width: 100%;
`;

export default Display;
