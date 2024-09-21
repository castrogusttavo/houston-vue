
<template>
  <Icon :iconName="'tap-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tap08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tap-08'
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
