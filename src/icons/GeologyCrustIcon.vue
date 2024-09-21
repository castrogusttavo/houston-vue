
<template>
  <Icon :iconName="'geology-crust'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GeologyCrustIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'geology-crust'
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
