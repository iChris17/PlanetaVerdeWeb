import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
class Paginations extends Component {
  handleClickButtons = (event) => {
    let objPaginador = { ...this.props.paginador };
    let listid = Number(event.target.id);
    objPaginador.paginaActual = listid;
    this.setPrevAndNextBtnClass(objPaginador, false);
  };

  setPrevAndNextBtnClass = (objPaginador, estado) => {
    const { data, paginador } = this.props;

    let { paginaActual, cantidadFilaPagina } = paginador;
    let peticionActive = false;

    let totalPage = Math.ceil(data.length / cantidadFilaPagina);
    let totalRegistros = paginaActual * cantidadFilaPagina;

    if (
      (totalPage === objPaginador.paginaActual ||
        (totalRegistros === data.length && estado)) &&
      totalPage >= 1
    ) {
      /*
        Si cant es menor o igual que la cantidad de datos se sigue haciendo peticion 
        al nivel de API
      */

      if (objPaginador.cant <= data.length) {
        peticionActive = true;
        // objPaginador.ini = 0;
        objPaginador.cant = objPaginador.cant + objPaginador.cantFija;
        objPaginador.isPrevBtnActive = "";
      } else if (objPaginador.paginaActual === 1 && totalPage > 1) {
        objPaginador.isNextBtnActive = "";
        objPaginador.isPrevBtnActive = "disabled";
      } else if (totalPage > 1) {
        objPaginador.isNextBtnActive = "";
        objPaginador.isPrevBtnActive = "";
      }
    }

    this.props.reloadData(objPaginador, peticionActive);
  };
  // <<
  btnLastClick = () => {
    let objPaginador = { ...this.props.paginador };
    let { data } = this.props;

    //Si la cant es mayor a la cantidad de datos se baja un nivel para poder interartuar con la peticiones

    if (objPaginador.cant > data.length) {
      objPaginador.cant = objPaginador.cant - objPaginador.cantFija;
    }

    const {
      cantidadBtnPaginador,
      pageBound,
      limitePagina,
    } = this.props.paginador;

    objPaginador.paginaActual = cantidadBtnPaginador - pageBound * 2 + 1;
    objPaginador.cantidadBtnPaginador = cantidadBtnPaginador - pageBound;
    objPaginador.limitePagina = limitePagina - pageBound;

    this.setPrevAndNextBtnClass(objPaginador, false);
  };
  // >>
  btnFirstClick = () => {
    let objPaginador = { ...this.props.paginador };

    const {
      cantidadBtnPaginador,
      pageBound,
      limitePagina,
    } = this.props.paginador;

    objPaginador.paginaActual = cantidadBtnPaginador + 1;
    objPaginador.cantidadBtnPaginador = cantidadBtnPaginador + pageBound;
    objPaginador.limitePagina = limitePagina + pageBound;

    this.setPrevAndNextBtnClass(objPaginador, false);
  };

  // <
  btnPrevClick = () => {
    let objPaginador = { ...this.props.paginador };
    let { data } = this.props;
    let {
      paginaActual,
      pageBound,
      cantidadBtnPaginador,
      limitePagina,
    } = this.props.paginador;

    objPaginador.paginaActual = paginaActual - 1;

    //Si la cant es mayor a la cantidad de datos se baja un nivel para poder interartuar con la peticiones
    if (objPaginador.cant > data.length) {
      objPaginador.cant = objPaginador.cant - objPaginador.cantFija;
    }

    if ((paginaActual - 1) % pageBound === 0) {
      objPaginador.cantidadBtnPaginador = cantidadBtnPaginador - pageBound;
      objPaginador.limitePagina = limitePagina - pageBound;
    }

    this.setPrevAndNextBtnClass(objPaginador, false);
  };

  // >

