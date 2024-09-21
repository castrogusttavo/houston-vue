
<template>
  <Icon :iconName="'moon-fast-wind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoonFastWindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'moon-fast-wind'
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
