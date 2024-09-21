
<template>
  <Icon :iconName="'divide-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DivideSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'divide-sign'
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
