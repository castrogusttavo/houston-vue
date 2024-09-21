
<template>
  <Icon :iconName="'sad-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sad02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sad-02'
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
