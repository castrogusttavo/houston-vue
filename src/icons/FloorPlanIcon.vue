
<template>
  <Icon :iconName="'floor-plan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FloorPlanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'floor-plan'
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
