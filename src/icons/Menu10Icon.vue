
<template>
  <Icon :iconName="'menu-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-10'
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
