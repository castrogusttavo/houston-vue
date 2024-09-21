
<template>
  <Icon :iconName="'bitcoin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin'
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
