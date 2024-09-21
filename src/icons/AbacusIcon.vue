
<template>
  <Icon :iconName="'abacus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AbacusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'abacus'
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
