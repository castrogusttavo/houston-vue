
<template>
  <Icon :iconName="'hand-pointing-down-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HandPointingDown01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hand-pointing-down-01'
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
