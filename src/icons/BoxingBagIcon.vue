
<template>
  <Icon :iconName="'boxing-bag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BoxingBagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'boxing-bag'
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
