import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Note = Template.bind({});

export const Twitter = Template.bind({});
Twitter.args = {
  cardType: 'twitter',
};

export const Article = Template.bind({});
Article.args = {
  cardType: 'article',
};
