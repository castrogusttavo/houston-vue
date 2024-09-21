
<template>
  <Icon :iconName="'user-circle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserCircle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-circle-02'
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
