
<template>
  <Icon :iconName="'sink-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sink01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sink-01'
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
