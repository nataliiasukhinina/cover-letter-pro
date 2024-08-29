import { Meta, StoryObj } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';

// Define the metadata for the component
const meta: Meta<NavigationComponent> = {
  component: NavigationComponent,
  title: 'NavigationComponent',
  tags: ['autodocs'], // Optional for auto-generated documentation
};

export default meta;
type Story = StoryObj<NavigationComponent>;

// Create a default story
export const Primary: Story = {
  args: {
    // Provide any default input properties here
    // title: 'Hello, Storybook!',
  },
};
