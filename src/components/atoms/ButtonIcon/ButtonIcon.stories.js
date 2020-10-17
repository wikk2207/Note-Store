import React from 'react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background-color: ${({ theme }) => theme.note};
`;

export default {
  title: 'Components/Atoms/ButtonIcon',
  component: ButtonIcon,
};

const Template = (args) => (
  <YellowBackground>
    <ButtonIcon {...args} />
  </YellowBackground>
);

export const Bulb = Template.bind({});
Bulb.args = {
  icon: bulbIcon,
  active: false,
};

export const Logout = Template.bind({});
Logout.args = {
  icon: logoutIcon,
  active: false,
};

export const Pen = Template.bind({});
Pen.args = {
  icon: penIcon,
  active: false,
};

export const Plus = Template.bind({});
Plus.args = {
  icon: plusIcon,
  active: false,
};

export const Twitter = Template.bind({});
Twitter.args = {
  icon: twitterIcon,
  active: false,
};
