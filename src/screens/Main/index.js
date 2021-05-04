// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React from 'react';
import {
  Heading,
  Box,
} from 'grommet';
import a11yCatsImage from './a11ycats.jpg';
import a11yTeeImage from './a11ytee.webp';
import a11yTee2Image from './a11ytee2.webp';
import a11yHTMLCssAndA11yImage from './htmlcssa11y.webp';
import ProductCard from '../../ProductCard';

function Main() {
  return (
    <Box pad={{ vertical: 'small' }} fill overflow="hidden">
      <Heading level={1}>
        Items for you
      </Heading>
      <Box wrap justify='center' direction='row' gap='medium'>
        <ProductCard
          title='A11y Cats Mug'
          image={a11yCatsImage}
          price="$12.95"
        />
        <ProductCard
          title='This is the way T-Shirt'
          image={a11yTeeImage}
          price="$19.95"
        />
        <ProductCard
          title='A11y Rock-on T-Shirt'
          image={a11yTee2Image}
          price="$24.95"
        />
        <ProductCard
          title='HTML & CSS & JS & A11y Sticker'
          image={a11yHTMLCssAndA11yImage}
          price="$4.95"
        />
      </Box>
    </Box>
  );
}

export default Main;
