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
          icon={<Basket a11yTitle='Add this item to your basket' color="green" />}
          hoverIndicator
        />
        <Button
          icon={<Favorite a11yTitle='Add this item to your favorites' color="red" />}
          hoverIndicator
        />
        <Button icon={<ShareOption a11yTitle='Share this item' color="plain" />} hoverIndicator />
      </Box>
    </CardFooter>
  </Card>
);

export default ProductItem;
