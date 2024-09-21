
<template>
  <Icon :iconName="'java'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'JavaIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'java'
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
