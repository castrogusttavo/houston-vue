
<template>
  <Icon :iconName="'layout-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-top'
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
