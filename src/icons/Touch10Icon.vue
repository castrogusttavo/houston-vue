
<template>
  <Icon :iconName="'touch-10'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch10Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-10'
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
