
<template>
  <Icon :iconName="'router-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Router02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'router-02'
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
