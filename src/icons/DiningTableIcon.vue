
<template>
  <Icon :iconName="'dining-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiningTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dining-table'
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
