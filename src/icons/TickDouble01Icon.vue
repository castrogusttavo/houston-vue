
<template>
  <Icon :iconName="'tick-double-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TickDouble01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tick-double-01'
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
