
<template>
  <Icon :iconName="'gibbous-moon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GibbousMoonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gibbous-moon'
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
