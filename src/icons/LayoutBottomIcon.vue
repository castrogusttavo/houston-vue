
<template>
  <Icon :iconName="'layout-bottom'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutBottomIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-bottom'
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
