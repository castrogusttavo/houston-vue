
<template>
  <Icon :iconName="'structure-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Structure01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'structure-01'
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
