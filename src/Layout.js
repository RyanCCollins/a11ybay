// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React, { useContext } from 'react';
import {
  RoutedAnchor as Anchor,
  Text,
  Main as MainComponent,
  Header,
  Box,
  Button,
  ResponsiveContext,
  Footer,
} from 'grommet';
import { Menu } from 'grommet-icons';

function Main({
  children,
}) {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill>
      <Header pad='small' background='brand'>
        <Anchor path='/'>
          <Box align='center' gap='small' direction='row'>
            <Text weight='bold'>
              Allybay
            </Text>
          </Box>
        </Anchor>
        {size === 'small' && <Button icon={<Menu />} />}
        {size !== 'small' &&
          <Box
            style={{ listStyle: 'none' }}
            direction='row'
            gap='medium'
            align='center'
            as='ul'
          >
            <li>
              <Anchor label='About' path='/about' />
            </li>
            <li>
              <Anchor label='My Account' path='#' />
            </li>
            <li>
              <Anchor label='Cart' path='#' />
            </li>
          </Box>
        }
      </Header>
      <MainComponent id='main' pad='medium' flex as='main'>
        {children}
      </MainComponent>
      <Footer
        id='footer'
        direction='row-responsive'
        background="light-2"
        fill="horizontal"
        pad="small"
      >
        (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
        <Box
          style={{ listStyle: 'none' }}
          pad='none'
          margin='none'
          direction='row'
          gap='medium'
          align='center'
          as='ul'
        >
          <li>
            <Anchor label='About' href='/about' />
          </li>
          <li>
            <Anchor label='Privacy Policy' href='#' />
          </li>
          <li>
            <Anchor label='Terms of Service' href='#' />
          </li>
        </Box>
      </Footer>
    </Box>
  );
}

export default Main;
