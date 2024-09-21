
<template>
  <Icon :iconName="'home-13'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home13Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-13'
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
