
<template>
  <Icon :iconName="'text-firstline-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextFirstlineRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-firstline-right'
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
