import AuthService from "./AuthService";
import { Utils } from "../utils/index";

export default class Requests {
  AuthSrv = new AuthService();

  listGET(from) {
    return this.AuthSrv.requestFetch(from, {
      method: "GET"
    }).catch(err => {
      console.log(err);
    });
  }

  listPOST(from, data) {
    return this.AuthSrv.requestFetch(from, {
      method: "POST",
      body: JSON.stringify(data)
    }).catch(this.handleError);
  }

  update(from, data) {
    return this.AuthSrv.requestFetch(from, {
      method: "PUT",
      body: JSON.stringify(data)
    }).catch(this.handleError);
  }

  delete(from, id) {
    return this.AuthSrv.requestFetch(from, {
      method: "DELETE",
      body: JSON.stringify({ _id: id })
    }).catch(this.handleError);
  }

  /**getGuardarLocalStorage: Método para guardar localStorage en cualquier parte del proyecto */
  getGuardarLocalStorage(data) {
    return this.AuthSrv.setToken(data);
  }

  /**getObtenerLocalStorage: Método para obtener el localStorage ya guardado en cualquier parte del proyecto */
  getObtenerLocalStorage(key) {
    return this.AuthSrv.getToken();
  }

  /**getRemoveLocalStorage: Método para eliminar el localStorage  ya guardado en cualquier parte del proyecto */
  getRemoveLocalStorage() {
    return this.AuthSrv.removeToken();
  }

  /**expiredTokenActions: Método para sacar al usuario del proyecto cuando su token expira,
   * esto para los caso para las peticiones realizadas a nivel de objeto y peticiones de acciones CRUD */
  expiredTokenActions(respuesta) {
    let code = 0;
    if (respuesta.code === 401) {
      code = respuesta.code;
    } else {
      code = 400;
    }

    setTimeout(() => {
      this.AuthSrv.removeToken();
      
      window.location.replace("/login");
    }, 1000);
    Utils.Mensaje(code);
  }

  handleError(error) {
    console.error("Error en request ", error);
    return Promise.resolve(false);
  }
}
