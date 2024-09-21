
<template>
  <Icon :iconName="'menu-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-06'
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
