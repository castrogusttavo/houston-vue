
<template>
  <Icon :iconName="'arrow-shrink'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowShrinkIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-shrink'
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
