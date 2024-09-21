
<template>
  <Icon :iconName="'no-internet'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoInternetIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'no-internet'
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
