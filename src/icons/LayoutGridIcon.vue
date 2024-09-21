
<template>
  <Icon :iconName="'layout-grid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutGridIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-grid'
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
