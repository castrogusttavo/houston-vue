
<template>
  <Icon :iconName="'school-bell-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolBell02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-bell-02'
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
