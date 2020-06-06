export default class Fecha {
  constructor(fecha) {
    this.fecha = fecha;
    this.año = fecha.substring(0, 4);
    this.mes = fecha.substring(5, 7);
    this.dia = fecha.substring(8, 10);
    //console.log(this.año, this.mes, this.dia);
  }

  getMes() {
    switch (this.mes) {
      case "01":
        return "Enero";

      case "02":
        return "Febrero";

      case "03":
        return "Marzo";

      case "04":
        return "Abril";

      case "05":
        return "Mayo";

      case "06":
        return "Junio";

      case "07":
        return "Julio";

      case "08":
        return "Agosto";

      case "09":
        return "Septiembre";

      case "10":
        return "Octubre";

      case "11":
        return "Noviembre";

      case "12":
        return "Diciembre";
      default:
        return "";
    }
  }

  getFecha(){
      return this.dia+" de "+this.getMes()+" del "+this.año
  }


}
