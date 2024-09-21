
<template>
  <Icon :iconName="'airplane-landing-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneLanding01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-landing-01'
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
