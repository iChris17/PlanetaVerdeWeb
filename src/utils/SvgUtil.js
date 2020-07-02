const TrimDescrip = (data = "") => {
  if (data.length <= 17) {
    return data;
  }
  return `${data.substring(0, 14)}...`;
};

const ColorGreen = {
  primary: "#1cdbb5",
  hover: "#12b897",
  colortitle: "#333333"
};
const ColorRed = {
  primary: "#ff1414",
  hover: "#bf0f0f",
  colortitle: "#ffffff"
};

const ColorBlue = {
  primary: "#1cbbff",
  hover: "#1690c4",
  colortitle: "#333333"
};

export const ColorsSvg = new Map([
  ["green", ColorGreen],
  ["blue", ColorBlue],
  ["red", ColorRed]
]);

const BOX = {
  heigh: 0,
  width: 0,
  x: 0,
  y: 0,
  fontsize: 0,
  bold: false,
  text: "",
  colorbox: "",
  colorfont: ""
};

const SvgBox = (data = BOX) => {
  let { bold, fontsize, width, heigh, x, y, text, colorbox, colorfont } = data;
  colorbox =
    colorbox === undefined || colorbox === null || colorbox === ""
      ? "#ffffff"
      : colorbox;
  colorfont =
    colorfont === undefined || colorfont === null || colorfont === ""
      ? "#000000"
      : colorfont;
  return `
  <g>
    <rect id="svg_1" height="${heigh}" width="${width}" y="${y}" x="${x}" stroke-width="4" stroke="#999999" fill="${colorbox}"/>
    <svg  height="${heigh}" width="${width}" y="${y}" x="${x}"  >
      <text x="50%" y="60%" alignment-baseline="middle" text-anchor="middle" fill="${colorfont}" stroke="#999999" stroke-width="0" stroke-opacity="null" fill-opacity="null" id="svg_6" font-size="${fontsize}" font-family="Euphoria, sans-serif"  xml:space="preserve" font-weight="${
    bold ? "bold" : ""
  }">${text}</text>      
    </svg>
  </g>
  `;
};

const GenSvgColumna = (
  Xini = 0,
  Yini = 0,
  heigh = 0,
  widthMax = 0,
  data = []
) => {
  const Ybox1 = Yini + heigh;
  const Ybox2 = Ybox1 + heigh;
  const width = widthMax / data.length;
  let svgbox = "";
  let Xbox = Xini;
  data.forEach(item => {
    svgbox = `
      ${svgbox}
      ${SvgBox({
        heigh,
        width,
        x: Xbox,
        y: Ybox1,
        text: item.titulo,
        fontsize: 30,
        bold: true
      })}
      ${SvgBox({
        heigh,
        width,
        x: Xbox,
        y: Ybox2,
        text: item.data,
        fontsize: 30,
        bold: false
      })}
      `;
    Xbox += width;
  });
  return svgbox;
};

export const GenerateSvgBox = (data = {}, indhover = false, color = "") => {
  let { id, descrip } = data;
  const { primary, hover, colortitle } = ColorsSvg.get(color);
  descrip = TrimDescrip(descrip);
  const colorbox = !indhover ? primary : hover;
  const heightMax = 296.00001;
  const widthMax = 573.99998;
  const heightBoxText = heightMax / 3;

  const Yini = 27.49999;
  const Xini = 3.50002;
  const dataprueba = [
    {
      titulo: "Importe Facturado",
      data: "1500000000 C$"
    }
  ];

  return (
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(`
  <svg width="616" height="326" xmlns="http://www.w3.org/2000/svg">
  <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
 
  <g>
   <rect fill="none" id="canvas_background" height="328" width="618" y="-1" x="-1"/>
  </g>
   <rect rx="6" id="svg_14" height="${heightMax}" width="${widthMax}" y="${Yini}" x="${Xini}" stroke-width="4" stroke="#999999" fill="#ffffff"/>
   ${SvgBox({
     heigh: heightBoxText,
     width: widthMax,
     x: Xini,
     y: Yini,
     text: `${id}-${descrip}`,
     fontsize: 35,
     bold: true,
     colorbox: colorbox,
     colorfont: colortitle
   })}
   ${GenSvgColumna(Xini, Yini, heightBoxText, widthMax, dataprueba)}

   <rect fill="#f39c12" stroke="#d4860b" stroke-width="4" x="501.5" y="3.5" width="112" height="63" id="svg_7" rx="6"/>
   <text fill="#ffffff" stroke="#bf5f00" stroke-width="0" x="534.5" y="43" id="svg_8" font-size="26" font-family="Euphoria, sans-serif" text-anchor="start" xml:space="preserve">33%</text>
 
 </svg>
`)
  );
};
