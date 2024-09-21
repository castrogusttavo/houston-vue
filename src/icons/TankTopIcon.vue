
<template>
  <Icon :iconName="'tank-top'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TankTopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tank-top'
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
