
<template>
  <Icon :iconName="'assignments'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AssignmentsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'assignments'
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
