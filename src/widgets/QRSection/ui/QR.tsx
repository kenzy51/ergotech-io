import { theme } from '@/styles/theme';
import React from 'react';
import QRCode from 'react-qr-code';
import { styled } from 'styled-components';

const QR = () => {
    return (
        <Wrapper>
            <Container>
                <QRCode
                    size={156}
                    style={{ height: "auto", maxWidth: "30%", width: "100%" }}
                    value={'https://t.me/Aibek87    '}
                    viewBox={`0 0 256 256`}
                />
                <h1>Our app is excited to be tested </h1>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
     color: white;
     display: flex;
     justify-content:space-between;
  background: #212b33;
  padding: 100px 0;
  height: auto;
  font-family: 'Plus Jakarta Sans', sans-serif;
  ${theme.mqMax('lg')} {
    height: auto;
    padding-bottom: 30px;
  }

`
const Container = styled.div`
  display: flex;
  gap: 3rem;
  max-width: ${theme.containers.main};
  margin: 0 auto;
  width: 100%;
  ${theme.mqMax('lg')} {
    padding-left: 35px;
    padding-right: 35px;
    flex-direction: column-reverse;
  }
`;

export default QR;