
<template>
  <Icon :iconName="'cancel-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cancel02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cancel-02'
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
