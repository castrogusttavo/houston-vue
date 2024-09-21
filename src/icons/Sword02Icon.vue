
<template>
  <Icon :iconName="'sword-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sword02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sword-02'
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
