
<template>
  <Icon :iconName="'wattpad'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WattpadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wattpad'
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
