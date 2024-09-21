
<template>
  <Icon :iconName="'falling-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FallingStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'falling-star'
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
