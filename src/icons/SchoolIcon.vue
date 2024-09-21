
<template>
  <Icon :iconName="'school'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SchoolIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'school'
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
