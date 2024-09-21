
<template>
  <Icon :iconName="'asteroid-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Asteroid02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'asteroid-02'
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
