
<template>
  <Icon :iconName="'acceleration'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccelerationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'acceleration'
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
