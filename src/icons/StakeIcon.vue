
<template>
  <Icon :iconName="'stake'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StakeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stake'
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
