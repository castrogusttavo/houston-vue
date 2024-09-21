
<template>
  <Icon :iconName="'cupcake-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cupcake02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cupcake-02'
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
