
<template>
  <Icon :iconName="'cupcake-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cupcake03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cupcake-03'
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
