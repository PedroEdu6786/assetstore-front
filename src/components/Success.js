import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import jsPDF from "jspdf";

export class Success extends Component {
    
    constructor(props){
        super(props);
        const {
            name,
            lastName,
        } = this.props.userValues;
        this.name = name;
        this.lastName = lastName;
    }
    pdfGenerator = () => {
        var doc = new jsPDF('p','pt');
        var d = new Date()
        doc.text(20,20, "\tTu pago para habilitar la publicación fue un exito\n" + 
            `Fecha de compra: ${d.getDate()}-${d.getMonth()}-${d.getFullYear()}\n` +
            `Nombre del comprador: ${this.name} ${this.lastName}\n` +
            `Precio: $20.00\n`);
        doc.save("Voucher.pdf")
      }
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" showMenuIconButton={false} />
                    <h1>Thank you for submission</h1>
                    <p>The charges will be reflected immediately</p>
                    <RaisedButton
                        label="Download voucher"
                        primary={true}
                        style={styles.button}
                        onClick={this.pdfGenerator}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}
const styles = {
    button: {
        margin: 15,
    },
};

export default Success;
