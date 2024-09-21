
<template>
  <Icon :iconName="'fahrenheit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FahrenheitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fahrenheit'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
