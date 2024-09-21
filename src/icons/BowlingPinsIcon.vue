
<template>
  <Icon :iconName="'bowling-pins'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BowlingPinsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bowling-pins'
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
