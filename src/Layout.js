// (C) Copyright 2017-2021 Hewlett Packard Enterprise Development LP
import React, { useContext } from 'react';
import {
  RoutedAnchor as Anchor,
  Main as MainComponent,
  Header,
  Box,
  Button,
  ResponsiveContext,
  Footer,
} from 'grommet';
import { Menu, User, Cart, WheelchairActive } from 'grommet-icons';

function Main({
  children,
}) {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill>
      <Header pad='small' background='#0d5265'>
        <Anchor color='white' label='Allybay' icon={<WheelchairActive />} path='/' />
        {size === 'small' && <Button icon={<Menu />} />}
        {size !== 'small' &&
          <Box
            style={{ listStyle: 'none' }}
            direction='row'
            align='center'
            as='ul'
          >
            <Box as='li' margin={{ right: 'medium' }}>
              <Anchor
                style={{ display: 'flex', alignItems: 'center' }}
                icon={<User />}
                color='white'
                label='My Account'
                path='#'
              />
            </Box>
            <Box as='li'>
              <Anchor
                style={{ display: 'flex', alignItems: 'center' }}
                icon={<Cart />}
                color='white'
                label='Cart'
                path='#'
              />
            </Box>
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
          align='center'
          as='ul'
        >
          <Box as='li' margin={{ right: 'medium' }}>
            <Anchor label='About' path='/about' />
          </Box>
          <Box as='li' margin={{ right: 'medium' }}>
            <Anchor label='Privacy Policy' path='/' />
          </Box>
          <Box as='li'>
            <Anchor label='Terms of Service' path='/' />
          </Box>
        </Box>
      </Footer>
    </Box>
  );
}

export default Main;
