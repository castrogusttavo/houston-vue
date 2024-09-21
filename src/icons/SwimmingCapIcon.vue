
<template>
  <Icon :iconName="'swimming-cap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwimmingCapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swimming-cap'
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
