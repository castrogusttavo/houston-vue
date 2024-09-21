
<template>
  <Icon :iconName="'menu-11'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu11Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-11'
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
