import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { FormGroup } from "reactstrap";
import { Utils } from "../../utils";
import Badge from "reactstrap/es/Badge";

const FileInput = ({
  index,
  nombre,
  icon,
  onChangeFile,
  stateFiles,
  data,
  disabled,
  permitidos,
}) => {
  const fileRef = useRef();
  const [fileOptions, setFileOptions] = useState({
    file: "",
    name: stateFiles.name,
    value: stateFiles.file,
  });

  useEffect(() => {
    if (stateFiles.file === null || stateFiles.file === undefined) {
      setFileOptions({
        file: "",
        name: "",
        value: null,
      });
    }
  }, [stateFiles]);

  /**handleChangeFile método que sirve para extraer el nombre del archivo y el valor para guardarlo
   *  a nivel del servidor
   */
  const handleChangeFile = (e) => {
    e.preventDefault();
    let file = e.target.value;

    let fileName = file.split("\\");
    // console.log(fileRef.current.files);
    // console.log(e.target.files);

    let fileOptionsData = {
      file: file,
      name: fileName[fileName.length - 1],
      value: e.target.files[0],
    };
    onChangeFile(fileOptionsData, index, data);
    setFileOptions(fileOptionsData);
  };
  /**handleClickFile: Método para abrir el directorio del input:file */
  const handleClickFile = () => {
    fileRef.current.click();
  };

  return (
    <FormGroup className="m-0" onClick={handleClickFile}>
      <FontAwesomeIcon icon={Utils.getIcon(icon)} />
      {fileOptions.name.length === 0 ? (
        nombre.trim() !== "" || nombre !== null ? (
          <span className="ml-1">{nombre}</span>
        ) : null
      ) : (
        <Badge className="ml-1" color="warning">
          1
        </Badge>
      )}

      <input
        type="file"
        name="fileSelected"
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleChangeFile}
        accept={permitidos}
        disabled={disabled}
        value={fileOptions.file}
      />
      {/* <span className="ml-2">{nameRecorte}</span> */}
    </FormGroup>
  );
};

export default FileInput;
