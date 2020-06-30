/*Constantes */
/*ConfigDefaultFlujo : Configuraciones default para las uniones de flujos "edge" */
export const ConfigDefaultFlujo = {
  to: {
    enabled: true,
    type: "end"
  }
};
const ConfigColorGreen = {
  border: "#10b52e",
  background: "#edffee",
  highlight: {
    border: "#14e039",
    background: "#edfcf5"
  },
  hover: {
    border: "#14e039",
    background: "#edfcf5"
  }
};
const ConfigColorBlue = {
  border: "#1690c4",
  background: "#cee8f5",
  highlight: {
    border: "#1cbbff",
    background: "#ebf7fc"
  },
  hover: {
    border: "#1cbbff",
    background: "#ebf7fc"
  }
};
const ConfigColorRed = {
  border: "#bf0f0f",
  background: "#fad9da",
  highlight: {
    border: "#ff1414",
    background: "#faebeb"
  },
  hover: {
    border: "#ff1414",
    background: "#faebeb"
  }
};
export const ColorsNode = new Map([
  ["green", ConfigColorGreen],
  ["red", ConfigColorRed],
  ["blue", ConfigColorBlue]
]);

/*ConfigDefaultNodo : Configuraciones default para los nodos del arbol */
export const ConfigDefaultNodo = {
  id: "",
  descrip: "",
  forma: "image",
  font: "Monospace",
  alig: "center",
  color: "green",
  colorfont: "#2e3633",
  level: undefined,
  x: undefined,
  y: undefined,
  image:undefined,
  size:200,
  obj: {}
};

/*ConfigLocale : configuracion del los mensajes para manipulacion de flujo */
const ConfigLocale = {
  en: {
    edit: "Editar",
    del: "Eliminar Seleccionado",
    back: "Regresar",
    addNode: "Add Node",
    addEdge: "Agregar Flujo",
    editNode: "Edit Node",
    editEdge: "Editar Flujo",
    addDescription: "Click in an empty space to place a new node.",
    edgeDescription:
      "Haga clic en una lina y arrastre el borde a otra linea para conectarlos y crear el flujo.",
    editEdgeDescription:
      "Haga clic en los puntos de control y arrástrelos a una linea para conectarse a él.",
    createEdgeError: "Cannot link edges to a cluster.",
    deleteClusterError: "Clusters cannot be deleted.",
    editClusterError: "Clusters cannot be edited."
  }
};

/*ConfigDefaultFlujo : Configuraciones del flujo de plan de cobro*/
export const ConfigDiagrama = {
  edges: {
    smooth: {
      type: "cubicBezier",
      forceDirection: "vertical",
      roundness: 0.5
    },
    color:"#365375",
    width: 8,
    shadow: true,
    arrows: {
        to: {
            enabled: true,
            type: "arrow"
          }
    }
  },
  locales: ConfigLocale,
  manipulation: {
    enabled: false,
    initiallyActive: false,
    addNode: false,
    addEdge: true,
    editEdge: false,
    deleteNode: false,
    deleteEdge: true
  },
  nodes: {
    size: 210,
    borderWidth: 1.5,
    shadow: true,
    font: {
      size: 17
    }
  },
  physics: false,
  interaction: { hover: true, navigationButtons: true, keyboard: true },
  layout: { randomSeed: 1 },
  autoResize: true,
  height: "100%",
  width: "100%"
};
