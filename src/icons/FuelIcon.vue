
<template>
  <Icon :iconName="'fuel'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FuelIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'fuel'
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
