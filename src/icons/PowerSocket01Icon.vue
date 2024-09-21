
<template>
  <Icon :iconName="'power-socket-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PowerSocket01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'power-socket-01'
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
