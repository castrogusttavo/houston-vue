
<template>
  <Icon :iconName="'ear-rings-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EarRings01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ear-rings-01'
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
