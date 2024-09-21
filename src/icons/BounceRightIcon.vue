
<template>
  <Icon :iconName="'bounce-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BounceRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bounce-right'
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
