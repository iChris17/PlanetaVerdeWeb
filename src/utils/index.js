import * as Swal from "sweetalert2";
import { Iconos } from "./iconosUtilizados";

export const Utils = {
  /**OrderActions: Método que me ordena las acciones(permisos) de forma ascendentemente */
  OrderActions: (permisos) => {
    return permisos.sort(function (a, b) {
      return (
        Number(JSON.parse(a.permiso).prioridad) -
        Number(JSON.parse(b.permiso).prioridad)
      );
    });
  },

  orderMenu: (menus) => {
    if (menus === null) return null;
    menus.sort((a, b) => {
      return (
        Number(JSON.parse(a.valor).orderM) - Number(JSON.parse(b.valor).orderM)
      );
    });
    return menus;
  },

  /**OrderTabs: Método que me ordena las tabs de forma ascendentemente */
  OrderTabs: (objetos) => {
    return objetos.sort(function (a, b) {
      return (
        Number(JSON.parse(a.valor).orderTab) -
        Number(JSON.parse(b.valor).orderTab)
      );
    });
  },

  /**ParsePermisos: Método que parsea los permiso para ser leidos en DOM */
  ParsePermisos: (permisos) => {
    if (permisos === null || permisos === undefined) return [];

    let permisoParse = [];
    let permisoOrder = Utils.OrderActions(permisos);

    permisoParse.push(
      permisoOrder.map((permiso) => {
        return JSON.parse(permiso.permiso);
      })
    );

    return permisoParse[0];
  },

  /** getOperacionesTable: Método para sacar clases para el diseño tanto para Filas y Columnas de la tabla*/
  getOperacionesTable: (data) => {
    if (data === null) return null;
    let operacion = {
      fila: null,
      columna: null,
    };

    //Si el indicativo linea de activado y desactivado
    if (data.inactivo !== undefined) {
      operacion.fila = !data.inactivo ? "table-active" : null;
      //Si lleva estado
    } else if (data.estado !== undefined) {
      let { estado } = data.estado;
      if (estado === null || estado === undefined) {
        let { descripcion } = data.estado;
        estado = descripcion;
      }

      if (estado !== undefined) {
        operacion.columna = Utils.getColorEstados(estado);
      }
    }

    return operacion;
  },
  /**getColorEstados: Metodo que almacena los colores dependiendo los estados de proceso de al app */
  getColorEstados: (estado) => {
    let claseG = "";

    switch (estado) {
      case "Generado":
      case "EN REVISION":
        claseG = "warning";
        break;

      case "En Proceso":
      case "ACEPTADA":
        claseG = "primary";
        break;

      case "GENERADA":
      case "Asignado":
        claseG = "info";
        break;

      case "Cerrado":
      case "Anulada":
      case "RECHAZADA":
      case "ANULADO PERMANENTE":
      case "ANULADO POR EL CLIENTE":
        claseG = "danger";
        break;

      case "PREGENERADA":
        claseG = "secondary";
        break;

      case "FINALIZADA":
        claseG = "success";
        break;

      default:
        claseG = "secondary";
        break;
    }
    return claseG;
  },
  /**getFormatFechaAPI: Método para formatear las fechas y asi poderlas mandar a nivel de Petición */
  getFormatFechaAPI: (fecha) => {
    return fecha.split("-").join("");
  },

  /**getFormatFechaInput: Método para formatear las fechas para que pueda entrar por default al value del input[date] */
  getFormatFechaInput: (fecha) => {
    return fecha.split("/").reverse().join("-");
  },

  /**getValidarFechas: Método para que la fecha inicio no se mayor a la fecha fin */
  getValidarFechas: (fechaIni, fechaFin) => {
    //Validamos que ninguna de las fechas vengan vacia
    if (fechaIni.length > 0 && fechaFin.length > 0) {
      //Solo pasara cuando las 2 fechas esten nulas
      if (fechaIni === "2999-12-31" && fechaFin === "2999-12-31") {
        return true;
        //Si una de ella esta nula no se hace la petición
      } else if (fechaIni !== "2999-12-31" && fechaFin !== "2999-12-31") {
        let fechaI = new Date(fechaIni).getTime();
        let fechaF = new Date(fechaFin).getTime();
        let diferenciaDias = fechaF - fechaI;

        diferenciaDias = diferenciaDias / (1000 * 60 * 60 * 24);

        if (diferenciaDias < 0) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }

    return true;
  },
  /**getFormatFechaText: Método para modificar el formato de fecha a una mejor visualización en pantalla */
  getFormatFechaText: (fecha) => {
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    //Dando formato a la fecha de creacion mas amigable
    let fechaCreacion = "",
      fechaNew = fecha.split("/");
    let anioHora = fechaNew[2].split(" ");

    fechaCreacion = `${meses[Number(fechaNew[1]) - 1]} ${fechaNew[0]}, ${
      anioHora[0]
    } - ${anioHora[1]}
  `;

    return fechaCreacion;
  },

  /**getPermisoSeccion: Método para formatear las fechas para que pueda entrar por default al value del input[date] */
  getPermisoSeccion: (permisos, seccion, posicion) => {
    if (permisos === null || permisos === undefined) return [];
    return permisos.filter(
      (permiso) => permiso.seccion === seccion && permiso.posicion === posicion
    );
  },

  Mensaje: (code) => {
    let msj = "";
    let isReturnMsj = false;

    switch (code) {
      case 401:
        msj = "La sesión ha expirado o no tienes permisos autorizado";
        isReturnMsj = true;
        break;

      case 400:
        msj = "No tienes permisos autorizado";
        isReturnMsj = true;
        break;

      default:
        isReturnMsj = false;
        break;
    }

    if (isReturnMsj) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "¡Error!",
        text: msj,
        showConfirmButton: false,
        timer: 1000,
        width: "350px",
        padding: "20px",
      });
    } else {
      return null;
    }
  },

  getIcon: (icon) => {
    if (Iconos.filter((icono) => icono.nombre === icon).length === 1) {
      return Iconos.filter((icono) => icono.nombre === icon)[0].icon;
    }
  },

  /**exportCSV: Método que me permite guardar archivos excel, recibe 2 parametros:
   * cvsData -->  Datos que se quieren que se exporte.
   * fileName --> Nombre del archivo.
   */
  exportCSV: (csvData, fileName) => {
    
  },

  /**getCopyArrayObjects: Método para hacer una copia de un estado de array de objeto, esto siempre y cuando
   * se quiera mutar los objetos, ya que si se hace de la manera tradicional [...array] cambia todo el estado original
   * en react.
   */
  getCopyArrayObjects: (data) => {
    let array = [];
    data.map((data, i) => {
      array[i] = Object.assign({}, data);
      return null;
    });
    return array;
  },

  getConvertText: (text, option) => {
    let space = " ";
    let arrayCadena = text.split(space);

    let newCadena = [];
    for (let x = 0; x < arrayCadena.length; x++) {
      let palabra = arrayCadena[x].toLowerCase();
      let primerLetra = palabra.substring(0, 1);
      let subCadena = "";
      if (option === 1) {
        subCadena = `${primerLetra.toUpperCase()}`;
        space = "";
      } else if (option === 2) {
        subCadena = `${primerLetra.toUpperCase()}${palabra.slice(1)}`;
      }

      newCadena.push(subCadena);
    }

    return newCadena.join().replace(/,/g, space);
  },

  getFormatDecimal: (value) => {
    let val = value;
    val = val.replace(/([^0-9.]+)/, "");
    val = val.replace(/^(0|\.)/, "");
    const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);

    return match[1] + match[2];
  },
};

