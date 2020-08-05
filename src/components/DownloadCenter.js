import React from 'react';
import { Button, Container } from 'react-bootstrap';

import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from "react-component-export-image";

class DownloadCenter extends React.Component {
    render() {
        const buttonStyle = {
            textAlign: "center",
            marginTop: 15
        };
        return (
            <>
            <Container style={buttonStyle}>
                <Button onClick={() => exportComponentAsJPEG(this.props.memeRef)}>
                    Export As JPEG
                </Button>
                <text> </text>
                <Button onClick={() => exportComponentAsPDF(this.props.memeRef)}>
                    Export As PDF
                </Button>
                <text> </text>
                <Button onClick={() => exportComponentAsPNG(this.props.memeRef)}>
                    Export As PNG
                </Button>
            </Container>
            </>
        );
    }
}

export default DownloadCenter;