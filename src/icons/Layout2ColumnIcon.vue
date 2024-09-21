
<template>
  <Icon :iconName="'layout-2-column'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout2ColumnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-2-column'
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
