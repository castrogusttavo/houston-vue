
<template>
  <Icon :iconName="'menu-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-07'
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
