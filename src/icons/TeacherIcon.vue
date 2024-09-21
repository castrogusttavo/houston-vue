
<template>
  <Icon :iconName="'teacher'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TeacherIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'teacher'
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
