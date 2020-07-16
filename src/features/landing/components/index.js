import React from 'react';
import styled from "styled-components";
import { Box, Chip } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const Container = styled.div`
    margin: 24px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: white;
    height: 100%;
    border-radius: 10px;
`;

const Tag = styled(Chip)`
    font-weight: bold;
    color: ${props => props.textcolor} !important;
    margin-left: ${props => props.left || '1rem'};    
    background: ${props => props.background} !important;
`;

const TagBox = styled(Box)`
    margin: 0.5rem 0;
`;

const SignInSkeleton = () => (
    <Box
        alignItems="center"
        bgcolor="white"
        borderRadius={5}
        display="flex"
        flexDirection="column"
        height={280}
        padding="2rem"
        width={500}
    >
        <Box width="60%" height={80}><Skeleton animation="wave" variant="text" height="100%" /></Box>
        <Box width="90%" height={75}><Skeleton animation="wave" variant="text" height="100%" /></Box>
        <Box width="90%" height={75}><Skeleton animation="wave" variant="text" height="100%" /></Box>
        <Box width="100%" height={60}><Skeleton animation="wave" variant="text" height="100%" /></Box>
    </Box>
);

export {
    Tag,
    TagBox,
    Container,
    SignInSkeleton
};
