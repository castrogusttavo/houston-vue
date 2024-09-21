
<template>
  <Icon :iconName="'bitcoin-mail'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinMailIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-mail'
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
