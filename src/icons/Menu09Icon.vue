
<template>
  <Icon :iconName="'menu-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Menu09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'menu-09'
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
