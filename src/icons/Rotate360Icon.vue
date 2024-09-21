
<template>
  <Icon :iconName="'rotate-360'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Rotate360Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-360'
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
