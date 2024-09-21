
<template>
  <Icon :iconName="'grid-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GridTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grid-table'
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
