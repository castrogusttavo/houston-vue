
<template>
  <Icon :iconName="'sing-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SingRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sing-right'
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
