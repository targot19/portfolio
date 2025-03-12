import React from "react";
import styled from "styled-components";
import PageContainer from "./PageContainer";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <PageContainer>  /* skal denne med? */
            <OuterContainer>
                <footer>
                    <p>
                        <small>All Rights Reserved © {year} Tania Argot</small>
                    </p>
                </footer>
            </OuterContainer>
        </PageContainer>
    );
};

export default Footer;

const OuterContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
  background-color:rgb(74, 44, 44);
`;