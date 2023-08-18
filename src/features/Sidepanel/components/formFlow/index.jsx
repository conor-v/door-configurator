import IconData from "../../../../data/IconNav_Data.json";

const FormFlow = () => {
	return (
		<div>
			{IconData.map((icon) => (
				<div key={icon.type}>
					<p>{icon.type}</p>
				</div>
			))}
		</div>
	);
};

export default FormFlow;
