
<template>
  <Icon :iconName="'text-selection'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextSelectionIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-selection'
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
