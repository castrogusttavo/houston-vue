
<template>
  <Icon :iconName="'menu-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MenuSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-square'
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
