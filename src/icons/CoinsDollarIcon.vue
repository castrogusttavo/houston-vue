
<template>
  <Icon :iconName="'coins-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoinsDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-dollar'
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
