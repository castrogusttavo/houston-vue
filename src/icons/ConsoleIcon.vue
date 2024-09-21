
<template>
  <Icon :iconName="'console'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConsoleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'console'
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
