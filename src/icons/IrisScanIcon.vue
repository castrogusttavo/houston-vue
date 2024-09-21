
<template>
  <Icon :iconName="'iris-scan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'IrisScanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'iris-scan'
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
