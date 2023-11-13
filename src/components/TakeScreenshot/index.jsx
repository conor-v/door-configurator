import { useStore } from "../../stores/appStore";
import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { useEffect, useRef } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { ImageCompressor } from "image-compressor";
import { Vector2, Vector3 } from "three";

const TakeScreenshot = () => {
	const updateObject = useStore((state) => state.updateObject);
	const deurData = useStore((state) => state.door.gekozendeur);
	const { naam, adres, tel, email } = useStore((state) => state.pdf);
	const { gl, scene } = useThree();
	const secondaryCamera = useRef();
	const oldSize = new Vector2();
	gl.getSize(oldSize);
	let imgList = [];
	const imageCompressor = new ImageCompressor();

	const totaal = parseFloat(
		parseFloat(deurData.door.greep?.prijs) +
			parseFloat(deurData.door.slot?.prijs) +
			parseFloat(deurData.door.scharnier?.prijs)
	).toFixed(2);

	const compressorSettings = {
		toWidth: 1920,
		toHeight: 800,
		mimeType: "image/png",
		mode: "strict",
		quality: 1,
		grayScale: false,
		sepia: false,
		threshold: false,
		vReverse: false,
		hReverse: false,
		speed: "low",
	};

	const width = 1920;
	const height = 800;

	function proceedCompressedImage(compressedSrc) {
		imgList.push(compressedSrc);
		updateObject("sidepanel", { imgs: imgList });
	}

	const handleScreenshotNoShader = () => {
		return new Promise((resolve) => {
			updateObject("sidepanel", { doorOpen: 0 });
			setTimeout(() => {
				gl.setSize(width, height);
				secondaryCamera.current.aspect = width / height;
				secondaryCamera.current.updateProjectionMatrix();
				const cameraPosition = new Vector3(0, 1.65, 5.5);
				const targetPosition = new Vector3(0, 0.5, 0);
				secondaryCamera.current.position.copy(cameraPosition);
				secondaryCamera.current.lookAt(targetPosition);
				gl.render(scene, secondaryCamera.current);
				const dataURL = gl.domElement.toDataURL("image/jpg");
				imageCompressor.run(dataURL, compressorSettings, proceedCompressedImage);

				resolve();
			}, 1000);
		});
	};

	const handleScreenshotShader = () => {
		return new Promise((resolve) => {
			updateObject("sidepanel", { doorOpen: 1 });
			setTimeout(() => {
				gl.setSize(width, height);
				secondaryCamera.current.aspect = width / height;
				secondaryCamera.current.updateProjectionMatrix();
				const cameraPosition = new Vector3(0, 1.65, 5.5);
				const targetPosition = new Vector3(0, 0.5, 0);
				secondaryCamera.current.position.copy(cameraPosition);
				secondaryCamera.current.lookAt(targetPosition);
				gl.render(scene, secondaryCamera.current);
				const dataURL = gl.domElement.toDataURL("image/jpg");
				imageCompressor.run(dataURL, compressorSettings, proceedCompressedImage);
				resolve();
			}, 1000);
		});
	};

	const handlePdfGeneration = async () => {
		const pdfURL = "/pdfs/iloveparket_template.pdf";
		const pdfFileArray = await fetch(pdfURL).then((res) => res.arrayBuffer());
		const quotation = await PDFDocument.load(pdfFileArray);
		const pages = quotation.getPages();
		const page1 = pages[0];

		// FONTS
		quotation.registerFontkit(fontkit);
		const fontBaseURL = `/fonts`;

		const LatoBoldBytes = await fetch(`${fontBaseURL}/Lato-Bold.ttf`).then((res) => res.arrayBuffer());
		const LatoRegularBytes = await fetch(`${fontBaseURL}/Lato-Regular.ttf`).then((res) => res.arrayBuffer());
		const playFairMediumBytes = await fetch(`${fontBaseURL}/PlayfairDisplay-Medium.ttf`).then((res) =>
			res.arrayBuffer()
		);

		const LatoBold = await quotation.embedFont(LatoBoldBytes);
		const LatoRegular = await quotation.embedFont(LatoRegularBytes);
		const playFairMedium = await quotation.embedFont(playFairMediumBytes);

		page1.setFont(LatoRegular);

		const today = new Date();
		const day = today.getDate().toString().padStart(2, "0");
		const month = (today.getMonth() + 1).toString().padStart(2, "0");
		const year = today.getFullYear().toString();
		const currentDate = `${day}/${month}/${year}`;

		page1.drawText(naam, {
			x: 37,
			y: 720,
			size: 10,
		});

		page1.drawText(adres, {
			x: 37,
			y: 705,
			size: 10,
		});

		page1.drawText(tel, {
			x: 37,
			y: 690,
			size: 10,
		});

		page1.drawText(email, {
			x: 37,
			y: 675,
			size: 10,
		});

		page1.drawText(`REF: postid - ${currentDate}`, {
			x: 450,
			y: 755,
			font: playFairMedium,
			size: 10,
		});

		const pdfImage0 = await quotation.embedPng(imgList[0]);
		page1.drawImage(pdfImage0, {
			x: 37,
			y: 500,
			width: 250,
			height: 104.17,
		});

		const pdfImage1 = await quotation.embedPng(imgList[1]);
		page1.drawImage(pdfImage1, {
			x: 300,
			y: 500,
			width: 250,
			height: 104.17,
		});

		page1.drawRectangle({
			x: 37,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("Doortype", {
			x: 43,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawText(deurData.doortype, {
			x: 43,
			y: 320,
			size: 8,
			maxWidth: 115,
			lineHeight: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawRectangle({
			x: 167,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("Greep", {
			x: 173,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawText(deurData.door.greep.name, {
			x: 173,
			y: 320,
			size: 8,
			maxWidth: 115,
			lineHeight: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			center: 1,
		});

		page1.drawRectangle({
			x: 297,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("Slot", {
			x: 303,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawText(deurData.door.slot.name, {
			x: 303,
			y: 320,
			size: 8,
			maxWidth: 115,
			lineHeight: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			center: 1,
		});

		page1.drawRectangle({
			x: 427,
			y: 295,
			width: 120,
			height: 50,
			color: rgb(250 / 255, 245 / 255, 242 / 255),
		});

		page1.drawText("Scharnier", {
			x: 433,
			y: 330,
			size: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			font: LatoBold,
		});

		page1.drawText(deurData.door.scharnier.name, {
			x: 433,
			y: 320,
			size: 8,
			maxWidth: 115,
			lineHeight: 10,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
			center: 1,
		});

		page1.drawText("WIDTH (mm)", {
			x: 37,
			y: 235,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText(`${deurData.doorWidth}mm`, {
			x: 300,
			y: 235,
			size: 10,
		});

		page1.drawText("HEIGHT (mm)", {
			x: 37,
			y: 220,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText(`${deurData.doorHeight}mm`, {
			x: 300,
			y: 220,
			size: 10,
		});

		page1.drawText("AFWERKINGM", {
			x: 37,
			y: 205,
			size: 8,
			color: rgb(159 / 255, 68 / 255, 21 / 255),
		});

		page1.drawText(deurData.uitzicht, {
			x: 300,
			y: 205,
			size: 10,
		});

		page1.drawText("€" + totaal, {
			x: 380,
			y: 93,
			size: 28,
			font: playFairMedium,
		});

		const base64 = await quotation.saveAsBase64();

		updateObject("pdf", { offerte: base64 });
		updateObject("sidepanel", { doorOpen: 0 });
		updateObject("pdf", { screenshot: false });
		updateObject("pdf", { popupDowmloadPdf: true });
	};

	useEffect(() => {
		handleScreenshotNoShader()
			.then(handleScreenshotShader)

			.then(handlePdfGeneration)
			.catch((err) => console.log(err));
	}, []);

	return <PerspectiveCamera ref={secondaryCamera} near={1} far={1000} fov={40} makeDefault />;
};

export default TakeScreenshot;
