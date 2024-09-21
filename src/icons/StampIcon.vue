
<template>
  <Icon :iconName="'stamp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StampIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stamp'
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
