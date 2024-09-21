
<template>
  <Icon :iconName="'chart-relationship'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ChartRelationshipIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chart-relationship'
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
