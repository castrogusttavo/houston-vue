
<template>
  <Icon :iconName="'signal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SignalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'signal'
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
