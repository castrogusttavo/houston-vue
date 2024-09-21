
<template>
  <Icon :iconName="'accident'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AccidentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'accident'
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
