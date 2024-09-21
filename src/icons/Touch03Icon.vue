
<template>
  <Icon :iconName="'touch-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-03'
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
