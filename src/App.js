import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Card from "./components/Card";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/GlobalStyles";
import content from "./content";
import { StyledContainer } from "./components/styles/Container_Styled";
const theme = {
  colors: {
    header: " #ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
  smmobile: "425px",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <StyledContainer>
          {content.map((item, id) => (
            <Card key={id} item={item} />
          ))}
        </StyledContainer>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
