
<template>
  <Icon :iconName="'sausage'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SausageIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sausage'
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
