
<template>
  <Icon :iconName="'menu-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-01'
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
