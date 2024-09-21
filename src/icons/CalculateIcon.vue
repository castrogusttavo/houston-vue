
<template>
  <Icon :iconName="'calculate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CalculateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'calculate'
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
