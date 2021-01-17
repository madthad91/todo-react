import React from 'react';

import { Page } from './Page';
import * as HeaderStories from './Header.stories';

export default {
  title: 'Example/Page',
  component: Page,
};

const onLoginDefault = () =>"";
const onLogoutDefault = () =>"";
const onCreateAccountDefault = () =>""; 
const Template = (args) => <Page onLogin={onLoginDefault} 
                                  onLogout={onLogoutDefault} 
                                  onCreateAccount={onCreateAccountDefault} {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
