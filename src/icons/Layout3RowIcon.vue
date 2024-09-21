
<template>
  <Icon :iconName="'layout-3-row'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout3RowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-3-row'
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
