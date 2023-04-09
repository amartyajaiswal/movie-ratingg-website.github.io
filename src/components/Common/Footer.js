import { AppBar, TextField, Toolbar, Typography,styled } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import {Facebook,YouTube,Twitter,Instagram} from '@mui/icons-material';

const StyledToolBar = styled(Box)`
    padding: 0 40% !important;
    height: 10vh;
    justify-content: space-between;
    flex-direction: column;
`

function App() {

return (
<>

    <StyledToolBar>
        <Box style={{color:'var(--ipt-on-baseAlt-textSecondary-color,rgba(255,255,255,0.7))' , fontSize:'0.75rem', marginTop:'9vh', textAlign:'center'}}>
        © 1990-2023 by IMDb.com, Inc.
        </Box>
    </StyledToolBar>

</>
);
}

export default App;