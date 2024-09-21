
<template>
  <Icon :iconName="'alien-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Alien02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alien-02'
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
