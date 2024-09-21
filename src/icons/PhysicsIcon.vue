
<template>
  <Icon :iconName="'physics'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PhysicsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'physics'
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
