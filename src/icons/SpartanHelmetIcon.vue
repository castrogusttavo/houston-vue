
<template>
  <Icon :iconName="'spartan-helmet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SpartanHelmetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'spartan-helmet'
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
