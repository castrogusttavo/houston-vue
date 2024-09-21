
<template>
  <Icon :iconName="'layout-table-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LayoutTable01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-table-01'
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
