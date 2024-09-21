
<template>
  <Icon :iconName="'beta'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BetaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'beta'
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
