
<template>
  <Icon :iconName="'sing-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SingLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sing-left'
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
