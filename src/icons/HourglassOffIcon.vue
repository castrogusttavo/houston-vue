
<template>
  <Icon :iconName="'hourglass-off'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HourglassOffIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hourglass-off'
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
