
<template>
  <Icon :iconName="'menu-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-08'
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
