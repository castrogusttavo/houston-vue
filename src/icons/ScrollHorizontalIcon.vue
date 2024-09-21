
<template>
  <Icon :iconName="'scroll-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScrollHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'scroll-horizontal'
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
