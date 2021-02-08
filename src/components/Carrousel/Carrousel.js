import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  Col,
  Row,
  Label,
} from "reactstrap";

const items = [
  {
    src: require("../../assets/img/Matricula/MatriculasAbiertas.png"),
    altText: "Slide 2",
    caption: "Desde el 16 de Noviembre",
    title: "Año académico 2021",
  },
  {
    src: require("../../assets/img/Matricula/LibrosDigitales.png"),
    altText: "Slide 1",
    caption: "Sin costo para alumnos de 4to a 11vo Grado",
    title: "Sin libros físicos",
  },
];

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [description, setdescription] = useState("");
  const [header, setHeader] = useState("");

  useEffect(() => {
    if (activeIndex === 0) {
      setdescription(
        "Centro Educativo Planeta Verde da inicio a su campaña de Matriculas 2021. Somos un centro educativo fundado en 2020, con enfoque en innovación educativa, medio ambiente y tecnología. Ofrecemos las modalidades de primaria (vespertino) y secundaria (matutino). Nuestro modelo educativo se basa en la innovación dentro y fuera del aula, las prácticas medio ambientales, para aportar a la sociedad ciudadanos comprometidos con la naturaleza; y el uso de las tecnologías, que garantizan las herramientas necesarias para competir en el mundo del futuro. Nuestra oferta académica se basa en la innovación, visítanos y conoce personalmente todos los beneficios que Centro Educativo Planeta Verde te ofrece."
      );
      setHeader("Matriculate Ya!");
    } else {
      setdescription(
        "Centro Educativo Planeta Verde (CEPV) te ofrece el beneficio de cero gastos en libros desde cuarto hasta undécimo grado como parte de innovación educativa. Los libros y otros recursos didácticos están disponibles de forma digital y totalmente gratuita a todos los estudiantes. Se ha habilitado plataforma en línea para acceso a todos los recursos didácticos, los cuales se pueden acceder desde el CEPV o desde casa. ¡Sé diferente, sé Planeta Verde!"
      );
      setHeader("Beneficios Planeta Verde");
    }
  }, [activeIndex]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        style={{ height: "100%" }}
      >
        <img src={item.src} alt={item.altText} width="100%" height="" />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.title}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <Card>
        <Row>
          <Col lg={6}>
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              interval={10000}
            >
              <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
              />
            </Carousel>
          </Col>
          <Col lg={6} className="">
            <Label tag="h3" className=" text-center  title">
              {header}
            </Label>
            <Label className="text-justify mr-4 ml-4">{description}</Label>
            <Label className="text-justify mr-4 ml-4 mb-4">
              <strong>
                Si deseas conocer mas detalles sobre los requisitos y beneficios
                que solo el Centro Educativo Planeta Verde te ofrece{" "}
                <Link to={"matricula"}>CLICKEA AQUI..</Link>
              </strong>
            </Label>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <Label className="text-justify">
            Ante cualquier consulta llámenos al <strong>(505)8778-7321</strong>{" "}
            ó escríbanos al correo <strong>info@planetaverde.edu.ni</strong>
          </Label>
        </Col>
      </Row>
    </>
  );
};

export default Carrousel;
