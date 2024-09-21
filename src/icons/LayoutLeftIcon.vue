
<template>
  <Icon :iconName="'layout-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-left'
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
