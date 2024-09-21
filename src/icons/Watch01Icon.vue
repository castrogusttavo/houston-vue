
<template>
  <Icon :iconName="'watch-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Watch01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'watch-01'
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
