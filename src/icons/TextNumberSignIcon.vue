
<template>
  <Icon :iconName="'text-number-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextNumberSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-number-sign'
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
