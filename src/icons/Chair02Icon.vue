
<template>
  <Icon :iconName="'chair-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chair02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chair-02'
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
