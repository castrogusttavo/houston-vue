
<template>
  <Icon :iconName="'elearning-exchange'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ElearningExchangeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'elearning-exchange'
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
