import React from "react";
import * as Comp from "./layoutComponents";
import AlejaFoto from "../images/foto.jpg";
import styled from "styled-components";
import { theme } from "./theme";

const Hero = () => (
  <HeroContainer>
    <HeroContent>
      <HeroRow mobile padded>
        <div style={{ flex: 1, marginRight: "1rem" }}>
          <h1 className="reset-m">
            ¡Hola! Soy <br />
            <i>Miranda Garcia</i>
          </h1>
        </div>
        <div>
          <img src={AlejaFoto} width="400px" />
        </div>
      </HeroRow>
      <Comp.Row mobile padded>
        <p style={{ padding: "1rem", flex: "1" }}>
          Soy Contadora Pública egresa de la Universidad de Colima, actualmente
          desempeñándome como Contadora Independiente llevando Contabilidades de
          empresas privadas.
        </p>
        <h3 style={{ padding: "1rem", flex: "1" }}>
          Co-founder y Asesora Fiscal de La Hora SAT.
        </h3>
      </Comp.Row>
    </HeroContent>
  </HeroContainer>
);

export default Hero;

export const HeroContainer = styled.div`
  padding: 2rem 0 4rem;

  @media ${theme.breakpoint.upFromMobile} {
    max-width: 1000px;
    margin: 0 auto;
  }
`;

const HeroRow = styled(Comp.Row)`
  align-items: center;
  margin-bottom: 50px;
`;

const HeroContent = styled.div``;
