
<template>
  <Icon :iconName="'briefcase-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Briefcase02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'briefcase-02'
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
