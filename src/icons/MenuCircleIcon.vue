
<template>
  <Icon :iconName="'menu-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MenuCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-circle'
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
