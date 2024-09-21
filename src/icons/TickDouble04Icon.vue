
<template>
  <Icon :iconName="'tick-double-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TickDouble04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tick-double-04'
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
