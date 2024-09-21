
<template>
  <Icon :iconName="'home-08'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Home08Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'home-08'
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
