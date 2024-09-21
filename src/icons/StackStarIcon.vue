
<template>
  <Icon :iconName="'stack-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StackStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stack-star'
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
