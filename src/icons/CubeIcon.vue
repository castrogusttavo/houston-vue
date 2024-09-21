
<template>
  <Icon :iconName="'cube'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CubeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cube'
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
