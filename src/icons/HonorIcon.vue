
<template>
  <Icon :iconName="'honor'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HonorIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'honor'
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
