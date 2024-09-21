
<template>
  <Icon :iconName="'menu-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-03'
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
