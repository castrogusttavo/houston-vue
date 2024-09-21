
<template>
  <Icon :iconName="'direction-right-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DirectionRight01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'direction-right-01'
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
