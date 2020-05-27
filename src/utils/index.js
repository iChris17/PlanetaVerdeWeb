import * as Swal from "sweetalert2";

export const Utils = {
  Mensaje: code => {
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
        padding: "20px"
      });
    } else {
      return null;
    }
  }
};

/**
 * protocolos
 */
const HTTP = "http";
const HTTPS = "https";

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
        method: "GET"
      }).then(resp => {
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

