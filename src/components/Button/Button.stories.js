import { withKnobs } from '@storybook/addon-knobs';
import MyButton from './Button.vue';

export default { 
    title: 'Button',
    decorators: [withKnobs],
 };

export const asAComponent = () => ({
  components: { MyButton },
  template: '<my-button buttonLabel="Storyboook test" :rounded="false"/>',
});
