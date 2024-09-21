
<template>
  <Icon :iconName="'honour-star'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HonourStarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'honour-star'
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
