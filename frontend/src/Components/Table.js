import React from "react";
import styled from "styled-components";




function Table(props) {
    const Table = ({className}) => (
        <table className={className}>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
                {props.clients.map( client => 
                    <tr key={client.id}>
                        <td>{client.name}</td>
                        <td>{client.email}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )

    const StyledTable = styled(Table)`
        background: #343634;
        color: white;
        width: 100%;
        tr {
            border-bottom: 1px solid white;
        }
    `;

    return (
        // These are test components while learning
        // styled-components package.
        <StyledTable></StyledTable>
    );
}

export default Table;