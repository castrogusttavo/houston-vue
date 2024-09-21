
<template>
  <Icon :iconName="'more-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoreHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-horizontal'
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
