
<template>
  <Icon :iconName="'moon-slow-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonSlowWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-slow-wind'
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
