import React, { useContext, useRef } from "react";
import { Button, Col, Container, Form, Navbar } from "react-bootstrap";
import { AuthContext } from "./context/AuthContext";
import { auth } from "./firebaseSetup";

function App() {
  const user = useContext(AuthContext);  //Providerから渡ってきたuser情報

  //入力した値
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  //アカウント作成
  const createAccount = async () => {
    try {
      await auth.createUserWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  //サインイン
  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(
        emailRef.current!.value,
        passwordRef.current!.value
      );
    } catch (error) {
      console.error(error);
    }
  };

  //サインアウト
  const signOut = async () => {
    await auth.signOut();
  };

  return (
    <>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand>Firebase Authentication</Navbar.Brand>
        {user && <Button onClick={signOut}>Sign Out</Button>}
      </Navbar>
      {!user ? (
        <Container style={{ maxWidth: "500px" }} fluid>
          <Form className="mt-4">
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control ref={emailRef} type="email" placeholder="email" />
            </Form.Group>
            <Form.Group controlId="formPassword" style={{marginTop: "30px"}}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                ref={passwordRef}
                type="password"
                placeholder="password"
              />
            </Form.Group>
            <Form style={{marginTop: "30px", display: "flex"}}>
              <Col xs={6}>
                <Button onClick={createAccount} type="button">
                  Sign Up
                </Button>
              </Col>
              <Col xs={6}>
                <Button
                  onClick={signIn}
                  type="button"
                  variant="secondary"
                >
                  Sign In
                </Button>
              </Col>
            </Form>
          </Form>
        </Container>
      ) : (
        <h2 className="mt-4 text-center">Welcome {user.email}</h2>
      )}
    </>
  );
}

export default App;