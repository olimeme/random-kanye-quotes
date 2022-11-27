import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import { useQuery } from "react-query";
import axios from "axios";
import useInterval from "../../hooks/useInterval";

const MainPage = () => {
  const { data, isLoading, isSuccess, error } = useQuery(
    ["kanyeQuote"],
    async () =>
      await axios
        .get("https://api.kanye.rest/")
        .then((data) => data.data.quote),
    {
      refetchInterval: 5000,
    }
  );

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  if (error)
    return (
      <Alert key={"danger"} variant={"danger"}>
        Error has occured!
      </Alert>
    );

  return (
    <>
      <Container>
        <h2 className="header bold mb-4 mt-4 text-center">
          Random Kanye Quotes
        </h2>
        <Card body>
          <blockquote className="blockquote">
            <h1 className="p-3 text-center">
              {isSuccess ? data : "Loading..."}
            </h1>
            <footer className="blockquote-footer text-center">
              Kanye <cite title="">'Ye'</cite> West
            </footer>
          </blockquote>
        </Card>
      </Container>
    </>
  );
};

export default MainPage;
