
<template>
  <Icon :iconName="'minimize-screen'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MinimizeScreenIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minimize-screen'
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
