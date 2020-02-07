import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { Layout } from '../../shared';
import { Tag, TagBox, Container } from './components';

const Landing = () => (
    <Layout>
        <Container id="landing-container">
            <Typography variant="h4">A React microfrontend approach based on Redux and Web Components</Typography>
            <TagBox>
                <Tag label="Microfrontends" background={"orange"} textcolor="white" left="0" />
                <Tag label="React" background={"#2B2C2E"} textcolor="#61FBDB" />
                <Tag label="Redux" background={"#774ABB"} textcolor="white" />
                <Tag label="Redux Saga" background={"#e0e0e0"} textcolor="green" />
                <Tag label="Sign In" background={"lightblue"} textcolor="black" />
                <Tag label="Authorization" background={"#197720"} textcolor="white" />
            </TagBox>
            <Typography variant="h5">Goals and motivations</Typography>
            <Typography variant="body1">
                This project born with the purpose of testing and working with microfrontends.
                The full description of the project could be find in the <a href="https://github.com/Ibbus93/microfrontend-container" rel="noopener noreferrer" target="_blank">README.md</a> in the
                Github project of the container.
            </Typography>
            <Typography variant="h5">How it works</Typography>
            <Box>
                This project consists of three different frontends:
                <ul>
                    <li>A container project (the one from you are reading right now)</li>
                    <li><b>Micro-login</b>: a sign in page (<a href="https://github.com/Ibbus93/micro-login" rel="noopener noreferrer" target="_blank">Github</a>)</li>
                    <li><b>Micro-bank-account</b>: a bank account page (<a href="https://github.com/Ibbus93/micro-bank-account" rel="noopener noreferrer" target="_blank">Github</a>)</li>
                </ul>
                The container loads at runtime the project that needs, depending on the URl provided:
                <ul>
                    <li>It loads <b>micro-login</b> in the <code>/sign-in</code> url;</li>
                    <li>It loads <b>micro-bank-account</b> in the <code>/account</code> url</li>
                </ul>
                The login is demanded to make the POST request to validate the user: it receives from the container a callback function
                 used to communicate the JWT token and the UUID received from the login. This two data are passed to the account page in order to work: without
                 those data it will be performed a redirect to <code>/sign-in</code>.
            </Box>
            <Typography variant="h5">Credentials to login</Typography>
            <Typography variant="body1">
                The API used are part of a <b>Postman Mock Collection</b>, hence every username and password combination will be correct.
            </Typography>
        </Container>
    </Layout>
);

export default Landing;