  btnNextClick = () => {
    let objPaginador = { ...this.props.paginador };
    let { data } = this.props;
    let {
      paginaActual,
      pageBound,
      cantidadBtnPaginador,
      cantidadFilaPagina,
      limitePagina,
    } = this.props.paginador;

    //Si mi cant es menor o igual a la cantidad de data, no vamos a la siguiente pagina con la
    // nocion de pedir mas datos

    const indexOfLastTodo = paginaActual * cantidadFilaPagina;
    const indexOfFirstTodo = indexOfLastTodo - cantidadFilaPagina;
    let newData = data.slice(indexOfFirstTodo, indexOfLastTodo);

    let parImpar = cantidadFilaPagina % 2;

    if (newData.length % 2 === parImpar && indexOfLastTodo < data.length) {
      objPaginador.paginaActual = paginaActual + 1;
    }

    if (objPaginador.paginaActual > cantidadBtnPaginador) {
      objPaginador.cantidadBtnPaginador = cantidadBtnPaginador + pageBound;
      objPaginador.limitePagina = limitePagina + pageBound;
    }

    this.setPrevAndNextBtnClass(objPaginador, true);
  };
  render() {
    const { data, paginador } = this.props;

    const {
      cantidadBtnPaginador,
      limitePagina,
      isPrevBtnActive,
      isNextBtnActive,
    } = paginador;

    let { paginaActual, cantidadFilaPagina } = this.props.paginador;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / cantidadFilaPagina); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      if (
        (number < cantidadBtnPaginador + 1 && number > limitePagina) ||
        (number === 1 && paginaActual === 1)
      ) {
        let active = number === paginaActual ? true : false;
        return (
          <PaginationItem active={active} key={number} id={number}>
            <PaginationLink id={number} onClick={this.handleClickButtons}>
              {number}
            </PaginationLink>
          </PaginationItem>
        );
      }

      return null;
    });

    let pageFirstBtn = null;
    if (pageNumbers.length > cantidadBtnPaginador) {
      pageFirstBtn = (
        <PaginationItem onClick={this.btnFirstClick}>
          <PaginationLink last />
        </PaginationItem>
      );
    }
    let pageLastBtn = null;
    if (limitePagina >= 1) {
      pageLastBtn = (
        <PaginationItem onClick={this.btnLastClick}>
          <PaginationLink first />
        </PaginationItem>
      );
    }
    let renderPrevBtn = null;
    if (isPrevBtnActive === "disabled") {
      renderPrevBtn = (
        <PaginationItem className={isPrevBtnActive}>
          <PaginationLink id="btnPrev" previous />
        </PaginationItem>
      );
    } else {
      renderPrevBtn = (
        <PaginationItem className={isPrevBtnActive} onClick={this.btnPrevClick}>
          <PaginationLink id="btnPrev" previous />
        </PaginationItem>
      );
    }
    let renderNextBtn = null;
    if (isNextBtnActive === "disabled") {
      renderNextBtn = (
        <PaginationItem className={isNextBtnActive}>
          <PaginationLink id="btnNext" next />
        </PaginationItem>
      );
    } else {
      renderNextBtn = (
        <PaginationItem className={isNextBtnActive} onClick={this.btnNextClick}>
          <PaginationLink id="btnNext" next />
        </PaginationItem>
      );
    }

    return (
      <div className="col-12 mt-2">
        <div className="d-sm-flex text-center justify-content-between">
          <span>{`Mostrando desde ${
            paginaActual === 1
              ? 1
              : paginaActual * cantidadFilaPagina - cantidadFilaPagina + 1
          } hasta ${
            paginaActual * cantidadFilaPagina > data.length
              ? data.length
              : paginaActual * cantidadFilaPagina
          } de ${data.length} registros`}</span>
          <div className="mt-2 d-flex justify-content-center">
            <Pagination>
              {pageLastBtn}
              {renderPrevBtn}
              {renderPageNumbers}
              {renderNextBtn}
              {pageFirstBtn}
            </Pagination>
          </div>
        </div>
      </div>
    );
  }
}

export default Paginations;
