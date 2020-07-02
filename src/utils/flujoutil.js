import { DataSet } from "vis-network";
import {
  ConfigDefaultFlujo,
  ConfigDefaultNodo,
  ColorsNode
} from "./flujoconfig";
import { GenerateSvgBox } from "./SvgUtil";

/*FlujoUtil :  manipula los datos del diagrama de flujo para 
el plan de cobro */
/*Flujo maneja los edge del proyecto */
export class Flujo {
  constructor(from = "", to = "", inNew = false, inDelete = false) {
    this.from = from;
    this.to = to;
    this.inNew = inNew;
    this.inDelete = inDelete;
  }
  /*get : genera el edge valido  DataSet*/
  get() {
    return {
      from: this.from,
      to: this.to,
      arrows: ConfigDefaultFlujo
    };
  }
}
/*Nodo maneja los nodos de la data del arbol */
export class Nodo {
  constructor(
    id = ConfigDefaultNodo.id,
    descrip = ConfigDefaultNodo.descrip,
    forma = ConfigDefaultNodo.forma,
    font = ConfigDefaultNodo.font,
    alig = ConfigDefaultNodo.alig,
    color = ConfigDefaultNodo.color,
    colorfont = ConfigDefaultNodo.colorfont,
    level = ConfigDefaultNodo.level,
    obj = ConfigDefaultNodo.color.obj,
    x = ConfigDefaultNodo.x,
    y = ConfigDefaultNodo.y,
    image = ConfigDefaultNodo.image,
    size = ConfigDefaultNodo.size
  ) {
    this.id = id;
    this.descrip = descrip;
    this.forma = forma;
    this.font = font;
    this.alig = alig;
    this.color = color;
    this.obj = obj;
    this.image = image;
    this.level = level;
    this.colorfont = colorfont;
    this.x = x;
    this.y = y;
    this.size = size;
    this.imageselect = null;
  }
  /*get : genera el nodo valido  DataSet*/
  get() {
    return {
      id: this.id,
      label: this.descrip,
      color: ColorsNode.get(this.color),
      level: this.level,
      shape: this.forma,
      x: this.x,
      y: this.y,
      size: this.size,
      shapeProperties: {
        borderRadius: 10
      },
      image: {
        unselected: GenerateSvgBox(this.obj, false, this.color),
        selected: GenerateSvgBox(this.obj, true, this.color)
      },
      font: {
        face: this.font,
        align: this.alig,
        color: this.colorfont,
        multi: true
      }
    };
  }
  SetSize(size=0){
    this.size = size;
    return this;
  }

  SetDom(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    return this;
  }
  setLevel(level = 0) {
    this.level = level;
    return this;
  }
  setColor(color = "green") {
    this.color = color;
    return this;
  }
  setObj(obj = {}) {
    this.obj = obj;
    return this;
  }
}
/*Arbol Maneja los nodos y flujo para generar la data */
export class Arbol {
  constructor(flujos = [], nodos = []) {
    this.flujos = flujos;
    this.nodos = nodos;
  }
  FindNodo(idnodo = "") {
    return this.nodos.find(item => {
      return item.id === idnodo;
    });
  }

  SetNodo(idnodo = "", nodo = new Nodo()) {
    this.nodos = this.nodos.map(item => {
      if (item.id === idnodo) {
        item = nodo;
      }
      return item;
    });
  }
  GetFlujosNew() {
    return this.flujos.filter(item => {
      return item.inNew;
    });
  }
  GetFlujosDelete() {
    return this.flujos.filter(item => {
      return item.inDelete;
    });
  }
  DeleteFlujo(from = "", to = "") {
    this.flujos = this.flujos.map(item => {
      if (item.from === from && item.to === to) {
        item.inDelete = true;
      }
      return item;
    });
  }
  FindFlujo(from = "", to = "") {
    return this.flujos.find(item => {
      return item.from === from && item.to === to;
    });
  }
  AddNodo(nodo = new Nodo()) {
    this.nodos = [...this.nodos, nodo];
  }
  AddFlujo(flujo = new Flujo()) {
    this.flujos = [...this.flujos, flujo];
  }
  GenDataSet() {
    let ArrayAux = this.nodos.map(item => {
      return item.get();
    });
    let nodes = new DataSet(ArrayAux);
    ArrayAux = this.flujos.map(item => {
      return item.get();
    });
    let edges = new DataSet(ArrayAux);
    let data = {
      nodes: nodes,
      edges: edges
    };
    return data;
  }
}
const agregarnodo = (arbol = new Arbol(), data = []) => {
  data.forEach(item => {
    let nodo = new Nodo(item.id, "").setObj(item.detalle);
    nodo.setColor(nodo.obj.inactivo ? "green" : "red");
    if (
      item.params.x !== null &&
      item.params.y !== null &&
      item.params.x !== undefined &&
      item.params.y !== undefined
    ) {
      let { x, y } = item.params;
      nodo = nodo.SetDom(x, y);
    }

    arbol.AddNodo(nodo);
  });
  return arbol;
};
const agregarflujo = (arbol = new Arbol(), data = []) => {
  data.forEach(item => {
    if (item.from === "ND") {
      let nodo = arbol.FindNodo(item.to);
      nodo.setColor("blue");
      arbol.SetNodo(nodo.id, nodo);
    }

    let flujo = new Flujo();
    flujo.from = item.from;
    flujo.to = item.to;
    arbol.AddFlujo(flujo);
  });
  return arbol;
};

