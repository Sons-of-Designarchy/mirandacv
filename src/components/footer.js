import React from "react";
import styled, { css } from "styled-components";
import * as Comp from "./layoutComponents";

const Footer = () => (
  <>
    <AboutContainer id="about">
      <Comp.Container>
        <Comp.Row mobile padded>
          <Comp.Column style={{ flex: "1" }} padded>
            <div style={{ marginBottom: "2rem" }}>
              <h5>Sobre mi</h5>
              <p>
                Por el amor a los números y los negocios decidí emprender mi
                camino estudiando la carrera de Contadora Pública, así es como
                también desde los 18 años comencé a trabajar en despachos
                contables y empresas privadas que me han hecho adquirir diversos
                conocimientos, principalmente en temas fiscales y el trato con
                el cliente. Me apasiona la educación continua y poder
                compartirlo a los demás, es por ello que en el 2020 nace un
                proyecto junto con unos compañeros llamado La Hora SAT.
              </p>
            </div>
            <Comp.Row mobile padded>
              <Comp.Column style={{ flex: "1" }} padded>
                <h5>Skills/sistemas</h5>
                <ul>
                  <li>
                    Cálculo y presentación de impuestos definitivos y
                    provisionales de Personas{" "}
                  </li>
                  <li>Físicas y Morales</li>
                  <li>Trato directo con el cliente.</li>
                  <li>Ponente y creadora de cursos educativos.</li>
                  <li>Dominio básico/intermedio del inglés.</li>
                  <li>Contpaq, Nominpaq, DIOT 2019, SIPARE.</li>
                  <li>Microsoft Excel, Word, Power Point.</li>
                  <li>SUA, portal electrónico del SAT, IDSE, SAP.</li>
                </ul>
              </Comp.Column>
              <Comp.Column style={{ flex: "1" }} padded>
                <h5>Experiencia en</h5>
                <ul>
                  <li>
                    Supervisión e implementación procesos administrativos y
                    operativos de inventarios alineados a Manuales de Políticas
                    y Procedimientos.
                  </li>
                  <li>
                    En áreas de importación y comercialización de mercancía.
                  </li>
                  <li>
                    En el ámbito contable/fiscal, en la elaboración del cálculo
                    de impuestos Federales y Estatales, supervisando la
                    implementación adecuada de las Leyes Fiscales en
                    contabilidades de empresas privadas.
                  </li>
                </ul>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
          <Comp.Column style={{ flex: "1" }} padded>
            <div style={{ marginBottom: "2rem" }}>
              <h5>LOGROS</h5>
              <p>
                Co-creadora y ponente en el curso &quot;Quiúbole con el
                SAT&quot; ante estudiantes de la Universidad Anáhuac Mayab
                (2021)
                <br />
                <br />
                Co-creadora y ponente en el curso &quot;Hacks para
                freelancers&quot; edición 1, 2, 3 y 4 (2021).
                <br />
                <br />
                Co-creadora y ponente en el curso &quot;Pasos básicos para
                sobrevivir al SATanás&quot; edición 1, 2 y 3 (2021).
                <br />
                <br />
                Creadora y ponente en el curso &quot;Quiúbole con el SAT vol.
                2&quot; ante estudiantes de la Facultad de Medicina de Nuevo
                León (2020).
                <br />
                <br />
                Creadora y ponente en el curso &quot;Quiúbole con el SAT&quot;
                ante el grupo estudiantil ROTARACT de la Facultad de Medicina de
                Nuevo León (2020).
                <br />
                <br />
                Grado sobresaliente en examen de titulación de EGEL (2019).
                <br />
                <br />
                Presidenta del Sector Estudiantil de Contadores Públicos de
                Colima del IMCP (2019).
                <br />
                <br />
                Ponente en el curso de Ley Federal de los Derechos del
                Contribuyente y Acuerdos Conclusivos (2018) ante la Comisión
                Fiscal del IMCP.
                <br />
                <br />
                Tercer lugar en el Primer Maratón de Ética de Colima (2018) del
                IMCP.
              </p>
            </div>
            <Comp.Row mobile padded>
              <Comp.Column style={{ flex: "2" }} padded>
                <h5>experiencia laboral</h5>
                <p>
                  Asistente directivo de operaciones
                  <br />
                  Hechos con Mucho Gusto, S.A. de C.V. <br />
                  Junio 2020 - Abril 2021
                  <br />
                  <br />
                  Auditor Jr
                  <br />
                  Administración Corporativa de Colima, S.C.
                  <br />
                  Julio 2019 - Octubre 2019
                  <br />
                  <br />
                  Contador Sr
                  <br />
                  Ceceña, Brambila, Camarena y Cía, S.C., Moore Stephens
                  <br />
                  Junio 2019 - Julio 2019
                  <br />
                  <br />
                  Contralor jr
                  <br />
                  Inward Consultoría Fiscal y Patrimonial, S.C.
                  <br /> Junio 2016 - Mayo 2019
                  <br />
                  <br />
                </p>
              </Comp.Column>
              <Comp.Column style={{ flex: "2" }} padded>
                <h5>FORMACIÓN PROFESIONAL</h5>
                <p>
                  Contadora Pública | 2015 - 2019
                  <br />
                  Facultad de Contabilidad y Administración de Colima por la
                  Universidad de Colima.
                  <br />
                  <br />
                  Diplomado en &quot;Derecho Fiscal&quot; | 2021
                  <br />
                  Facultad de Derecho de Colima por la Universidad de Colima.
                  <br />
                  <br />
                  Diplomado en &quot;Implementación de políticas públicas para
                  el combate al lavado de dinero&quot; | 2020
                  <br />
                  Escuela de Gobierno y Transformación Pública por el
                  Tecnológico de Monterrey.
                  <br />
                  <br />
                  Seminario en &quot;Análisis Estratégico de Datos&quot; | 2020
                  <br />
                  Escuela de Gobierno y Transformación Pública por el
                  Tecnológico de Monterrey.
                </p>
              </Comp.Column>
            </Comp.Row>
          </Comp.Column>
        </Comp.Row>
      </Comp.Container>
    </AboutContainer>

    <Contacto>
      <Comp.Container>
        <h1>Contacto</h1>
        Celular y Whatsapp:
        <h4>
          <a href="tel:5213121114793">+52 1 312 111 4793</a>
        </h4>
        Correo electrónico:
        <h4>
          <a href="mailto:mirandajgb@gmail.com">mirandajgb@gmail.com</a>
        </h4>
        <h4>
          <a href="https://www.linkedin.com/in/alejandra-anzures-arciniega-545a99161/">
            Linkedin
          </a>
        </h4>
        <div style={{ marginTop: "3rem" }}>
          © {new Date().getFullYear()} — mirandajannel.com
        </div>
      </Comp.Container>
    </Contacto>
  </>
);

const sharedContainer = css`
  padding: 6rem 0;
`;

const AboutContainer = styled.div`
  ${sharedContainer}
  background: #C596F3;
  color: #000000;
  color: #fff;
  margin-top: 6rem;
  font-size: 14px;
  h5,
  p,
  li {
    color: #000000;
  }
  h5 {
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

const Contacto = styled.div`
  width: 100%;
  background: #000;
  color: #c596f3;
  padding: 6rem 0;
  text-align: center;
`;

export default Footer;
