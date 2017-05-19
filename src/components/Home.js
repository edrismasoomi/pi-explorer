import React from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'

import LedgerTable from './LedgerTable'
import TransactionTable from './TransactionTable'

class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col md={6}>
                        <Panel header="Ledgers" bsStyle="warning">
                            <LedgerTable/>
                        </Panel>
                    </Col>
                    <Col md={6}>
                        <Panel header="Transactions" bsStyle="warning">
                            <TransactionTable/>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Home
