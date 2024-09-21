
<template>
  <Icon :iconName="'airplane-take-off-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirplaneTakeOff01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-take-off-01'
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
