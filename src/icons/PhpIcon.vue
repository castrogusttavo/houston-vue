
<template>
  <Icon :iconName="'php'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PhpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'php'
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
