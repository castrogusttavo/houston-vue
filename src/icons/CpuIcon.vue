
<template>
  <Icon :iconName="'cpu'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CpuIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cpu'
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
