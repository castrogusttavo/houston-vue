
<template>
  <Icon :iconName="'user-block-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserBlock02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-block-02'
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
