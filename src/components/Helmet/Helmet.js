import React from "react";
import { Helmet } from "react-helmet";


export default function HelmetMetaData(props) {


  let currentUrl = "http://www.planetaverde.edu.ni" + props.location.pathname;
  let quote = props.quote !== undefined ? props.quote : "";
  let title =
    props.title !== undefined ? props.title : "Centro Educativo Planeta Verde";
  let image =
    props.image !== undefined
      ? props.image
      : "http://www.planetaverde.edu.ni/logo_colegio.jpg";
  let description =
    props.description !== undefined
      ? props.description
      : "El Centro Educativo Planeta Verde ha sido creado para entregar a la sociedad individuos con: alto nivel académico, pensamiento crítico, espíritu emprendedor y dominando el idioma Inglés. Inculcando una conciencia ecológica, mediante proyectos ambientales que permitan una participación activa y dinámica de todos los miembros de la comunidad educativa. Practicando como eje transversal valores éticos y morales en sus educandos y educadores. ";
  let hashtag = props.hashtag !== undefined ? props.hashtag : "#cepv";

  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta property="type" content="website" />
      <meta property="url" content={currentUrl} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/logo_colegio.jpg" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="_token" content="" />
      <meta name="robots" content="noodp" />
      <meta property="title" content={title} />
      <meta property="quote" content={quote} />
      <meta name="description" content={description} />
      <meta property="image" content={image} />
      <meta property="og:locale" content="es_NI" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:quote" content={quote} />
      <meta property="og:hashtag" content={hashtag} />
      <meta property="og:image" content={image} />
      <meta content="image/*" property="og:image:type" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Centro Educativo Planeta Verde" />
      <meta property="og:description" content={description} />{" "}
    </Helmet>
  );
}
