import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function TopPage({ path, title }) {
  return (
    <Flex className="top-page" justify="space-between">
      <Link to={path}>
        <FontAwesomeIcon
          className="back-arrow"
          size="2xl"
          icon={faArrowLeftLong}
        />
      </Link>
      <Heading className="title-page">{title}</Heading>
      <div> </div>
    </Flex>
  );
}

export default TopPage;
