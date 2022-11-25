import React from "react";
import SingleBook from "./SingleBook";
import { Col, Row, Container, Form } from "react-bootstrap";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Find it!"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {this.props.book
            .filter((b) => b.title.includes(this.state.searchQuery))
            .map((b) => (
              <Col xs={3} className="mb-3">
                <SingleBook book={b} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
