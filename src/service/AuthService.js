import {CallApiPC,Utils} from '../utils/index'

class AuthService{
    constructor(dominio){
        this.dominio = dominio || `${CallApiPC().hostfull()}`;
        this.login = this.login.bind(this);
    }

    /**login: Método para el inicio de sesion  */
  login(user, pass) {
    return fetch(this.dominio + "/api/Account/Login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ user, pass })
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (response.data !== null) {
          const {
            data: { token }
          } = response;

          this.setToken(token);
          
        }
        return response;
      });
  }

  /**setToken : Método para guardar el token el localStorage */
  setToken(token) {
    localStorage.setItem("token", token);
  }

  /**getToken : Método para extraer el token del localStorage */
  getToken() {
    return localStorage.getItem("token");
  }

  /**removeToken : Eliminación del token del localStorage */
  removeToken() {
    localStorage.removeItem('token');
  }

  /**loggedIn: Método para verificar si el usuario se le expiro el token en el componente padre app.main.js*/
  loggedIn() {
    if (this.getToken()) {
      this.requestFetch("/validate", {
        method: "GET"
      }).then(resp => {
        const { code } = resp;
        if (code !== 200) {
          setTimeout(() => {
            this.removeToken();
          }, 1000);

          Utils.Mensaje(code);
        } // No se vuelve a inscribir el token en el observable ya que entra en un Ciclo
      });
    } else {
    }
  }

  /**logout: Método para cerrar sesión */
  logout() {
    if (this.getToken()) {
      this.requestFetch("/logout", {
        method: "GET"
      }).then(resp => {
        console.log(resp);
        if (resp.code === 200) {
          this.removeToken();
 
        }
        if (resp.code === 401) {
          this.removeToken();
    
        }
      });
    }
  }

  /** Verficamos si tenemos conexión al internet */
  getConnectNetwork() {
    return navigator.onLine;
  }

  /**requestFetch : Método genérico que responde a cualquier petición (GET,POST,PUT,DELETE)*/
  requestFetch(url, options) {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
     // Authorization: "Bearer " + this.getToken()
    };

    return fetch(this.dominio + url, {
      headers,
      ...options
    })
      .then(response => {
        return response.json();
      })
      .catch(err => {
        console.log(err);
      });
  }

}

export default AuthService;