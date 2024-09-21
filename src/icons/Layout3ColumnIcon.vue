
<template>
  <Icon :iconName="'layout-3-column'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout3ColumnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-3-column'
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
