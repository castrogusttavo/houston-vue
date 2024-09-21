
<template>
  <Icon :iconName="'maximize-screen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MaximizeScreenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maximize-screen'
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
