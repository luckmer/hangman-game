import styled from "styled-components";

export const SectionH1 = styled.h1`
  font-family: "Roboto", sans-serif;
  padding: 5vmin;
`;

export const ButtonDesign = styled.button`
  font-family: "Roboto", sans-serif;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  padding: 10px 25px;
  margin: 10px;
  border: 2px solid red;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 1s ease;
  position: relative;
  display: inline-block;
  text-align: center;
  position: relative;
  color: black;

  z-index: 2;
  line-height: 50px;
  padding: 0;
  &&:hover {
    border: none;
  }
  &&:before,
  &&:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border: 2px solid;
    border-radius: 5px;
    z-index: -1;
    transition: all 0.4s ease;
  }
  &&:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: red;
    border-left-color: pink;
    border-radius: 5px;
  }
  &&:after {
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: pink;
    border-right-color: red;
    border-radius: 5px;
  }
  &&:hover:before,
  &&:hover:after {
    border-color: pink;
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Glue = styled.section`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export const Section = styled(Glue)`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GreySectionBackground = styled(Glue)`
  background-color: grey;
  opacity: 0.5;
  z-index: -1;
`;
