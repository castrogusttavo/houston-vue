
<template>
  <Icon :iconName="'backpack-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Backpack02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'backpack-02'
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
