import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

//Container
import WorkoutTableContainer from "../containers/WorkoutTableContainer";

const HomePage = props => {
  return (
    <div>
      <h1>Daily Summary</h1>
      <Container fluid={true} className="d-flex justify-content-center">
        <Row>
          <Col lg={7}>
            <Card>
              <CardBody className="font-weight-bold">
                <CardTitle>GZCL</CardTitle>
              </CardBody>
              <CardBody>
                <WorkoutTableContainer />
              </CardBody>
            </Card>
          </Col>
          <Col lg={4}>
            <Row>
              <Card>
                <CardBody className="font-weight-bold">
                  <CardTitle>Food</CardTitle>
                </CardBody>
                <CardBody>
                  <CardText>
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data
                  </CardText>
                </CardBody>
              </Card>
            </Row>
            <Row>
              <Card>
                <CardBody className="font-weight-bold">
                  <CardTitle>Wellness</CardTitle>
                </CardBody>
                <CardBody>
                  <CardText>
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data Data Data Data Data Data Data Data Data Data Data
                    Data Data
                  </CardText>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
