import { useContext } from "react";
import { Alert, Button, Col, Form, Image, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import login from "../assets/login1.jpg";
import { Link } from 'react-router-dom';
import NavBar from "../components/BarNav";
import BarNav from "../components/BarNav";
const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);

  return (
    <>
    <BarNav />
      <Form onSubmit={loginUser} >
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "100px"
          }}
        >
          <Col xs={12} md={6} style={{ padding:"5em"}}>
            <Stack gap={3} style={{ textAlign: "center" }}>
              <h2>Se connecter</h2>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, email: e.target.value })
                }
                value={loginInfo.email}
              />
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                onChange={(e) =>
                  updateLoginInfo({
                    ...loginInfo,
                    password: e.target.value,
                  })
                }
                value={loginInfo.password}
              />
              <Button variant="success" type="submit" disabled={isLoginLoading}>
                {isLoginLoading ? "En cours..." : "Connexion"}
              </Button>
              <p>Pas de compte ? <Link to="/register">S'inscrire</Link></p>

              {loginError?.error && (
                <Alert variant="danger" style={{ marginTop: "20px" }}>
                  <b>{`Erreur status code: ${loginError?.status}`}</b>
                  <p>{loginError?.message}</p>
                </Alert>
              )}
            </Stack>
          </Col>

          <Col xs={12} md={6}>
            <Stack gap={3} style={{ textAlign: "center" }}>
              <Image
                src={login}  // Remplacez par l'URL de votre image rectangulaire
                alt="image"
                rounded
                style={{ width: "80%", height: "auto" }}
              />
            </Stack>
          </Col>

        </Row>
      </Form>
    </>
  );
};

export default Login;
