import styled from 'styled-components';
import { AppBar, Button } from '@material-ui/core';

const StyledHeader = styled(AppBar)`
    background: #236477 !important;
    color: white !important;
`;

const LogoButton = styled(Button)`
    background: green !important;
    color: white !important;
`;

const NavbarButton = styled(Button)`
    color: white !important;
`;

export {
    LogoButton,
    NavbarButton,
    StyledHeader
};
