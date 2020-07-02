import React from "react";
import { Button } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileInput from "../FileInput/FileInput";

import { Utils } from "../../utils/index";

const Actions = ({
  size,
  type,
  data,
  handleEventActions,
  actions,
  posicion,
  arrayDisabled,
  optionsActions,
}) => {
  /** Props size no es mandado por defecto se pondra vacio */
  const sizeProps = size ? size : "";

  //Se validan por si vienen nulas o no se mandan como props
  if (actions === undefined || actions === null) return null;

  return (
    <>
      {actions.map((action, index) => {
        const objeto = action;
        if (arrayDisabled !== undefined) {
          arrayDisabled.map((array) => {
            if (array.prioridad === Number(objeto.prioridad)) {
              objeto.disabled = array.disabled;
            }
            return objeto;
          });
        }

        let nombre = "";
        nombre =
          objeto.visibleNombre || objeto.visibleNombre === undefined
            ? objeto.nombre
            : "";

        //console.log(objeto);
        /**Verificamos el tipo de accion(permiso) si es de columna a nivel de table o a nivel de page */
        if (type === objeto.tipo && posicion === objeto.posicion) {
          //console.log(objeto);

          let componente;
          /** */
          if (
            objeto.tipo_button === undefined ||
            optionsActions === undefined
          ) {
            let disabled = objeto.disabled;

            componente = (
              <ButtonsActions
                key={index}
                objeto={objeto}
                data={data}
                sizeProps={sizeProps}
                handleEventActions={handleEventActions}
                disabled={disabled}
              >
                <FontAwesomeIcon
                  icon={Utils.getIcon(objeto.icon)}
                  className={"align-middle mr-1"}
                />
                {nombre}
              </ButtonsActions>
            );
          } else if (objeto.tipo_button === "file") {
            const {
              idx /**Posicion de la accion mediante el map de la data no por accion */,
              stateFiles,
              permitidos,
              handleActionIndividual,
            } = optionsActions;

            /**Validar bien cuando la data venga nula */
            //if (data === undefined || data === null) return null;
            if (stateFiles === undefined || stateFiles === null) return null;
            let disabled = objeto.disabled;

            componente = (
              <ButtonsActions
                key={index}
                objeto={objeto}
                data={data}
                sizeProps={sizeProps}
                handleEventActions={handleEventActions}
                disabled={disabled}
              >
                <FileInput
                  index={idx}
                  nombre={nombre}
                  icon={objeto.icon}
                  onChangeFile={handleActionIndividual}
                  permitidos={permitidos}
                  disabled={disabled}
                  stateFiles={stateFiles}
                />
              </ButtonsActions>
            );
          }

          /*Verificamos que si el componente lleva cita para saber que hace el boton'*/

          componente =
            objeto.cita === undefined ? (
              componente
            ) : (
              <cite title={objeto.cita} key={index}>
                {componente}
              </cite>
            );
          return componente;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default Actions;

const ButtonsActions = ({
  objeto,
  data,
  sizeProps,
  handleEventActions,
  disabled,
  children,
}) => {
  return (
    <Button
      color={`${objeto.color} mr-1 mb-1`}
      onClick={() => {
        handleEventActions(Number(objeto.prioridad), data);
      }}
      size={sizeProps}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
