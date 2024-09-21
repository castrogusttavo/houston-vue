
<template>
  <Icon :iconName="'skew'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SkewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'skew'
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
