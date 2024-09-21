
<template>
  <Icon :iconName="'menu-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-04'
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
