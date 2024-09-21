
<template>
  <Icon :iconName="'layout-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-right'
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
