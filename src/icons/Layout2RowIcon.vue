
<template>
  <Icon :iconName="'layout-2-row'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout2RowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-2-row'
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
