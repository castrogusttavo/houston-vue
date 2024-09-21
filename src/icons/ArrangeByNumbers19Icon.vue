
<template>
  <Icon :iconName="'arrange-by-numbers-1-9'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrangeByNumbers19Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrange-by-numbers-1-9'
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
