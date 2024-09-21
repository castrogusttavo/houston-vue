
<template>
  <Icon :iconName="'bitcoin-database'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinDatabaseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-database'
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
