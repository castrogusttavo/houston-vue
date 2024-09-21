
<template>
  <Icon :iconName="'backward-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Backward01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'backward-01'
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
