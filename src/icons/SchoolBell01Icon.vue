
<template>
  <Icon :iconName="'school-bell-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolBell01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school-bell-01'
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
