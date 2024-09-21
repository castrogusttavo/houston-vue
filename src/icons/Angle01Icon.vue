
<template>
  <Icon :iconName="'angle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Angle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'angle-01'
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
