import React from "react";
import { Box, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Box
      bg="wheat"
      padding="3"
      display="flex-box"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image
        src="https://www.brainville.com/UserContent/CompanyLogotypes/22841/MailLogotype/MailLogotype.png"
        width="50px"
        height="50px"
        to="/"
      />
      <Stack as="nav" direction="row">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/showreel">Showreel</Link>
        <Link to="/products">Products</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
      </Stack>
    </Box>
  );
}

/* Använder oss av Link och path från "react-router-dom".
 * Link länkar var på hemsidan man navigeras och därefter skickar användaren dit.
 * Path "/about" skickar oss till en specifik sida där det gör det enklare för användaren att se var vi är på hemsidan.
 */

export default Navbar;
