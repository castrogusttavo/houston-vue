
<template>
  <Icon :iconName="'bubble-tea-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BubbleTea01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bubble-tea-01'
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
