import { useStore } from "../../../stores/appStore";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
// import { Vector2, Vector3 } from "three";
// import QRCode from "qrcode";
// import useGlobalThree from "@/hooks/useGlobalThree";
// import resizeBase64 from "@/services/utils/resizeBase64";
// import Exporter from "@/lib/Export";
// const qrOptions = {
// 	color: {
// 		dark: "#9f4414",
// 		light: "#0000",
// 	},
// };
// const baseARUrl = "https://iloveparket.fluxwebdesign10.be/ontwerp-uw-vloer/configurator/";
// const defaultOptions = { toCart: false, pdf: false };

const useGeneratePdf = () => {
	const updateObject = useStore((state) => state.updateObject);
	const { optie, offerte } = useStore((state) => state.pdf);
	// const ref = useStore((state) => state.three.ref);

	const main = async () => {
		// options = { ...defaultOptions, ...options };

		const pdfPromise = generatePdf();

		Promise.all([pdfPromise]).then(([pdf]) => {
			updateObject("pdf", { offerte: pdf });
		});

		console.log(offerte);
		updateObject("pdf", { popupDowmloadPdf: true });
		// const configuration_title = Math.floor(new Date().getTime() / 1000);
		// let url = "";

		// try {
		// 	const data = new FormData();

		// 	const images = [];

		// 	await generateImage(720, 405, "floor", { x: 0, y: 17, z: 0 }, (image) => {
		// 		images.push({ data: image, name: "terrace_front", thumbnail: true });
		// 	});

		// const exporter = new Exporter(ref, {}, async (modelData) => {
		// 	data.append("blob", modelData.blob);
		// });

		// await exporter.init();

		// const nonce = document.getElementById("ConfiguratorNonce");

		// data.append("_nonce", nonce?.value);
		// data.append("action", "save_configuration");
		// data.append("json", JSON.stringify(selectedvloer));
		// data.append("store", JSON.stringify([winkel]));
		// data.append("user-email", email);
		// data.append("price", totaal);
		// data.append("priceKorting", (totaal - (totaal / 100) * korting).toFixed(2));
		// data.append("mode", options.pdf ? "SAVE_OFFERTE" : options.toCart ? "ADD_TO_CART" : "SAVE");
		// data.append("images", JSON.stringify([images]));
		// console.log(parts);
		console.log("na de data setten", new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());

		// try {
		// 	const response = await fetch(WpbfObj.ajaxurl, {
		// 		method: "POST",
		// 		body: data,
		// 	});

		// 	const result = await response.json();
		// 	console.log(
		// 		"result van eerste post request",
		// 		new Date().getHours(),
		// 		new Date().getMinutes(),
		// 		new Date().getSeconds()
		// 	);

		// 	if (options.pdf === false && options.toCart === false) {
		// 		if (room !== "none") {
		// 			updateObject("three", { room: room });
		// 			updateObject("three", { showroom: true });
		// 		}

		// 		updateObject("pdf", {
		// 			url: `https://iloveparket.fluxwebdesign10.be/configuraties/${result.data.title_id}/`,
		// 		});
		// 		console.log("als het email is", new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
		// 		updateObject("pdf", { loadingofferte: false });
		// 	}

		// 	if (options.toCart) {
		// 		console.log("als het tocart is is", new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
		// 		updateObject("pdf", { loadingofferte: false });
		// 		window.location.href = result.data.redirect_url;
		// 	}

		// 	if (options.pdf) {
		// 		const pdfPromise = generatePdf(images, result.data.title_id, result.data.post_id);

		// 		const offerteData = new FormData();
		// 		offerteData.append("_nonce", nonce?.value);
		// 		offerteData.append("action", "save_offerte");
		// 		offerteData.append("post_id", result.data.post_id);
		// 		console.log(
		// 			"na data voor pdf request",
		// 			new Date().getHours(),
		// 			new Date().getMinutes(),
		// 			new Date().getSeconds()
		// 		);

		// 		Promise.all([pdfPromise]).then(([pdf]) => {
		// 			offerteData.append("pdf_file", pdf);

		// 			fetch(WpbfObj.ajaxurl, {
		// 				method: "POST",
		// 				body: offerteData,
		// 			});
		// 		});
		// 		console.log("pdf request", new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
		// 	}
		// 	if (room !== "none") {
		// 		updateObject("three", { room: room });
		// 		updateObject("three", { showroom: true });
		// 	}

		// 	console.log("einde van de functie", new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
		// } catch (error) {
		// 	updateObject("pdf", { vloerscale: false });
		// 	updateObject("pdf", { loadingofferte: false });
		// 	console.error("Error:", error);
		// }
		// } catch (error) {
		// 	console.log(error, "Er ging iets verkeerd bij het opslaan van uw configuratie");
		// 	updateObject("pdf", { vloerscale: false });
		// 	updateObject("pdf", { loadingofferte: false });
		// }
	};

	// const { three } = useGlobalThree();

	const generatePdf = async () => {
		const pdfURL = "/pdfs/iloveparket_template.pdf";
		const pdfFileArray = await fetch(pdfURL).then((res) => res.arrayBuffer());
		const quotation = await PDFDocument.load(pdfFileArray);
		const pages = quotation.getPages();
		const page1 = pages[0];

		// const ARQRCode = await QRCode.toDataURL(ARURL, qrOptions);
		// const qrCode = await quotation.embedPng(ARQRCode);

		// FONTS
		quotation.registerFontkit(fontkit);
		const fontBaseURL = `/fonts`;

		const LatoBoldBytes = await fetch(`${fontBaseURL}/Lato-Bold.ttf`).then((res) => res.arrayBuffer());
		const LatoRegularBytes = await fetch(`${fontBaseURL}/Lato-Regular.ttf`).then((res) => res.arrayBuffer());
		const playFairMediumBytes = await fetch(`${fontBaseURL}/PlayfairDisplay-Medium.ttf`).then((res) =>
			res.arrayBuffer()
		);
		// const playFairRegularBytes = await fetch(`${fontBaseURL}/PlayfairDisplay-Regular.ttf`).then((res) =>
		// 	res.arrayBuffer()
		// );

		const LatoBold = await quotation.embedFont(LatoBoldBytes);
		const LatoRegular = await quotation.embedFont(LatoRegularBytes);
		const playFairMedium = await quotation.embedFont(playFairMediumBytes);
		// const playFairRegular = await quotation.embedFont(playFairRegularBytes);

		page1.setFont(LatoRegular);

		const today = new Date();
		const day = today.getDate().toString().padStart(2, "0");
		const month = (today.getMonth() + 1).toString().padStart(2, "0");
		const year = today.getFullYear().toString();
		const currentDate = `${day}/${month}/${year}`;

		page1.drawText(`REF: postid - ${currentDate}`, {
			x: 450,
			y: 755,
			font: playFairMedium,
			size: 10,
		});

		page1.drawRectangle({
			x: 37,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("deur content", {
			x: 43,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawRectangle({
			x: 167,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("deur content", {
			x: 173,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawRectangle({
			x: 297,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("deur content", {
			x: 303,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawRectangle({
			x: 427,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("deur content", {
			x: 433,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawText("deur content", {
			x: 37,
			y: 235,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 220,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 205,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 190,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 175,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 160,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText("deur content", {
			x: 37,
			y: 145,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		const base64 = await quotation.saveAsBase64();
		console.log("optie", optie, new Date().getHours(), new Date().getMinutes(), new Date().getSeconds());
		// if (optie === "SAVE_OFFERTE") {
		// 	updateObject("pdf", { offertepopup: true });
		// } else {
		// 	updateObject("pdf", { offertepopup: false });
		// }
		// updateObject("pdf", { loadingofferte: false });
		// updateObject("pdf", { offertedata: base64 });
		// updateObject("pdf", { postid: postId });

		return base64;
	};

	// const generateImage = async (width, height, place, position = { x: 0, y: 0, z: 0 }, callback) => {
	// 	await new Promise((resolve) => {
	// 		const { scene, camera, gl } = three;
	// 		const cameraPos = camera.position;
	// 		const cameraAspect = camera.aspect;
	// 		const size = new Vector2();
	// 		gl.getSize(size);

	// 		const aspect = width / height;

	// 		camera.aspect = aspect;
	// 		camera.fov = 30;
	// 		camera.updateProjectionMatrix();
	// 		camera.position.set(position.x, position.y, position.z);
	// 		if (place === "floor") {
	// 			camera.lookAt(new Vector3(0, 0, 0));
	// 		} else {
	// 			if (room === "slaapkamer") {
	// 				camera.lookAt(new Vector3(-0.2, 0.7, 0));
	// 			}
	// 			if (room === "keuken") {
	// 				camera.lookAt(new Vector3(-0.8, 0.9, 0));
	// 			}
	// 			if (room === "living") {
	// 				camera.lookAt(new Vector3(-0.5, 1, 0));
	// 			}
	// 		}

	// 		gl.setSize(width, height);
	// 		gl.render(scene, camera);

	// 		const base64Image = gl.domElement.toDataURL("image/jpg", 0.65);

	// 		resizeBase64(base64Image, width, height, (image) => {
	// 			camera.aspect = cameraAspect;
	// 			camera.fov = 30;
	// 			camera.updateProjectionMatrix();
	// 			camera.position.copy(cameraPos);
	// 			gl.setSize(size.x, size.y);
	// 			callback(image);
	// 			resolve();
	// 		});
	// 	});
	// 	return;
	// };

	// function formatNumber(num) {
	// 	const formatted = num.toLocaleString("de-DE", { maximumFractionDigits: 2 });
	// 	return formatted;
	// }
	return main;
};

export default useGeneratePdf;
