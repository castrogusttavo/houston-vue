
<template>
  <Icon :iconName="'road-wayside'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RoadWaysideIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'road-wayside'
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
