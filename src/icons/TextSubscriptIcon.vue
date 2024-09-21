
<template>
  <Icon :iconName="'text-subscript'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextSubscriptIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-subscript'
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
