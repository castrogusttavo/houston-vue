
<template>
  <Icon :iconName="'infinity-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Infinity01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'infinity-01'
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
