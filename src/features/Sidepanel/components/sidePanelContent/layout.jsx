import { useStore } from "../../../../stores/appStore";
import styled from "@emotion/styled";

const Layout = () => {
	const { doorWidth, doorHeight } = useStore((state) => state.door);
	const updateObject = useStore((state) => state.updateObject);

	return (
		<>
			<InputComp>
				<h3>Deur opening breedte</h3>
				<DisplayBox>
					<button disabled={doorWidth === 800} onClick={() => updateObject("door", { doorWidth: doorWidth - 1 })}>
						-
					</button>
					<p>{`${doorWidth}mm`}</p>
					<button disabled={doorWidth === 1200} onClick={() => updateObject("door", { doorWidth: doorWidth + 1 })}>
						+
					</button>
				</DisplayBox>

				<input
					type="range"
					name="doorWidth"
					id="doorWidth"
					value={doorWidth}
					min="800"
					max="1200"
					step="1"
					onChange={(e) => updateObject("door", { doorWidth: e.target.valueAsNumber })}
				/>

				<MinMax>
					<p>800</p>
					<p>1200</p>
				</MinMax>
			</InputComp>

			<InputComp>
				<h3>Deur opening hoogte</h3>
				<DisplayBox>
					<button disabled={doorHeight === 1800} onClick={() => updateObject("door", { doorHeight: doorHeight - 1 })}>
						-
					</button>
					<p>{`${doorHeight}mm`}</p>
					<button disabled={doorHeight === 2520} onClick={() => updateObject("door", { doorHeight: doorHeight + 1 })}>
						+
					</button>
				</DisplayBox>

				<input
					type="range"
					name="doorHeight"
					id="doorHeight"
					value={doorHeight}
					min="1800"
					max="2520"
					step="1"
					onChange={(e) => updateObject("door", { doorHeight: e.target.valueAsNumber })}
				/>

				<MinMax>
					<p>1800</p>
					<p>2520</p>
				</MinMax>
			</InputComp>
		</>
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
		color: #7d8896;
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

export default Layout;
