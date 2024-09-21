
<template>
  <Icon :iconName="'students'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StudentsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'students'
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
