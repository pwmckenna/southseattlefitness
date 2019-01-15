import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/images/studio'
import SEO from '../components/seo'
import pattern from '../images/texture.png';
import background from '../images/background.jpeg';
import Programs from '../components/programs';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme();

const COLORS = {
  WHITE: '#fff',
  TEAL: '#3fcfd5',
  GREY: '#a1a3a5',
  DARK_GREY: 'rgb(97, 99, 101)'
}

const Button = ({ children, style, ...props }) => (
  <a href="#" style={{
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '14px 42px',
    borderRadius: '2px 30px',
    letterSpacing: '.05em',
    fontSize: 14,
    lineHeight: 1.6,
    fontStyle: 'normal',
    fontWeight: 700,
    ...style
  }} {...props}>
    {children}
  </a>
);

const TealButton = ({ children, ...props }) => (
  <Button style={{
    color: COLORS.WHITE,
    backgroundColor: COLORS.TEAL
  }} {...props}>
    {children}
  </Button>
);

const TransparentButton = ({ children }) => (
  <Button style={{
    color: COLORS.WHITE,
    border: `2px solid ${COLORS.WHITE}`
  }}>
    {children}
  </Button>
);

const TexturedSection = ({ children, style }) => (
  <div style={{
    backgroundColor: COLORS.TEAL,
    backgroundImage: `url(${pattern})`,
    backgroundPosition: '50% 0',
    backgroundAttachment: 'scroll',
    backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    borderTop: `1px solid ${COLORS.GREY}`,
    borderBottom: `1px solid ${COLORS.GREY}`,
    ...style
  }}>
    {children}
  </div>
);

const Boxes = ({ children }) => (
  <div style={{
    maxWidth: 1480,
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, 1fr)',
    gridColumnGap: 10,
    justifyItems: 'center',
    alignItems: 'center',
    height: 480
  }}>
    {children}
  </div>
);

const Box = ({ children, href }) => (
  <div style={{
    position: 'relative',
    gridRow: '1',
    border: `3px solid ${COLORS.GREY}`,
    width: '15em',
    height: '15em',
  }}>
    <Image style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    }} />

    <a
      href={href}
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        textDecoration: 'none',
        color: COLORS.WHITE,
        fontSize: '2em'
      }}
    >
      {children}
    </a>
  </div>
);

const usePaperForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://paperform.co/__embed';
    document.body.appendChild(script);
    setTimeout(() => window.Paperform.popup('you1pfhj'), 1000);
  }, []);
};

const linkStyle = { textDecoration: 'none', color: COLORS.DARK_GREY };

const IndexPage = () => {
  usePaperForm();
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="SouthSeattleFitness" keywords={[`seattle`, `fitness`, `studio`]} />
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          height: 460,
          display: 'grid',
          alignItems: 'center',
          justifyItems: 'center'
        }}>
          <Image style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: -1,
          }} />
          <TealButton href="https://squareup.com/appointments/book/5Q4RPH7WJTFEC/south-seattle-fitness-seattle-wa">
            View Studio Calendar
        </TealButton>
        </div>
        <TexturedSection style={{ height: 100 }} />
        <Programs />
        <TexturedSection style={{
          margin: `0em auto`,
          padding: '2em 5em',
          fontWeight: 'bold',
          color: COLORS.DARK_GREY

        }}>
          <h3>Contact South Seattle Fitness</h3>
          <div>
            <a style={linkStyle} href="southseattlefitness@gmail.com">southseattlefitness@gmail.com</a>
          </div>
          <div><a style={linkStyle} href="tel:7143817969">(714) 381-7969</a> | CAITLIN IBARRA</div>
          <div><a style={linkStyle} href="tel:2069108049">(206) 910-8049</a> | RACHEL GARCIA</div>
        </TexturedSection>
      </Layout>
    </ThemeProvider>
  );
};

export default IndexPage
