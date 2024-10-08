import { Button } from '@/packages/ui';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    // Define argTypes based on the Button component from packages/ui
    // This may need adjustment depending on the exact props of the imported Button
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

// Create a template for your stories
const Template = (args) => <Button {...args} />;

// Create the stories
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
