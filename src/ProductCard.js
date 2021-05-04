// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Box,
  Heading,
} from 'grommet';
import { Favorite, ShareOption, Basket } from 'grommet-icons';

const ProductItem = ({
  title,
  price,
  image
}) => (
  <Card margin={{ top: 'medium' }} height="medium" width="medium" background="light-1">
    <CardHeader pad="medium">
      <Heading margin='none' level='2' size='small'>
        {title}
      </Heading>
    </CardHeader>
    <CardBody
      role="img"
      alt={title}
      background={{
        "color": "white",
        "position": "top",
        "repeat": "no-repeat",
        "size": "contain",
        "image": `url(${image})`
      }}
      />
    <CardFooter pad={{ horizontal: "small" }} background="light-2">
      {price}
      <Box direction='row'>
        <Button
          a11yTitle='Add this item to your basket'
          icon={<Basket color="green" />}
          hoverIndicator
        />
        <Button
          a11yTitle='Add this item to your favorites'
          icon={<Favorite color="red" />}
          hoverIndicator
        />
        <Button
          a11yTitle='Share this item'
          icon={<ShareOption color="plain" />}
          hoverIndicator
        />
      </Box>
    </CardFooter>
  </Card>
);

export default ProductItem;
