
<template>
  <Icon :iconName="'airplane-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Airplane01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airplane-01'
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
