
<template>
  <Icon :iconName="'golf-cart'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GolfCartIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'golf-cart'
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
