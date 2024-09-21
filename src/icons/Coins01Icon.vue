
<template>
  <Icon :iconName="'coins-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coins01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-01'
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
