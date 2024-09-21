
<template>
  <Icon :iconName="'developer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DeveloperIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'developer'
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
