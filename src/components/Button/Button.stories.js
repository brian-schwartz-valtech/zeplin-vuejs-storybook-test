import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import MyButton from './Button.vue';

export default { 
    title: 'Button',
    decorators: [withKnobs],
 };

export const asAComponent = () => ({
  components: { MyButton },

  props: {
    buttonLabelText: {
      type: String,
      default: text('Button Label', 'Storybook Test')
    },
    isDisabled: {
      type: Boolean,
      default: boolean('Disabled', false)
    },
    isRounded: { 
      type: String, 
      default: text('class', '') 
    }
  },
  template: `
  <MyButton
    :buttonLabel="buttonLabelText"
    :class="isRounded"
    :isDisabled="isDisabled"
  />
  `
});
