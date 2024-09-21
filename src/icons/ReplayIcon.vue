
<template>
  <Icon :iconName="'replay'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReplayIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'replay'
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
