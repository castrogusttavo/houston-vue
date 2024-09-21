
<template>
  <Icon :iconName="'mouse-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-08'
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
