import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  RoutedAnchor as Anchor,
  Text,
  Tip,
} from "grommet";
import { Basket, Favorite, ShareOption } from "grommet-icons";
import React from "react";

const ProductItem = ({ title, price, image }) => {
  const tipId = `card-title-${title}`;
  return (
    <Card
      margin={{ top: "medium" }}
      height="medium"
      width="medium"
      background="light-1"
    >
      <CardHeader pad="medium">
        <Tip ariaDescribedBy={tipId} content={title}>
          <Heading
            id={tipId}
            truncate={true}
            margin="none"
            level="2"
            size="small"
          >
            {title}
          </Heading>
        </Tip>
      </CardHeader>
      <CardBody pad="none">
        <Anchor style={{ width: "100%", height: "100%" }} path="/">
          <Box
            fill
            role="img"
            title={`${title} ${price}`}
            background={{
              color: "white",
              position: "top",
              repeat: "no-repeat",
              size: "contain",
              image: `url(${image})`,
            }}
          />
        </Anchor>
      </CardBody>
      <CardFooter pad="small" background="light-2">
        <Text weight="bold">{price}</Text>
        <Box direction="row">
          <Button
            a11yTitle={`Add ${title} to your basket`}
            icon={<Basket color="green" />}
            hoverIndicator
          />
          <Button
            a11yTitle={`Add ${title} to your favorites`}
            icon={<Favorite color="red" />}
            hoverIndicator
          />
          <Button
            a11yTitle={`Share ${title}`}
            icon={<ShareOption color="plain" />}
            hoverIndicator
          />
        </Box>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
