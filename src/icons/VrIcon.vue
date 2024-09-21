
<template>
  <Icon :iconName="'vr'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VrIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vr'
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
