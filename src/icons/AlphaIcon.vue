
<template>
  <Icon :iconName="'alpha'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alpha'
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
