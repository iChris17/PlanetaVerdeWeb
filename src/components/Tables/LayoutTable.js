import React, { Component } from "react";
import { withRouter } from "react-router-dom";

//Context
import { TableProvider } from "../../context/TableContext";
import CardVista from "../Cards/CardVista";
import Pagination from "../Pagination/PaginationP";
import Table from "./TableVistas";
import Spinner from "../Spinner/Spinner";

//Servicio
import Request from "../../services/Request";

class LayoutTable extends Component {
  pathLocal = "";
  pathHistory = "";
  countG = 0;
  service = new Request();
  paginadorLocalStogare = this.service.getObtenerLocalStorage("paginador");

  initialRank = {
    isDisabledRank: false,
    isContadorRank: 0,
    indexTemp: 0,
  };

  initialState = {
    ini: 0,
    cant: 100,
    cantFija: 100, //Siempre tiene que ir para referencia de la cantidad de registro
    paginaActual: 1, // Comienzo de la pagina
    cantidadFilaPagina: 10, // Tamaño de filas en una pagina
    cantidadBtnPaginador: 5, // Cantidad de numeros visibles en el paginador
    pageBound: 5,
    limitePagina: 0,
    isPrevBtnActive: "disabled",
    isNextBtnActive: "",
  };

  state = {
    paginador: {},
    isSelectRows: [],
    rank: this.initialRank,
  };

  /** 1. isPagination si es false no se muestra
      2. isPagination si es true tiene 2 opciones
        2.1 Que el handlePeticion sea requerido
        2.2 Que el handlePeticion no sea requerido
  */
  componentDidMount() {
    const { handlePeticion, isPagination, history } = this.props;
    //console.log(this.props)

    let localPaginador = {};

    this.pathHistory = history.location.pathname;
    this.pathLocal = this.pathHistory.slice(
      this.pathHistory.lastIndexOf("/") + 1,
      this.pathHistory.length
    );

    //Si el paginnador existe en mi navegador verificamos ciertas condiciones
    if (this.paginadorLocalStogare) {
      /*Si mi paginador en localStorge tiene el mismo path del history de la vista donde 
        me encuentro o el path del localstorage coincide con del history no reinicio el 
        paginador ya que la vista es interna.
      */
      localPaginador =
        this.paginadorLocalStogare.pathLocal === this.pathLocal && //-> Ultimo cambio por aqui de || a &&
        this.pathHistory.search(this.paginadorLocalStogare.pathLocal) >= 0
          ? this.paginadorLocalStogare
          : this.initialState;

      // //Estas condiciones es para cambiar el path del paginador

      let { actualizar, paginadorCopia } = this.updatePaginador(
        localPaginador,
        this.paginadorLocalStogare
      );      
      if (actualizar) {
        localPaginador = Object.assign({}, paginadorCopia);
        this.service.getGuardarLocalStorage("paginador", localPaginador);
      }
    } else {
      localPaginador = this.initialState;
    }

    this.setState(
      {
        paginador: localPaginador,
      },
      () => {
        setTimeout(() => {
          if (isPagination && isPagination !== undefined) {
            if (handlePeticion !== undefined) {
              handlePeticion(localPaginador);
            }
          }
        }, 0);
      }
    );
  }

  getCheckFilter = (data, selectRows, objectDelete) => {
    Object.keys(objectDelete).map((object) => {
      data.filter((data) => {
        let idData = data[object];

        return selectRows.filter((select) => {
          let idSelect = select[object];
          if (idSelect === idData) {
            data.check = true;
          }
          return null;
        });
      });
      return null;
    });

    this.setState({
      isSelectRows: selectRows,
    });
  };

  updatePaginador = (paginador, paginadorLocalStogare) => {
    let paginadorCopia = Object.assign({}, paginador);
    // console.log(paginadorCopia);

    // paginadorCopia.hola = "Kevin Marquez";
    let actualizar = false;

    if (paginadorLocalStogare.pathLocal === undefined) {
      /* Cuando el paginador no existe, mutamos el objeto paginador para añadir una nueva propiedad 
         Que despues funciona para hacer ciertas comparaciones */
      paginadorCopia.pathLocal = this.pathLocal;
      actualizar = true;
    } else if (
      this.pathHistory.search(paginadorLocalStogare.pathLocal) > 0 &&
      this.pathHistory.search(this.pathLocal) > 0
    ) {
      //Cuando se mueve a nivel de vista internas de una vista padre
      /* Este sus path tanto el del localStorage y el path del history son distinto inicializamos 
        el paginador solo para la vista interna
      */
      if (this.pathLocal !== paginadorLocalStogare.pathLocal) {
        paginadorCopia.cant = this.initialState.cant;
        paginadorCopia.paginaActual = this.initialState.paginaActual;
        paginadorCopia.cantidadBtnPaginador = this.initialState.cantidadBtnPaginador;
        paginadorCopia.limitePagina = this.initialState.limitePagina;
      } else {
        actualizar = true;
      }
    } else if (this.pathHistory.search(paginadorLocalStogare.pathLocal) < 0) {
      /* Cuando mi  path del localstorage no coincide con el del history, es que cambie de vista 
          padre
      */
      paginadorCopia.pathLocal = this.pathLocal;
      actualizar = true;
    }

    return {
      paginadorCopia,
      actualizar,
    };
  };

