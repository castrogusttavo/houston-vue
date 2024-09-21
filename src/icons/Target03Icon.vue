
<template>
  <Icon :iconName="'target-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Target03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'target-03'
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
