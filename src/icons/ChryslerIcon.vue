
<template>
  <Icon :iconName="'chrysler'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChryslerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chrysler'
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
