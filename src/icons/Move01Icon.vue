
<template>
  <Icon :iconName="'move-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Move01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'move-01'
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
