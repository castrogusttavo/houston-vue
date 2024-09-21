
<template>
  <Icon :iconName="'arrow-down-left-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowDownLeft01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-down-left-01'
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
