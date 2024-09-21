
<template>
  <Icon :iconName="'course'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CourseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'course'
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
