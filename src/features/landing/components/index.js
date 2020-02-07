import styled from "styled-components";
import { Box, Chip } from '@material-ui/core';

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
    margin-left: ${props => props.left || '1rem' };    
    background: ${props => props.background} !important;
`;

const TagBox = styled(Box)`
    margin: 0.5rem 0;
`;

export {
    Tag,
    TagBox,
    Container
};
