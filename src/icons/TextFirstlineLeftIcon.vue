
<template>
  <Icon :iconName="'text-firstline-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextFirstlineLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-firstline-left'
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
