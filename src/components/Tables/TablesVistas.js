import React, { Component, Fragment } from "react";
import { Table, ButtonGroup, Badge } from "reactstrap";

// import TooltipC from "../Tooltip/Tooltip";

//Context
import { TableConsumer } from "../../context/TableContext";

//Components
import Actions from "../Actions/Actions";

//Utils
import { Utils } from "../../utils/index";

//Contantes
let isChekedTable = false;

/** findValor : Se Mapea el  nombre de la columna para buscar su objeto.valor en el objeto original */
const findValor = (head, body) => {
  let { nombreJSON } = head;

  for (var key in body) {
    if (nombreJSON === key) {
      let valor = null;
      //Validamos que podamos insertar la descripciones o estados en X listado con cualquiera peticion
      if (body[key].estado !== undefined) {
        valor = body[key].estado;
      } else if (body[key].descripcion !== undefined) {
        valor = body[key].descripcion;
      } else {
        valor = body[key];
      }
      return {
        nombreColumn: key,
        valor: valor,
      };
    }
  }
  return null;
};

/**cantRowsSelect: Metodo que me saca la cantidad de columnas que estan seleccionado, este se activa cuando el
 * tipo de tabla es checked
 */
const cantRowsSelect = (body) => {
  let contador = 0;
  body.map((data) => {
    if (data === null) return null;
    if (data.check) {
      contador += 1;
    }

    return null;
  });

  return contador;
};

/**Componente Head: Aqui se listaran todos los posibles encabezado de 'X' vista de tablas
 * esto se tiene que parametrizar en archivos independientes ya que los nombre varian.
 */
const Head = () => {
  return (
    <TableConsumer>
      {(value) => {
        const { head, actions } = value;

        const design = isChekedTable ? "bg-primary text-white" : "bg-primary text-white";

        return (
          <thead>
            <tr className={`${design}`}>
              {isChekedTable ? <th> </th> : null}
              <th className="text-center" scope="col">
                #
              </th>

              {Object.keys(head).map((index) => (
                <th className="text-center" scope="col" key={index}>
                  {head[index].nombreVista}
                </th>
              ))}

              {actions !== undefined &&
              actions !== null &&
              actions.filter((action) => action.tipo === "C").length > 0 ? (
                <th className="text-center">Acciones</th>
              ) : null}
            </tr>
          </thead>
        );
      }}
    </TableConsumer>
  );
};