  reloadData = (objPaginador, peticionActive) => {
    const { paginador } = this.state;
    const { paginaActual } = paginador;
    const { handlePeticion } = this.props;

    if (
      objPaginador.paginaActual >= 1 ||
      objPaginador.paginaActual > paginaActual
    ) {
      //Si peticionActive es true, hay que hacer otra peticion
      if (peticionActive) {
        this.setState(
          {
            paginador: objPaginador,
          },
          () => {
            setTimeout(() => {
              handlePeticion(this.state.paginador);
            }, 0);
          }
        );
        //Si no es true, solo actualizamos la paginaActual
      } else {
        this.setState({
          paginador: objPaginador,
        });
      }

      let { actualizar, paginadorCopia } = this.updatePaginador(
        objPaginador,
        this.paginadorLocalStogare
      );

      if (actualizar) {
        this.service.getGuardarLocalStorage("paginador", paginadorCopia);
      }

      // this.service.getGuardarLocalStorage("paginador", objPaginador);
    }
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log(props);
  // }

  componentDidUpdate(prevProps, prevState) {
    /* Esto pasa cuando tenemos mezclado 2 cosas
      1. Filtros en la vista
      2. Y paginacion
      ---> 
    */
    //console.log(prevProps.data);
    let aplicar = false;
    const { data, selectRows } = this.props;
    //console.log(data);
    if (prevProps.data !== undefined) {
      //Validamos que la data original y la dataAnterior no este nula
      if (prevProps.data !== null && data !== null) {
        if (data !== null) {
          if (prevProps.data.length > 0) {
            aplicar = true;
          }
        } else if (prevProps.data.length !== null) {
          if (data > 0) {
            aplicar = true;
          }
        }
      }
    }

    if (aplicar) {
      let copiaStatePaginador = Object.assign({}, prevState.paginador);

      if (prevProps.data.length > data.length) {
        copiaStatePaginador.paginaActual = 1;
        copiaStatePaginador.cantidadBtnPaginador = 5;
        copiaStatePaginador.limitePagina = 0;

        this.setState({
          paginador: copiaStatePaginador,
        });
      }
    }

    /** Si el selectRows es undefined no se ejecuta la funcion para saber los que estan check
     * esto sucede cuando se realiza un filtrado y este no trae datos, entonces este componente
     * se desmonta y se pierde el estado local
     */

    // console.log(this.props);

    if (
      !data || //Si la data viene nula
      data === prevProps.data || //Si la cantidad de fila tanto de la data y del historico
      selectRows === undefined ||
      this.state.paginador !== prevState.paginador
    )
      return;
    const { rows, objectDelete } = selectRows;

    //Validamos que tanto la data que viene como props y la data que queda como historico sea mayor a cero
    if (data.length > 0 && prevProps.data.length > 0) {
      this.countG += 1;
      //Cuando este en cero es por que en el filtrado ese componente se desmonto y cuando
      //vuelve al montado se reinicia a cero
      if (this.countG === 1) {
        this.getCheckFilter(data, rows, objectDelete);
        this.countG = 0;
      }
    }
  }

  addSelectRows = (selectRowsCopy, row, objectCreate) => {
    /**
     * selectRowsCopy ----> Estado para concatenar todos los seleccionados
     * row ----> Fila seleccionada
     * objectCreate -----> Objeto que viene como props, esto para armar el json para andarlo al servicio
     */
    let aux = {};
    // let contExists = 0;
    Object.keys(objectCreate).map((object) => {
      return Object.keys(row).map((key) => {
        if (object === key) return (aux[object] = row[object]);
        return null;
      });
    });

    if (Object.keys(aux).length > 0) {
      return selectRowsCopy.concat(aux);
      // return { data: selectRowsCopy.concat(aux), contExists };
    } else {
      return [];
      // return { data: [], contExists };
    }
  };

  deleteSelectRows = (selectRowsCopy, row, objectDelete) => {
    let aux;
    Object.keys(objectDelete).map((object) => {
      aux = selectRowsCopy.filter((select) => select[object] !== row[object]);
      return null;
    });

    return aux;
  };

  /**handleSelectRows: Si tipProcess es igual a :
   * S -----> es por que el proceso es de seleccionar todos o uno por uno
   * R -----> es por rango para seleccionar ciertos campos
   */

  handleSelectRows = (event, allRows, position, tipProcess) => {
    let { selectRows, data } = this.props;
    let selectRowsCopy = [...this.state.isSelectRows];
    let dataCopy = [...data];

    const setCheckedRows = (i) => {
      //Si el objeto no tiene el atributo check es true por defecto
      let checked = dataCopy[i].check === undefined ? true : !dataCopy[i].check;
      dataCopy[i].check = checked;

      if (checked) {
        selectRowsCopy = this.addSelectRows(
          selectRowsCopy,
          dataCopy[i],
          selectRows.objectCreate
        );
      } else {
        selectRowsCopy = this.deleteSelectRows(
          selectRowsCopy,
          dataCopy[i],
          selectRows.objectDelete
        );
      }
    };

    if (tipProcess === "S") {
      if (selectRows !== undefined) {
        // /* *** Eleccion de todas las columnas *** */
        if (allRows) {
          for (let i = 0; i < dataCopy.length; i++) {
            if (event) {
              if (dataCopy[i].check === undefined || !dataCopy[i].check) {
                selectRowsCopy = this.addSelectRows(
                  selectRowsCopy,
                  dataCopy[i],
                  selectRows.objectCreate
                );
              }
            } else {
              selectRowsCopy = this.deleteSelectRows(
                selectRowsCopy,
                dataCopy[i],
                selectRows.objectDelete
              );
            }
            dataCopy[i].check = event;
          }

          /* *** Eleccion de columnas una por una *** */
        } else {
          setCheckedRows(position);
        }

        this.setState({
          isSelectRows: selectRowsCopy,
        });
        selectRows.event(selectRowsCopy);
      }
    } else if (tipProcess === "R") {
      const { rank } = this.state;

      let minAux = 0,
        maxAux = 0;
      //Primer Click
      if (rank.isContadorRank === 0) {
        minAux = position;
        this.setState({
          rank: {
            ...this.state.rank,
            isContadorRank: rank.isContadorRank + 1,
            indexTemp: minAux,
          },
        });
        //Segundo Click
      } else if (rank.isContadorRank === 1) {
        if (rank.indexTemp > position) {
          minAux = position;
          maxAux = rank.indexTemp;
        } else {
          minAux = rank.indexTemp;
          maxAux = position;
        }

        for (let i = minAux; i <= maxAux; i++) {
          setCheckedRows(i);
        }

        this.setState({
          isSelectRows: selectRowsCopy,
          rank: this.initialRank,
        });
        selectRows.event(selectRowsCopy);
      }
    }
  };

  handleSelectRank = (isActive) => {
    this.setState({
      rank: {
        ...this.state.rank,
        isDisabledRank: isActive,
      },
    });
  };

  render() {
    //State
    const { paginador, rank } = this.state;
    const { paginaActual, cantidadFilaPagina } = paginador;

    // console.log(paginador);

    //Props
    const {
      title,
      cabecera,
      data,
      acciones,
      handleEventActions,
      loading,
      isPagination,
      typeTable,
      isInternal,
    } = this.props;

    let componente;
    let mensaje = <h2 className="text-center">No hay datos que mostrar</h2>;

    // console.log(data);

    if (loading) {
      return <Spinner height={"60vh"} />;
    }

    if (data === undefined || data === null) {
      componente = mensaje;
    } else if (data.length === 0) {
      componente = mensaje;
    } else if (data.length > 0) {
      const indexOfLastTodo = paginaActual * cantidadFilaPagina;
      const indexOfFirstTodo = indexOfLastTodo - cantidadFilaPagina;
      let body = isPagination
        ? data.slice(indexOfFirstTodo, indexOfLastTodo)
        : data;

      //Armamos el objeto cuando la tabla sea por seleccion
      let objetcSelect = typeTable
        ? {
            rank: rank,
            handleSelectRows: this.handleSelectRows, // Método que reacciona al seleccionado de las filas
            handleSelectRank: this.handleSelectRank,
          }
        : {};

      componente = (
        <TableProvider
          value={{
            dataReal: data, // Datos originales que se listaran por paginación
            title: title, // El titulo de la vista de la tabla
            head: cabecera, // Encabezado de la tabla
            body: body, // El cuerpo de la tabla
            actions: acciones, // Acciones de tabla (Editar,Eliminar, Etc)
            paginador: paginador,
            handleEventActions: handleEventActions, //Siempre va
            objetcSelect: objetcSelect, //Se crea cuando el typo de table sea check
            // typeTable: typeTable, // Tipo de table (normal, seleccion de filas (checked))
            // size: size,
            isInternal: isInternal,
          }}
        >
          <Table />
          {isPagination && isPagination !== undefined ? (
            <Pagination
              data={data}
              paginador={paginador}
              reloadData={this.reloadData}
            />
          ) : null}
        </TableProvider>
      );
    }

    /** Si isInternal es false o no viene como props(undefined) entonces este no estar dentro del
     * componente card ya que puede estar dentro de uno en un componente superior
     **/
    return isInternal === undefined || !isInternal ? (
      <CardVista>{componente}</CardVista>
    ) : (
      componente
    );
  }
}

export default withRouter(LayoutTable);
