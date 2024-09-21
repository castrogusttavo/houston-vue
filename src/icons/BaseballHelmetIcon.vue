
<template>
  <Icon :iconName="'baseball-helmet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BaseballHelmetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'baseball-helmet'
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
