
<template>
  <Icon :iconName="'flip-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlipHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flip-horizontal'
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
