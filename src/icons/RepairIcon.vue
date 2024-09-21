
<template>
  <Icon :iconName="'repair'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RepairIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'repair'
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