const Body = (props) => {
  return (
    <TableConsumer>
      {(value) => {
        const {
          head,
          body,
          objetcSelect,
          actions,
          paginador,
          handleEventActions,
        } = value;

        let { paginaActual, cantidadFilaPagina } = paginador;

        return (
          <Fragment>
            <tbody>
              {body.map((data, i) => {
                if (data === null) return null;
                if (paginaActual !== undefined) {
                  let index = 0;
                  index =
                    i + paginaActual * cantidadFilaPagina - cantidadFilaPagina;

                  let util = Utils.getOperacionesTable(data);

                  if (data.check !== undefined) {
                    util.fila = data.check ? "table-success" : null;
                  }

                  return (
                    <tr
                      key={index}
                      className={util.fila}
                      onClick={(event) => {
                        const { handleSelectRows, rank } = objetcSelect;
                        return isChekedTable
                          ? rank.isDisabledRank
                            ? handleSelectRows(event, false, index, "R")
                            : handleSelectRows(event, false, index, "S")
                          : null;
                      }}
                    >
                      {isChekedTable ? (
                        <Fragment>
                          <td>
                            <input
                              type="checkbox"
                              name="check"
                              checked={
                                body[i].check === undefined
                                  ? false
                                  : body[i].check
                              }
                              onChange={() => {}}
                            />
                          </td>
                        </Fragment>
                      ) : null}
                      <td className="text-center font-weight-bolder">
                        {index + 1}
                      </td>
                      {head.map((item, index) => {
                        let objeto = item.formato
                          ? findValor(item, data.formato)
                          : findValor(item, data);
                        if (objeto.valor === null) {
                          return <td key={index}>-</td>;
                        } else {
                          let row = null;

                          //Si el valor es boolean sera representado con check
                          if (typeof objeto.valor === "boolean") {
                            row = (
                              <input
                                type="checkbox"
                                checked={objeto.valor}
                                disabled={true}
                              />
                            );

                            //Si el nombre de la columna es "estado" por el momento representado por badge
                          } else if (objeto.nombreColumn === "estado") {
                            //Son estados a nivel de servicios no de procesos de cambio de estado

                            row =
                              util.columna === null ? (
                                objeto.valor
                              ) : (
                                <Badge
                                  className={`${item.posicion} p-2`}
                                  color={util.columna}
                                  pill
                                >
                                  {objeto.valor}
                                </Badge>
                              );
                          } else {
                            row = objeto.valor;
                          }

                          return (
                            <td className={`${item.posicion}`} key={index}>
                              {typeof row === "number"
                                ? row
                                : (typeof row === "string" &&
                                    row.trim() !== "") ||
                                  typeof row === "object"
                                ? row
                                : "-"}
                            </td>
                          );
                        }
                      })}

                      {actions !== undefined &&
                      actions !== null &&
                      actions.filter((action) => action.tipo === "C").length >
                        0 ? (
                        <td className="d-flex justify-content-center">
                          <Actions
                            //size={"sm"}
                            type={"C"}
                            posicion={"I"}
                            data={data}
                            actions={actions}
                            handleEventActions={handleEventActions}
                          />
                        </td>
                      ) : null}
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </Fragment>
        );
      }}
    </TableConsumer>
  );
};

// const shadow = typeTable !== "check" ? "shadow-lg" : "";
class TableVitas extends Component {
  arrayDisabled = [];

  render() {
    return (
      <TableConsumer>
        {(value) => {
          const {
            title,
            objetcSelect,
            dataReal,
            actions,
            handleEventActions,
            isInternal,
          } = value;

          isChekedTable = Object.keys(objetcSelect).length > 0 ? true : false;
          let rank = "",
            handleSelectRows = "",
            handleSelectRank = "";

          if (isChekedTable) {
            rank = objetcSelect.rank;
            handleSelectRows = objetcSelect.handleSelectRows;
            handleSelectRank = objetcSelect.handleSelectRank;
            this.arrayDisabled.push(
              { prioridad: 0, disabled: rank.isDisabledRank },
              { prioridad: 1, disabled: rank.isDisabledRank }
            );
          }

          const handleActionsSelectRows = (opcion, data) => {
            switch (opcion) {
              case 0:
                handleSelectRows(
                  cantRowsSelect(dataReal) === dataReal.length ? false : true,
                  true,
                  0,
                  "S"
                );
                break;

              case 1:
                handleSelectRank(true);
                break;

              default:
                break;
            }
          };

          return (
            <Fragment>
              {title !== undefined ? (
                <div className="d-lg-flex flex-row justify-content-between mt-2 mb-2">
                  {isInternal === undefined || !isInternal ? (
                    <h2 className="mt-0">{title}</h2>
                  ) : (
                    <h3 className="mt-0">{title}</h3>
                  )}

                  {/* Acciones a nivel de page de la table */}
                </div>
              ) : null}

              <div className="row">
                <div className="col-12 d-flex justify-content-between">
                  <ButtonGroup
                  //size={isInternal === undefined || !isInternal ? null : "sm"}
                  >
                    <Actions
                      type={"P"}
                      actions={actions}
                      handleEventActions={handleEventActions}
                    />
                  </ButtonGroup>

                  {isChekedTable ? (
                    <ButtonGroup>
                      <Actions
                        type={"P"}
                        posicion={"T"}
                        arrayDisabled={this.arrayDisabled}
                        actions={Utils.getPermisoSeccion(actions, "0", "T")}
                        handleEventActions={handleActionsSelectRows}
                      />
                    </ButtonGroup>
                  ) : null}
                </div>
                <div className="col-12">
                  <Table hover responsive style={{ cursor: "pointer" }}>
                    <Head />
                    <Body />
                  </Table>
                </div>
              </div>
            </Fragment>
          );
        }}
      </TableConsumer>
    );
  }
}

export default TableVitas;
