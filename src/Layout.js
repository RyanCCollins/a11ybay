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
import { Menu, User, Cart, StatusInfo } from 'grommet-icons';

function Main({
  children,
}) {
  const size = useContext(ResponsiveContext);
  return (
    <Box fill>
      <Header pad='small' background='brand'>
        <Anchor color='white' path='/'>
          <Box align='center' gap='small' direction='row'>
            <Text size='medium' weight='bold'>
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
            <Box as='li'>
              <Anchor
                style={{ display: 'flex', alignItems: 'center' }}
                icon={<StatusInfo />}
                color='white'
                label='About'
                path='/about'
              />
            </Box>
            <Box as='li'>
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
          gap='medium'
          align='center'
          as='ul'
        >
          <li>
            <Anchor label='About' path='/about' />
          </li>
          <li>
            <Anchor label='Privacy Policy' path='/' />
          </li>
          <li>
            <Anchor label='Terms of Service' path='/' />
          </li>
        </Box>
      </Footer>
    </Box>
  );
}

export default Main;
