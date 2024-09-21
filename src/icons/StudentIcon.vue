
<template>
  <Icon :iconName="'student'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StudentIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'student'
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
