
<template>
  <Icon :iconName="'touch-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-06'
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
