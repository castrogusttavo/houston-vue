
<template>
  <Icon :iconName="'jupiter'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JupiterIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'jupiter'
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
