
<template>
  <Icon :iconName="'fast-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FastWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fast-wind'
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
