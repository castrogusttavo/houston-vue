
<template>
  <Icon :iconName="'arrange-by-numbers-9-1'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrangeByNumbers91Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrange-by-numbers-9-1'
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
