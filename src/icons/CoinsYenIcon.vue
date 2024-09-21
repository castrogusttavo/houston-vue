
<template>
  <Icon :iconName="'coins-yen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CoinsYenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coins-yen'
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
