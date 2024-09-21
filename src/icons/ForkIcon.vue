
<template>
  <Icon :iconName="'fork'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ForkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fork'
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
