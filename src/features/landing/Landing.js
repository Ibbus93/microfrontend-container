import React from 'react';
import styled from 'styled-components';
import { Layout } from '../../shared';

const Container = styled.div`
    padding: 0 24px !important;
`;

const Landing = () => (
    <Layout>
        <Container>
            <h1>Pine Canyon Bank</h1>
        </Container>
    </Layout>
);

export default Landing;
