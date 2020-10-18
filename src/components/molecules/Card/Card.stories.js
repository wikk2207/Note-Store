import React from 'react';
import Card from './Card';

export default {
  title: 'Components/Molecules/Card',
  component: Card,
};

const data = {
  title: 'Hello Wiksa',
  created: '3 days ago',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has \
  been the industry standard dummy text ever since the 1500s, when an unknown printer took a \
  galley of type and scrambled it to make a type specimen book. It has survived not only five \
  centuries.',
  articleUrl: 'https://reactjs.org/docs/typechecking-with-proptypes.html',
  twitterName: 'https://unavatar.now.sh/twitter/hello_roman',
};

const Template = (args) => <Card {...args} />;

export const Note = Template.bind({});
Note.args = {
  title: data.title,
  created: data.created,
  content: data.content,
};

export const Twitter = Template.bind({});
Twitter.args = {
  cardType: 'twitter',
  title: data.title,
  created: data.created,
  content: data.content,
  twitterName: data.twitterName,
};

export const Article = Template.bind({});
Article.args = {
  cardType: 'article',
  title: data.title,
  created: data.created,
  content: data.content,
  articleUrl: data.articleUrl,
};
