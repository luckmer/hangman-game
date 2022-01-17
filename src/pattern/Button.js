import { ButtonDesign } from "../components/styles/NotificationBanner.styles";

const Button = ({ children, onClick }) => {
  const buttons = { onClick };

  return <ButtonDesign {...buttons}>{children}</ButtonDesign>;
};

export default Button;