export const TranformarArbol = (data = {}) => {
  let arbol = new Arbol();
  arbol = agregarnodo(arbol, data.lineas);
  arbol = agregarflujo(arbol, data.flujos);
  return arbol;
};

export const TranformarNodos = (data = []) => {
  data = data.map(item => {
    const nodo = {
      id: item.id,
      x: item.x,
      y: item.y
    };
    return nodo;
  });
  return data;
};
export const GetFlujosDatos = (arbol = new Arbol(), acc = "") => {
  switch (acc) {
    case "I":
      return arbol.GetFlujosNew().map(item => {
        return TranformarDataToFlujo(arbol.FindNodo(item.to).obj, item.from);
      });
    case "D":
      return arbol.GetFlujosDelete().map(item => {
        return TraformarDataToFlujoDelete(item);
      });
    default:
      return {};
  }
};
export const TraformarDataToFlujoDelete = (data = {}) => {
  return {
    idlinea: data.to,
    idlineaant: data.from
  };
};
export const TranformarDataToFlujo = (data = {}, idant = "") => {
  const {
    id,
    cantdiasanticipo,
    cantdiasantiguedad,
    cantdiascorte,
    impdeudatotalmax,
    impdeudatotalmin,
    impdeudavencmax,
    impdeudavencmin,
    impdeudareclamadamax,
    impdeudareclamadamin,
    impdeudainrregmax,
    impdeudainrregmin,
    impdeudaacordadamax,
    impdeudaacordadamin,
    impdeudacuotasmax,
    impdeudacuotasmin,
    incelular,
    inemail,
    inpropuesta,
    intelefono,
    inprocesoaut,
    impfacturadomax,
    impfacturadomin,
    cantfacttotalmax,
    cantfacttotalmin,
    cantfactvencmax,
    cantfactvencmin,
    csmofactmax,
    csmofactmin,
    grtarifa,
    grregion,
    grsertip,
    grsegmento,
    grserestado,
    grclitipo,
    grmercado
  } = data;
  return {
    id,
    idant,
    ccdiasentrelineas: 10,
    cantdiasantiguedad,
    cantdiascorte,
    cantdiasanticipo,
    impdeudatotalmin,
    impdeudatotalmax,
    impdeudavencmin,
    impdeudavencmax,
    impdeudareclamadamin,
    impdeudareclamadamax,
    impdeudainrregmin,
    impdeudainrregmax,
    impdeudaacordadamin,
    impdeudaacordadamax,
    impdeudacuotasmin,
    impdeudacuotasmax,
    cantfacttotalmin,
    cantfacttotalmax,
    cantfactvencmin,
    cantfactvencmax,
    csmofactmin,
    csmofactmax,
    impfacturadomin,
    impfacturadomax,
    grtarifa: grtarifa.id,
    grserestado: grserestado.id,
    grsegmento: grsegmento.id,
    grregion: grregion.id,
    grsertip: grsertip.id,
    grclitipo: grclitipo.id,
    grmercado: grmercado.id,
    inpropuesta,
    intelefono,
    incelular,
    inemail,
    inaplicalinea: true,
    inprocesoaut
  };
};

export const FindPermisoPrioridad = (permisos = [], prioridad = 0) => {
  const acc = permisos.find(item => parseInt(item.prioridad) === prioridad);
  return acc === null || acc === undefined ? false : true;
};

export const FilterPermisosPrioridad = (permisos = [], prioridades = []) => {
  return permisos.filter(item => {
    if (!findnumber(parseInt(item.prioridad), prioridades)) {
      return item;
    } else {
      return null;
    }
  });
};

const findnumber = (num = 0, nums = []) => {
  const resp = nums.find(item => item === num);
  return resp === null || resp === undefined ? false : true;
};