/**
 * protocolos
 */
const HTTP = "http";
const HTTPS = "https";

/**
 *
 * Apidata : administra api rest
 */

export class Apidata {
  constructor(host = "", protocolo = HTTP, puerto = "") {
    this.host = host;
    this.protocolo = protocolo;
    this.puerto = puerto;
  }

  /**
   * pinghost : hace un test de prueba del api
   */
  pinghost = () => {
    return fetch(this.hostfull(), {
      method: "GET",
    }).then((resp) => {
      return resp.json();
    });
  };
  /**
   *
   * validar valida si el host no tiene atributos vacios
   */
  validar = () => {
    return this.puerto <= 0 ||
      this.host === "" ||
      this.protocolo !== HTTP ||
      this.protocolo !== HTTPS
      ? false
      : true;
  };
  hostfull = () => {
    return `${this.protocolo}://${this.host}:${this.puerto}`;
  };
}

/**
 * CallApiPC  : captura el host del api de plan de cobro
 * con el tipo de protocolo y el puerto del servicio
 */
export const CallApiPC = () => {
  return new Apidata(
    process.env.REACT_APP_HOST,
    process.env.REACT_APP_PROTO,
    process.env.REACT_APP_PUERTO
  );
};

/**generadorLinea: Método que crear el IdLinea dependiendo del numero introducido desde el formulario
 * longitudLinea -> Limite en que la linea puede generarse
 * id -> Valor introducido desde el formulario
 * prefijo -> Valor que viene desde el servicio el cual puede contener letras (L,S, ML)
 */
export const generadorLinea = (longitudLinea, id, prefijo) => {
  let idLinea = "",
    cero = "";

  //Sacamos la cantidad de cero que se van a generar
  let cantidad =
    longitudLinea - prefijo.toString().length - id.toString().length;

  for (let i = 0; i < cantidad; i++) {
    cero = cero.concat("0");
  }

  //Concatenamos el prefijo
  idLinea = prefijo.concat(cero).concat(id); 

  return idLinea;
};
