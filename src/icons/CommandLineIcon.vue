
<template>
  <Icon :iconName="'command-line'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CommandLineIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'command-line'
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
