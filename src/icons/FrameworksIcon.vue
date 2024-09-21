
<template>
  <Icon :iconName="'frameworks'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FrameworksIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'frameworks'
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
