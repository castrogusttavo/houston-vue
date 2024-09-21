
<template>
  <Icon :iconName="'covariate'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CovariateIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'covariate'
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
