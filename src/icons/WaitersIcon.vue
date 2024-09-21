
<template>
  <Icon :iconName="'waiters'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WaitersIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waiters'
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
