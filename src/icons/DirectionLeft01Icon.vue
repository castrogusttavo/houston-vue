
<template>
  <Icon :iconName="'direction-left-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DirectionLeft01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'direction-left-01'
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
