
<template>
  <Icon :iconName="'touch-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-08'
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
