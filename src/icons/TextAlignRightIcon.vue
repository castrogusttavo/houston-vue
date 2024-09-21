
<template>
  <Icon :iconName="'text-align-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextAlignRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-align-right'
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
